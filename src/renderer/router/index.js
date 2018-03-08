import Vue from 'vue'
import VueRouter from 'vue-router'

/**
 *  加载模块
 */
Vue.use(VueRouter)
/**
 *  路由配置
 */
const router = new VueRouter({
	base: __dirname,
	likActiveClass: 'link-active',
	routes: [{
			path: '*',
			name: '首页',
			component: resolve => require(['../../renderer/pages/index/Home.vue'], resolve)
		},
		{
            path: '/firstInto :backOk/:oldPassOk',
            name: '/firstInto',
            component: resolve => require(['../../renderer/pages/users/SetPassword.vue'], resolve),
		},
		{
			path: '/firstInto/firstInfo',
			name: '首次进入',
			component: resolve => require(['../../renderer/pages/wallet/FirstInfo.vue'], resolve)
		},
		{
			path: '/firstInto/firstInfo/newAccount',
			name: '新建账户',
			component: resolve => require(['../../renderer/pages/wallet/NewAccount.vue'], resolve)
		},
		{
			path: '/firstInto/firstInfo/importAccount',
			name: '导入账户',
			component: resolve => require(['../../renderer/pages/wallet/ImportAccount.vue'], resolve)
		},

		{
			path: '/firstInto/firstInfo/importKey',
			name: '明文私钥导入',
			component: resolve => require(['../../renderer/pages/wallet/ImportKey.vue'], resolve)
		},
		{
			path: '/firstInto/firstInfo/importCode',
			name: '二维码导入',
			component: resolve => require(['../../renderer/pages/wallet/ImportCode.vue'], resolve)
		},
		{
			path: '/firstInto/firstInfo/importNuls',
			name: 'NULS导入',
			component: resolve => require(['../../renderer/pages/wallet/ImportNuls.vue'], resolve)
		},
		{
			path: '/users/setPassword',
			name: '设置密码',
			component: resolve => require(['../../renderer/pages/users/SetPassword.vue'], resolve)
		},
		{
			path: '/users/userLog',
			name: '用户日志',
			component: resolve => require(['../../renderer/pages/users/UserLog.vue'], resolve)
		},
		{
			path: '/wallet',
			name: '钱包首页',
			component: resolve => require(['../../renderer/pages/wallet/Index.vue'], resolve)
		},
		{
			path: '/wallet/index/freezeList',
			name: '冻结列表',
			component: resolve => require(['../../renderer/pages/wallet/FreezeList.vue'], resolve)
		},
		{
			path: '/wallet/index/transfer',
			name: '转账',
			component: resolve => require(['../../renderer/pages/wallet/Transfer.vue'], resolve)
		},
		{
			path: '/wallet/index/dealInfo',
			name: '交易详情',
			component: resolve => require(['../../renderer/pages/wallet/DealInfo.vue'], resolve)
		},
		{
			path: '/wallet/users/userInfo',
			name: '账户信息',
			component: resolve => require(['../../renderer/pages/users/UserInfo.vue'], resolve)
		},
		{
			path: '/wallet/users/editAliasing :address/:alias',
			name: '/editAliasing',
			component: resolve => require(['../../renderer/pages/users/EditAliasing.vue'], resolve)
		},
		{
			path: '/users/setPage',
			name: '设置界面',
			component: resolve => require(['../../renderer/pages/users/SetPage.vue'], resolve)
		},
		{
			path: '/users/userAddressList',
			name: '通讯录',
			component: resolve => require(['../../renderer/pages/users/UserAddressList.vue'], resolve)
		},
		{
			path: '/consensus',
			name: '共识首页',
			component: resolve => require(['../../renderer/pages/consensus/Index.vue'], resolve)

		}, 
		{
			path: '/consensus/myNode',
			name: '我的节点信息',
			component: resolve => require(['../../renderer/pages/consensus/MyNode.vue'], resolve)

		}, 
		{
			path: '/consensus/myNode/addNode',
			name: '添加节点',
			component: resolve => require(['../../renderer/pages/consensus/AddNode.vue'], resolve)

		}, 
		{
			path: '/consensus/pledgeInfo',
			name: '抵押详情',
			component: resolve => require(['../../renderer/pages/consensus/PledgeInfo.vue'], resolve)
		},
		{
			path: '/consensus/newNode',
			name: '自建节点共识',
			component: resolve => require(['../../renderer/pages/consensus/NewNode.vue'], resolve)
		},
		{
			path: '/consensus/agencyNode',
			name: '共识代理节点',
			component: resolve => require(['../../renderer/pages/consensus/AgencyNode.vue'], resolve)
		},
		{
			path: '/consensus/nodeInfo',
			name: '节点信息',
			component: resolve => require(['../../renderer/pages/consensus/NodeInfo.vue'], resolve)
		},
		{
			path: '/consensus/nodeInfo/allPledge',
			name: '所有节点',
			component: resolve => require(['../../renderer/pages/consensus/AllPledge.vue'], resolve)
		},
		{
			path: '/consensus/nodeInfo/nodePage',
			name: '节点页面',
			component: resolve => require(['../../renderer/pages/consensus/NodePage.vue'], resolve)
		}
		
		/*{
			path: '/consensus',
			name: '共识首页',
			component: resolve => require(['../../renderer/pages/consensus/Index.vue'], resolve),
			children:[{
				path: '/consensus/pledgeInfo',
				name: '抵押详情',
				component: resolve => require(['../../renderer/pages/consensus/PledgeInfo.vue'], resolve)
			}]
		}*/

	]
})

/**
 *  路由出口
 */
export default router