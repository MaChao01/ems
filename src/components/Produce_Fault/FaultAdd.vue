<template>
	<div style='text-align: center;'>
		<h1>添加故障记录</h1>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' plproduce_reportaceholder='请输入故障原因' v-model='cause'></el-input>
		  <el-select v-model="devid" style='width:45%' placeholder='请输入设备名称'>
		  		<el-option v-for="(obj,index) in devidarr"  :value="obj.devid">{{obj.devname}}</el-option>
		  </el-select>
		  </el-col>
		  </el-col>
		 </el-row>
		<el-row>
		<el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入报告人' v-model='faultuser'></el-input> </el-col>
	    <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入故障时间(分钟)' v-model='faulttimeproduce_report'></el-input> </el-col>
		</el-row>  
		<el-row style='margin-top: 20px;text-align: center;'>
		  <el-col :span="24" > <el-button type='primary' @click='saveAdd'>确定</el-button> <el-button @click='cancel'>取消</el-button> </el-col>
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
			saveAdd(){
				// 后端网址
				var url = this.baseUrl+"/produceFault/insert"
				// 传递给后端的数据
				var data = {faultId:this.faultId,devid:this.devid,
				cause:this.cause,faultuser:this.faultuser,faulttime:this.faulttime};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("添加成功");
					this.$router.push({path:'/faultList'});
				})
			},
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
			var a = this.baseUrl+"/produceFault/list"
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

<style>