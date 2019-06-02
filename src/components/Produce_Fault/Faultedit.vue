<template>
	<div style='text-align: center;'>
		<h1>修改故障记录</h1>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入故障原因' v-model='cause'></el-input>
		  <el-select v-model="devid" style='width:45%' placeholder='请输入设备名称'>
		  		<el-option v-for="(obj,index) in devidarr"  :value="obj.typeid">{{obj.devname}}</el-option>
		  </el-select>
		  </el-col>
		  </el-col>
		 </el-row>
		<el-row>
		<el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入报告人' v-model='faultuser'></el-input> </el-col>
	    <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入故障时间(分钟)' v-model='faulttime'></el-input> </el-col>
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
				faultId:'',
				devid:'',
				cause:'',
				faultuser:'',
				faulttime:'',
				devidarr:[],
			};
		},
		methods:{
			saveEdit(){
				// 后端网址
				var url = this.baseUrl+"/produceFault/update"
				// 传递给后端的数据
				var data = {faultId:this.faultId,devid:this.devid,
				cause:this.cause,faultuser:this.faultuser,faulttime:this.faulttime};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("更新成功");
					this.$router.push({path:'/faultList'});
				})
			},
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
			var c = this.baseUrl+"/produceFault/list"
			// 传递给后端的数据
			this.$axios.post(c,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.devidarr=res.data;
			});
			// 接收路由传递的数据
			var row = this.$route.params.row;
			// 回显
			this.faultId = row.faultId;
			this.devid = row.devid;
			this.cause = row.cause;
			this.faultuser = row.faultuser;
			this.faulttime = row.faulttime;
		
		}
		
	}
</script>

<style>

</style>