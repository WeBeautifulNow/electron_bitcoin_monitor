<template>
	<div>
		<div class="area">
			<div> Add one </div>
			<Input v-model="price" placeholder="price" style="width: 300px"/>
			<Input v-model="quantity" placeholder="quantity" style="width: 300px"/>
			<Button class="btn" type="dashed" style="margin: 20px 0 0 0" @click="addOne"> add own </Button>
		</div>
		<div class="area">
			<div> Bulk add </div>
			<Input v-model="price" placeholder="bulk add use [price, quantity],[],[]" style="width: 300px"/>
			<Button class="btn" type="dashed" style="margin: 20px 0 0 0" @click="addOne"> bulk add </Button>
		</div>
		<div class="area">
			<div> export </div>
			<Button class="btn" type="dashed" style="margin: 20px 0 0 0" @click="addOne"> export </Button>
		</div>
	</div>
</template>

<script>
export default {
	name: "AddExisting",
	data() {
		return {
			price: null,
			quantity: null
		};
	},
	methods: {
		addOne() {
			this.props.myPurchasePrice.push(this.price);
			this.props.myPurchaseQuantity.push(this.quantity);
		}
	},
	props:['myPurchasePrice', 'myPurchaseQuantity']
};
</script>
<style scoped>
	.btn {
		display: block;
		margin: auto;
	}
	.area {
		margin-bottom: 20px;
	}
</style>
