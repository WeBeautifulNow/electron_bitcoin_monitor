<template>
	<div>
		<div class="area">
			<div class="areaTitle"> Add one </div>
			<Input v-model="price" placeholder="price" style="width: 130px; margin-right: 40px"/>
			<Input v-model="quantity" placeholder="quantity" style="width: 130px; margin-right: 30px"/>
			<Button icon="md-checkmark" type="success" ghost @click="addOne"/>
		</div>
		<div class="area">
			<div class="areaTitle"> Bulk add </div>
			<Input v-model="bulkStr" placeholder="bulk add use 'price, quantity p,q 6888,500'" style="width: 300px; margin-right: 30px"/>
			<Button icon="md-checkmark" type="success" ghost @click="addBulk"/>
		</div>
		<div class="area">
			<div class="areaTitle"> Export </div>
			<Input v-model="exportStr" placeholder="click button to copy current data" style="width: 300px; margin-right: 30px"/>
			<Button icon="md-copy" type="primary" ghost @click="exportData"/>
		</div>
		<div class="area">
			<div class="areaTitle"> Tips </div>
			<Tag color="yellow">tips1</Tag>
			如果是做空，请把买入价用*-1表示。比如价格8000ustd做空，输入-8000
		</div>
	</div>
</template>

<script>
export default {
	name: "AddExisting",
	data() {
		return {
			price: '',
			quantity: '',
			bulkStr: '',
			exportStr: '',
			importStr: ''
		};
	},
	methods: {
		addOne() {
			// console.log(1111)
			this.addRecord([this.price], [this.quantity]);
			this.$Message.success('add one record success');
			this.clearData();
		},
		addBulk() {
			let bulkArr = this.bulkStr.split(' ');
			let priceArr = [], quantityArr = [];
			for (let itemStr of bulkArr) {
				let [price, quantity] = itemStr.split(',');
				priceArr.push(price);
				quantityArr.push(quantity);
			}
			this.addRecord(priceArr, quantityArr);
			this.$Message.success('add bulk record success');
			this.clearData();
		},
		exportData() {
			// Calculate the current result
			let curExportStr = '';
			let exportArr = [];
			for (let index in this.myPurchasePrice) {
				exportArr.push(this.myPurchasePrice[index] + ',' + this.myPurchaseQuantity[index]);
			}
			curExportStr = exportArr.join(' ');
			this.exportStr = curExportStr;

			// copy to the clipboard
			const input = document.createElement('input');
			document.body.appendChild(input);
			input.setAttribute('value', curExportStr);
			input.select();
			if (document.execCommand('copy')) {
				document.execCommand('copy');
				this.$Message.success('The content has been copied to the clipboard');
			}
			document.body.removeChild(input);

			setTimeout(this.clearData,4000);
		},
		clearData() {
			this.price = '';
			this.quantity = '';
			this.bulkStr = '';
			this.exportStr = '';
			this.importStr = '';
		}
	},
	props:['myPurchasePrice', 'myPurchaseQuantity', 'addRecord']
};
</script>
<style scoped>
	.area {
		margin: 40px;
	}
	.areaTitle {
		font-size: 18px;
		color: #6495ED;
		margin-bottom: 10px;
	}
</style>
