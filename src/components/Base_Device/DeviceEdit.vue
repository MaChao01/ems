<template>
	<div style='text-align: center;'>
		<h1>修改设备信息</h1>
		<el-row>
		  <el-col :span="12"> <el-input style='width:45%' v-model='devname' placeholder='请输入设备名称'></el-input> </el-col>
		  <el-col :span="12"> 
		  <el-select v-model="typeid" style='width:45%' placeholder='选择设备类别'>
		  		<el-option v-for="(obj,index) in typeidarr"  :value="obj.typeid"></el-option>
		  </el-select>
		   </el-col>
		 </el-row>
		<el-row>
		  <el-col :span="12"><el-date-picker  v-model="devdate" style='width:45%; margin-top: 20px;' type="datetime" placeholder="选择结束时间"
						value-format='yyyy-MM-dd'> </el-date-picker> </el-col>
		  <el-col :span="12"> <el-input style='width:45%; margin-top: 20px;' placeholder='请输入责任人' v-model='devuser'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:45%; margin-top: 20px;' placeholder='请输入所属企业' v-model='compid'></el-input> </el-col>
		  <el-col :span="12"> </el-col>
		</el-row>
		<el-row style='margin-top: 20px;text-align: center;'>
		  <el-col :span="24" > <el-button type='primary' @click='saveEdit'>确定</el-button> <el-button @click='cancel'>取消</el-button> </el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name:'',
		data() {
			return {
				devname:'',
				devdate:'',
				devuser:'',
				compid:'',
				typeid:'',
				devid:'',
				typeidarr:[],
			};
		},
		methods:{
			saveEdit(){
				// 后端网址
				var url = this.baseUrl+"/baseDevice/update"
				// 传递给后端的数据
				var data = {devid:this.devid,devname:this.devname,typeid:this.typeid,devdate:this.devdate,devuser:this.devuser,compid:this.compid,};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("更新成功");
					this.$router.push({path:'/DeviceList'});
				})
			},
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
			var a = this.baseUrl+"/baseDevice/list"
			// 传递给后端的数据
			this.$axios.post(a,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.typeidarr=res.data;
			});
			var row = this.$route.params.row;
			// 回显
			this.devname = row.devname;
			this.typeid = row.typeid;
			this.devdate = row.devdate;
			this.devuser = row.devuser;
			this.compid = row.compid;
		
		}
		
	}
</script>

<style>

</style>