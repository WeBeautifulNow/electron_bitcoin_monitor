<template>
	<div>
		<Card class="cardWapper">
			<p slot="title">
				<Icon type="logo-bitcoin" />
				Bit Coin Price
			</p>
			<a href="www.baidu.com" slot="extra">
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
			<ul>
				<!-- <li v-for="(price, index) in this.props.myPurchasePrice" :key="index">
					<div>
						{{ price }}
					</div>
					<div>
						{{ this.props.myPurchaseQuantity[index] }}
					</div>
				</li> -->
			</ul>
			
		</Card>
		<AddExisting :handleAdd="handleAdd" />
	</div>
</template>

<script>
import AddExisting from "./AddExisting";
export default {
	name: "CurrentStatus",
	components: {
		AddExisting
	},
	props:[myPurchasePrice, myPurchaseQuantity],
	data() {
		return {
			bitCurrentPrice: 5555,
			bitFeturePrice: 5556,

			myBidPrice: 0,
			myLeverRatio: 0,
			myBuyQuantity: 0
		};
	},
	methods: {
		handleAdd(formData) {
			this.myBidPrice = formData.bidPrice;
			this.myLeverRatio = formData.leverRatio;
			this.myBuyQuantity = formData.buyQuantity;
		}
	},
	computed: {
		profitAndLoss: () => (this.myBidPrice - this.bitCurrentPrice) * this.myBuyQuantity,
		profitAndLossPercentage: () => ((this.myBidPrice - this.bitCurrentPrice) / this.bitCurrentPrice) * 100
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
