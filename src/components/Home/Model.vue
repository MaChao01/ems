<!-- html部分 -->
<template
		 <el-date-picker
		  v-model="years"
		  type="year"
		   value-format="yyyy">
	<div id="app">
		  placeholder="选择年">
		</el-date-picker>
		<el-button @click="search()">查询</el-button>	
		<h1>生产模型-作业量</h1>
		<ve-line :data="chartData"></ve-line>
		<h1>能源消耗-折标煤</h1>
		<ve-line :data="chartData2"></ve-line>
	</div>
</template>
<!-- js部分 -->
<script>
  export default {
    data: function () {
      return {
		chartData: {
		  colums:[],
		 rows:[],
		},
		chartData2: {
		  colums:[],
		 rows:[],
		},
      }
    },
	search(){
				this.fn();
			},
			fn(){
				// 后端网址
				var url = this.baseUrl+"/jobAmount/flowAmount"
				var data = {year:this.years}
				// 传递给后端的数据
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.chartData=res.data;
				});
				var url = this.baseUrl+"/jobAmount/devTypeAmount"
				
				// 传递给后端的数据
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.chartData2=res.data;
				});
			},
		mounted:function(){
			this.fn();		
		}
	}
</script>
<!-- css部分 -->
<style>

</style>