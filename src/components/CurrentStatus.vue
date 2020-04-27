<template>
	<div>
		<Card class="cardWapper">
			<p slot="title">
				<Icon type="logo-bitcoin" />
				Bit Coin Price
			</p>
			<a href="https://usdt.58ex.com/trade/1001" slot="extra">
				<Icon type="ios-loop-strong"></Icon>
				Open website
			</a>
			<ul class="line">
				<li>
					<div>
						Future
					</div>
					<div>
						{{ bitFeturePrice }}
					</div>
				</li>
			</ul>
		</Card>
		<br>
		<Card class="cardWapper">
			<p slot="title">
				<Icon type="logo-usd" />
				My Own
			</p>
			<ul class="line">
				<li>
					<div> del </div>
					<div> price </div>
					<div> quantity </div>
					<div> profit </div>
				</li>
				<li v-for="(price, index) in myPurchasePrice" :key="price + '_' + myPurchaseQuantity[index]">
					<div>
						<Icon @click="() => deleteOne(index)" type="ios-trash-outline" />
					</div>
					<div>
						{{ price }}
					</div>
					<div>
						{{ myPurchaseQuantity[index] }}
					</div>
					<div>
						{{ price > 0 ? (bitFeturePrice - price).toFixed(2) : (- price - bitFeturePrice).toFixed(2)}}
					</div>
				</li>
			</ul>
			
		</Card>
	</div>
</template>

<script>
import * as axios from "axios";
export default {
	name: "CurrentStatus",
	props:['myPurchasePrice', 'myPurchaseQuantity', 'deleteOneRecord'],
	data() {
		return {
			bitFeturePrice: 0,
			lastReminderTime: -60000,
			priceGap: 50
		};
	},
	mounted: function() {
		let self = this;
		setInterval( () => {
			axios
			.get('/v1/usdt/market/ticker?contractId=1001')
			.then(response => {
				self.bitFeturePrice = +response.data.data.last;
				self.priceDetection();
			})
		}, 2000)
	},
	methods: {
		priceDetection() {
			let curTime = new Date().getTime();
			// The interval between two reminders should be greater than ten minutes
			if (curTime - this.lastReminderTime < 60000) return;
			let max = 0, min = 1000000;
			this.myPurchasePrice.forEach(price => {
				let absPrice = Math.abs(price);
				min = Math.min(absPrice, min);
				max = Math.max(absPrice, max);
			});
			if (this.bitFeturePrice - max > this.priceGap || min - this.bitFeturePrice > this.priceGap) {
				this.reminderMe();
				this.lastReminderTime = curTime;
			}
		},
		reminderMe() {
			this.$Message.warning("note current price!!");
		},
		deleteOne(index) {
			this.deleteOneRecord(index);
			this.$Message.success("delete one record success");
		}
	}
};
</script>
<style scoped>
.cardWapper {
	width: 80%;
	margin: 30px auto 0;
}
ul.line > li {
	display: flex;
	justify-content: space-between;
	font-size: 20px;
}
</style>
