<template>
	<div>
		<el-table border :data="userList" style="width:100%;" :height="tableHeight">
			<el-table-column fixed type="index" width="50"></el-table-column>
			<el-table-column fixed prop="name" label="姓名" width="100"></el-table-column>
			<el-table-column prop="date" label="日期" width="150"></el-table-column>
			<el-table-column prop="province" label="省份" width="150"></el-table-column>
			<el-table-column prop="city" label="市区" width="150"></el-table-column>
			<el-table-column prop="address" label="地址"></el-table-column>
			<el-table-column prop="zip" label="邮编" width="150"></el-table-column>
			<el-table-column label="操作" width="100" fixed="right">
				<template slot-scope="scope">
					<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
					<el-button type="text" size="small">编辑</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script type="text/ecmascript-6">
export default {
	data() {
		return {
			tableHeight:window.innerHeight-100,
			userList: [
				{
					date: "2016-05-03",
					name: "王小虎",
					province: "上海",
					city: "普陀区",
					address: "上海市普陀区金沙江路 1518 弄",
					zip: 200333
				},
				{
					date: "2016-05-02",
					name: "王小虎",
					province: "上海",
					city: "普陀区",
					address: "上海市普陀区金沙江路 1518 弄",
					zip: 200333
				},
				{
					date: "2016-05-04",
					name: "王小虎",
					province: "上海",
					city: "普陀区",
					address: "上海市普陀区金沙江路 1518 弄",
					zip: 200333
				},
				{
					date: "2016-05-01",
					name: "王小虎",
					province: "上海",
					city: "普陀区",
					address: "上海市普陀区金沙江路 1518 弄",
					zip: 200333
				},
				{
					date: "2016-05-03",
					name: "王小虎",
					province: "上海",
					city: "普陀区",
					address: "上海市普陀区金沙江路 1518 弄",
					zip: 200333
				},
				{
					date: "2016-05-02",
					name: "王小虎",
					province: "上海",
					city: "普陀区",
					address: "上海市普陀区金沙江路 1518 弄",
					zip: 200333
				},
				{
					date: "2016-05-04",
					name: "王小虎",
					province: "上海",
					city: "普陀区",
					address: "上海市普陀区金沙江路 1518 弄",
					zip: 200333
				},
				{
					date: "2016-05-01",
					name: "王小虎",
					province: "上海",
					city: "普陀区",
					address: "上海市普陀区金沙江路 1518 弄",
					zip: 200333
				},
				{
					date: "2016-05-03",
					name: "王小虎",
					province: "上海",
					city: "普陀区",
					address: "上海市普陀区金沙江路 1518 弄",
					zip: 200333
				},
				{
					date: "2016-05-02",
					name: "王小虎",
					province: "上海",
					city: "普陀区",
					address: "上海市普陀区金沙江路 1518 弄",
					zip: 200333
				},
				{
					date: "2016-05-04",
					name: "王小虎",
					province: "上海",
					city: "普陀区",
					address: "上海市普陀区金沙江路 1518 弄",
					zip: 200333
				},
				{
					date: "2016-05-01",
					name: "王小虎",
					province: "上海",
					city: "普陀区",
					address: "上海市普陀区金沙江路 1518 弄",
					zip: 200333
				},
				{
					date: "2016-05-03",
					name: "王小虎",
					province: "上海",
					city: "普陀区",
					address: "上海市普陀区金沙江路 1518 弄",
					zip: 200333
				},
				{
					date: "2016-05-02",
					name: "王小虎",
					province: "上海",
					city: "普陀区",
					address: "上海市普陀区金沙江路 1518 弄",
					zip: 200333
				},
				{
					date: "2016-05-04",
					name: "王小虎",
					province: "上海",
					city: "普陀区",
					address: "上海市普陀区金沙江路 1518 弄",
					zip: 200333
				},
				{
					date: "2016-05-01",
					name: "王小虎",
					province: "上海",
					city: "普陀区",
					address: "上海市普陀区金沙江路 1518 弄",
					zip: 200333
				}
			]
		};
	},
	mounted:function(){
		window.onresize = () => {
			this.tableHeight = window.innerHeight - 100
		}
	},
	methods:{
		handleClick(e){
			console.log(e)
		}
	}
};
</script>

<style scoped>
</style>
