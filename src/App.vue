<template>
	<div id="app">
		<Tabs value="tabName">
			<TabPane label="行情&持仓" name="currentStatus">
				<CurrentStatus />
			</TabPane>
			<TabPane label="添加持仓" name="addExisting">
				<AddExisting />
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
			tabName: "currentStatus"
		};
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
