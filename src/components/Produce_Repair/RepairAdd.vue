<template>
	<div style='text-align: center;'>
		<h1>添加维修记录</h1>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入维修原因' v-model='cause'></el-input>
		  <el-select v-model="devid" style='width:45%' placeholder='请输入设备名称'>
		  		<el-option v-for="(obj,index) in devidarr"  :value="obj.devid">{{obj.devname}}</el-option>
		  </el-select>
		  </el-col>
		  </el-col>
		 </el-row>
		<el-row>
		<el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入维修费用' v-model='cost'></el-input> </el-col>
	    <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入维修日期' v-model='repairdate'></el-input> </el-col>
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
				repairid:'',
				devid:'',
				cause:'',
				cost:'',
				repairdate:'',
				devidarr:[],
			};
		},
		methods:{
			saveAdd(){
				// 后端网址
				var url = this.baseUrl+"/produceRepair/insert"
				// 传递给后端的数据
				var data = {repairid:this.repairid,devid:this.devid,
				cause:this.cause,cost:this.cost,repairdate:this.repairdate};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("添加成功");
					this.$router.push({path:'/repairList'});
				})
			},
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
			var a = this.baseUrl+"/produceRepair/list"
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