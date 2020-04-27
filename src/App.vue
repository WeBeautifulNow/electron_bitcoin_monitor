<template>
	<div id="app">
		<Tabs :value="tabName">
			<TabPane label="行情&持仓" name="currentStatus">
				<CurrentStatus
					:myPurchasePrice="myPurchasePrice"
					:myPurchaseQuantity="myPurchaseQuantity"
					:deleteOneRecord="deleteOneRecord"
				/>
			</TabPane>
			<TabPane label="添加持仓" name="addExisting">
				<AddExisting 
					:myPurchasePrice="myPurchasePrice"
					:myPurchaseQuantity="myPurchaseQuantity"
					:addRecord="addRecord"
				/>
			</TabPane>
		</Tabs>
	</div>
</template>

<script>
import CurrentStatus from "./components/CurrentStatus";
import AddExisting from "./components/AddExisting";
export default {
	name: "App",
	components: {
		CurrentStatus,
		AddExisting
	},
	data() {
		return {
			tabName: "currentStatus",
			myPurchasePrice: [],
			myPurchaseQuantity: []
		};
	},
	methods: {
		addRecord(priceArr, quantityArr) {
			this.concatArr(this.myPurchasePrice, priceArr);
			this.concatArr(this.myPurchaseQuantity, quantityArr);
		},
		deleteOneRecord(index) {
			this.myPurchasePrice.splice(index, 1);
			this.myPurchaseQuantity.splice(index, 1);
		},
		concatArr(arr1, arr2) {
			for (let item of arr2) {
				arr1.push(item);
			}
		}
	}
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
