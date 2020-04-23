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
		<br /><br />
		<Card class="cardWapper">
			<p slot="title">
				<Icon type="logo-usd" />
				My Own
			</p>
			<ul class="line">
				<li>
					<div> price </div>
					<div> quantity </div>
					<div> profit </div>
				</li>
				<li v-for="(price, index) in myPurchasePrice" :key="index">
					<div>
						{{ price }}
					</div>
					<div>
						{{ myPurchaseQuantity[index] }}
					</div>
					<div>
						{{ price > 0 ? price - bitFeturePrice : bitFeturePrice - price}}
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
	props:['myPurchasePrice', 'myPurchaseQuantity'],
	data() {
		return {
			bitFeturePrice: 5556,
		};
	},
	mounted: function() {
		setTimeout( () => {
			axios
			.get('https://openapi.58ex.com/v1/usdt/market/ticker?contractId=1001')
			.then(response => this.bitFeturePrice = response.data.last)
		}, 2000)
	},
	methods: {
		
	}
};
</script>
<style scoped>
.cardWapper {
	width: 80%;
	margin: auto;
}
ul.line > li {
	display: flex;
	justify-content: space-between;
	font-size: 20px;
}
</style>
