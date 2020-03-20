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
						Current
					</div>
					<div>
						5555
					</div>
				</li>
				<li>
					<div>
						Future
					</div>
					<div>
						4444
					</div>
				</li>
			</ul>
		</Card>
		<br /><br />
		<Card class="cardWapper">
			<p slot="title">
				<Icon type="logo-usd" />
				My own
			</p>
			<ul class="line">
				<li>
					<div>
						My Bid Price
					</div>
					<div></div>
				</li>
				<li>
					<div>
						My Lever
					</div>
					<div></div>
				</li>
				<li>
					<div>
						Profit And Loss
					</div>
					<div></div>
				</li>
				<li>
					<div>
						Profit And Loss (%)
					</div>
					<div></div>
				</li>
			</ul>
		</Card>
	</div>
</template>

<script>
export default {
	name: "CurrentStatus"
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
