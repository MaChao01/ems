<template>
	<div>
	<h1 style="text-align: center">故障记录</h1>
	<div style="text-align: left;margin:0 0 20px 50px;">
		<el-input style='width:160px' placeholder='设备名称' v-model='search_compname'></el-input>
		<el-button @click='search'>查询</el-button>
		<el-button @click='add'>添加</el-button>
		<center>
			<el-table :data="list">
				<el-table-column prop="faultId" label="ID" width="80"></el-table-column>
				<el-table-column prop="devid" label="设备名称" width="120"></el-table-column>
				<el-table-column prop="cause" label="故障原因" width="120"></el-table-column>
				<el-table-column prop="faultuser" label="报告人" width="120"></el-table-column>
				<el-table-column prop="faulttime" label="故障时间(分钟)" width="180"></el-table-column>
				<el-table-column label="操作" width="230">
				  <template slot-scope="scope">
					<el-button size="mini" @click="update(scope.row)">编辑</el-button>
					<el-button size="mini" type='danger' @click="del(scope.row.compid)">删除</el-button>
				  </template>
				</el-table-column>
			</el-table>
		</center>
</div>
</div>
</template>

<script>
	export default {
	name:'',
	data() {
			return {
					search_compname:'',
					list:[]
				};
			},
			methods:{
				update(row){
					// 跳转
					this.$router.push({name:'faultedit',params:{row:row}})
				},
				del(faultId){
					// 后端网址
					var url = this.baseUrl+"/produceFault/delete"
					// 传递给后端的数据
					var data = {faultId:faultId};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						// res是后端的响应
						this.$message("删除成功");
						this.search();
					})
				},
				add(){
					// 路由跳转
					this.$router.push({path:'/faultAdd'})
				},
				search(){
					// 后端网址
					var url = this.baseUrl+"/produceFault/search"
					// 传递给后端的数据
					var data = {divid:this.search_compname};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						this.list = res.data;
					})
				}
			},
			mounted:function(){
				this.search();
			}
			
		}
	</script>
	
	<style>
	
	</style>
	