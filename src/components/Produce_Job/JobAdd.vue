<template>
	<div id="app">
		<h1>添加作业信息</h1>
		<el-row>
		  <el-col :span="12"> 
	     <el-date-picker  v-model="starttime" style='width:190px' type="datetime" placeholder="请选择开始作业时间"
						value-format='yyyy-MM-dd HH:mm:ss'> </el-date-picker>
		  </el-col>
		  <el-select v-model="devid" style='width:45%' placeholder='请输入设备名称'>
		  		<el-option v-for="(obj,index) in devidarr"  :value="obj.typeid">{{obj.devname}}</el-option>
		  </el-select>
		 </el-row>
		<el-row>
		  <el-col :span="12"> 
		  <el-date-picker  v-model="completetime" style='width:190px' type="datetime" placeholder="请选择结束作业时间"
		  						value-format='yyyy-MM-dd HH:mm:ss'> </el-date-picker>
		   </el-col>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入报岗id' v-model='industry'></el-input> </el-col>
		</el-row>
		   <el-row>
		     <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入运行时长' v-model='duration'></el-input> </el-col>
		     <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入作业量' v-model='amount'></el-input> </el-col>
		   </el-row>
		<el-row>
		  <el-col :span="24"> <el-button @click='save()'>保存</el-button> <el-button @click='cancel()'>返回</el-button> </el-col>
		</el-row>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				jobid:'',
				devid:'',
				reportid:'',
				amount:'',
				duration:'',
				completetime:'',
				starttime:'',
				devidarr:[],
			};
		},
		methods:{
			save(){
				var url = this.baseUrl+"/produceJob/insert"
					var data = {jobid:this.jobid,devid:this.devid,reportid:this.reportid,starttime:this.starttime,
					amount:this.amount,duration:this.duration,completetime:this.completetime,
					};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
				}).then(res=>{
					this.$message("修改成功");
					this.$router.push({path:'/jobList'});
					})
			},
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
			var a = this.baseUrl+"/produceJob/list"
			// 传递给后端的数据
			this.$axios.post(a,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.devidarr=res.data;
				
			});
			
			
		}
	}
</script>
<!-- css部分 -->
<style>

</style>