import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Home/Index'
import Welcome from '@/components/Home/Welcome'
import CompanyList from '@/components/Base_Company/CompanyList'
import CompanyAdd from '@/components/Base_Company/CompanyAdd'
import CompanyEdit from '@/components/Base_Company/CompanyEdit'
import DevtypeList from '@/components/Base_Devtype/DevtypeList'
import Devtypeedit from '@/components/Base_Devtype/Devtypeedit'
import DevtypeAdd from '@/components/Base_Devtype/DevtypeAdd'
import Login from '@/components/Home/Login'
import UserList from '@/components/Base_User/UserList'
import UserEdit from '@/components/Base_User/Useredit'
import UserAdd from '@/components/Base_User/UserAdd'
import DeviceList from '@/components/Home/DeviceList'
import DeviceAdd from '@/components/Base_Device/DeviceAdd'
import DeviceEdit from '@/components/Base_Device/Deviceedit'
import FlowAdd from '@/components/Base_Flow/FlowAdd'
import Flowedit from'@/components/Base_Flow/Flowedit'
import FlowList from'@/components/Base_Flow/FlowList'
import FaultAdd from '@/components/Produce_Fault/FaultAdd'
import Faultedit from'@/components/Produce_Fault/Faultedit'
import FaultList from'@/components/Produce_Fault/FaultList'
import RepairAdd from '@/components/Produce_Repair/RepairAdd'
import Repairedit from'@/components/Produce_Repair/Repairedit'
import RepairList from'@/components/Produce_Repair/RepairList'
import ReportAdd from '@/components/Produce_Report/ReportAdd'
import ReportList from'@/components/Produce_Report/ReportList'
import Reportedit from'@/components/Produce_Report/Reportedit'
import JobAdd from '@/components/Produce_Job/JobAdd'
import JobList from'@/components/Produce_Job/JobList'
import Jobedit from'@/components/Produce_Job/Jobedit'
import Consumeadd from '@/components/Energy_Consume/Consumeadd'
import ConsumeList from'@/components/Energy_Consume/ConsumeList'
import Consumeedit from'@/components/Energy_Consume/Consumeedit'
import StandradcoalAdd from '@/components/Energy_Standradcoal/StandradcoalAdd'
import StandradcoalList from'@/components/Energy_Standradcoal/StandradcoalList'
import Standradcoaledit from'@/components/Energy_Standradcoal/Standradcoaledit'
import flowAmount from'@/components/Home/FlowAmount'
import EnergyModel from'@/components/Home/EnergyModel'
import Model from'@/components/Home/Model'
import Cost from'@/components/Home/Cost'
import Usage from'@/components/Home/Usage'
import IntactRatio from'@/components/Home/IntactRatio'
import Amount from'@/components/Home/Amount'
import Consume from'@/components/Home/Consume'
import Control from'@/components/Home/Control'
Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {path: '/Login',name: 'Login',component: Login},
    {
      path: '/',name: 'Index',component: Index,
			children:[
					{path:'/',component:Welcome},
					{path:'CompanyList',component:CompanyList,name:'CompanyList'},
					{path:'CompanyAdd',component:CompanyAdd},
					{path:'CompanyEdit',component:CompanyEdit,name:'CompanyEdit'},
					{path:'UserList',component:UserList,name:'UserList'},
					{path:'UserAdd',component:UserAdd},
					{path:'UserEdit',component:UserEdit,name:'UserEdit'},
					{path:'DevtypeList',component:DevtypeList,name:'DevtypeList'},
					{path:'DevtypeEdit',component:DevtypeEdit,name:'DevtypeEdit'},
					{path:'DevtypeAdd',component:DevtypeAdd},
					{path:'flowList',component:FlowList,name:'FlowList'},
					{path:'Flowedit',component:Flowedit,name:'Flowedit'},
					{path:'FlowAdd',component:FlowAdd,name:'FlowAdd'},
					{path:'DeviceList',component:DeviceList,name:'DeviceList'},
					{path:'DeviceAdd',component:DeviceAdd},
					{path:'DeviceEdit',component:DeviceEdit,name:'DeviceEdit'},
					{path:'FaultList',component:FaultList,name:'FaultList'},
					{path:'FaultAdd',component:FaultAdd},
					{path:'Faultedit',component:Faultedit,name:'Faultedit'},
					{path:'RepairList',component:RepairList,name:'RepairList'},
					{path:'RepairAdd',component:RepairAdd},
					{path:'Repairedit',component:Repairedit,name:'Repairedit'},
					{path:'ReportList',component:ReportList,name:'ReportList'},
					{path:'ReportAdd',component:ReportAdd},
					{path:'Reportedit',component:Reportedit,name:'Reportedit'},
					{path:'JobList',component:jobList,name:'jobList'},
					{path:'JobAdd',component:jobAdd},
					{path:'JobEdit',component:JobEdit,name:'jobEdit'},
					{path:'ConsumeList',component:ConsumeList,name:'ConsumeList'},
					{path:'Consumeadd',component:Consumeadd},
					{path:'Consumeedit',component:Consumeedit,name:'Consumeedit'},
					{path:'StandradcoalList',component:StandradcoalList,name:'StandradcoalList'},
					{path:'StandradcoalAdd',component:StandradcoalAdd},
					{path:'Standradcoaledit',component:Standradcoaledit,name:'Standradcoaledit'},
					{path:'Control',component:Control},
					{path:'FlowAmount',component:FlowAmount},
					{path:'EnergyModel',component:EnergyModel},
					{path:'Model',component:Model},
					{path:'Cost',component:Cost},
					{path:'Usage',component:Usage},
					{path:'IntactRatio',component:IntactRatio},
					{path:'Amount',component:Amount},
					{path:'Consume',component:Consume},
			]
    }	
  ]
})