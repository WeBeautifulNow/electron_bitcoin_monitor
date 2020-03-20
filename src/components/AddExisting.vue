<template>
	<div>
		<Button type="dashed" style="margin: 20px 0 0 0" @click="openModal"> add own </Button>
		<Modal v-model="visable" title="添加持仓" @on-ok="addOwn" @on-cancel="closeModal">
			<Form :model="formData">
				<FormItem>
					<Input type="text" v-model="formData.bidPrice" placeholder="买入价格" />
				</FormItem>
				<FormItem>
					<Input type="text" v-model="formData.leverRatio" placeholder="杠杆倍率" />
				</FormItem>
				<FormItem>
					<Input type="text" v-model="formData.buyQuantity" placeholder="买入数量(算上杠杆)" />
				</FormItem>
			</Form>
		</Modal>
	</div>
</template>

<script>
export default {
	name: "AddExisting",
	data() {
		return {
			visable: false,
			formData: {
				bidPrice: null,
				leverRatio: null,
				buyQuantity: null
			}
		};
	},
	methods: {
		clearFormData() {
			this.formData.bidPrice = null;
			this.formData.leverRatio = null;
			this.formData.buyQuantity = null;
		},
		closeModal() {
			this.clearFormData();
			this.visable = false;
		},
		addOwn() {
			this.handleAdd(this.formData);
			this.clearFormData;
		},
		openModal() {
			this.visable = true;
		}
	},
	props: ["handleAdd"]
};
</script>
<style scoped></style>
