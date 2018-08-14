import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/loginPage'
        },
        {
            path: '/readme',
            component: resolve => require(['../components/common/Home.vue'], resolve),//主页
            children:[
                {
                    path: '/',
                    component: resolve => require(['../components/page/Readme.vue'], resolve)//工作台
                },
                {
                    path: '/accountBalance',
                    component: resolve => require(['../components/page/accountBalance.vue'], resolve)//账户余额
                },
                {
                    path: '/auditPage',
                    component: resolve => require(['../components/page/auditPage.vue'], resolve)     // 审核页面
                },
                {
                    path: '/detailsOfWages',
                    component: resolve => require(['../components/page/detailsOfWages.vue'], resolve) // 工资详情
                },
                {
                    path: '/editPage',
                    component: resolve => require(['../components/page/editPage.vue'], resolve)    // 编辑页面
                },
                {
                    path: '/employeeInformation',
                    component: resolve => require(['../components/page/employeeInformation.vue'], resolve)     // 员工信息
                },
                {
                    path: '/guideToImport',
                    component: resolve => require(['../components/page/guideToImport.vue'], resolve)       // 导入须知
                },
                {
                    path: '/importFailure',
                    component: resolve => require(['../components/page/importFailure.vue'], resolve)   // 导入失败
                },
                {
                    path: '/noticeOfIssuance',
                    component: resolve => require(['../components/page/noticeOfIssuance.vue'], resolve)    // 发放须知
                },
                {
                    path: '/reviewProgress',
                    component: resolve => require(['../components/page/reviewProgress.vue'], resolve)    // 审核进度
                },
                {
                    path: '/transactionRecord',
                    component: resolve => require(['../components/page/transactionRecord.vue'], resolve)    // 交易记录
                },
                {
                    path: '/wageProgress',
                    component: resolve => require(['../components/page/wageProgress.vue'], resolve)    // 工资记录
                },
                {
                    path: '/salaryReview',
                    component: resolve => require(['../components/page/salaryReview.vue'], resolve)    // 工资审核
                },
                {
                    path: '/qiyeGuanli',
                    component: resolve => require(['../components/page/qiyeGuanli.vue'], resolve)    // 企业管理
                },
                {
                    path: '/bianjixinxiPage',
                    component: resolve => require(['../components/page/bianjixinxiPage.vue'], resolve)    // 企业管理
                }
            ]
        },
        {
            path: '/loginPage',
            component: resolve => require(['../components/page/loginPage.vue'], resolve)
        },
    ]
})
