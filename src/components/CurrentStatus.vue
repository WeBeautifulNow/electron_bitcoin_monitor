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
			<ul class="line">
				<li>
					<div> price </div>
					<div> quantity </div>
				</li>
				<li v-for="(price, index) in myPurchasePrice" :key="index">
					<div>
						{{ price }}
					</div>
					<div>
						{{ myPurchaseQuantity[index] }}
					</div>
				</li>
			</ul>
			
		</Card>
	</div>
</template>

<script>
export default {
	name: "CurrentStatus",
	props:['myPurchasePrice', 'myPurchaseQuantity'],
	data() {
		return {
			bitFeturePrice: 5556,
		};
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
