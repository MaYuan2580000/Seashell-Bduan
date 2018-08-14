<template>
    <div class="sidebar">
        <el-menu :default-active="$route.path" @open="handleOpen" @close="handleClose" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs" >
                    <el-submenu :index="item.index" :key="item.index">
						<template slot="title" >
                            <div :class="{active : active == item.title}" @click="seceted(item.title)">
                            <img :src="item.img" class="img"/>
                            <p class="img_p"  >{{ item.title }}</p>
                            </div>
                            </template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        {{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        img:'../../../../static/img/gongzuotai.png',
                        index: '1',
												router:'readme',
                        title: '工作台',
                        subs: [
                        ]
                    },
                  {
                        img:'../../../../static/img/qiye.png',
                        index: '2',
												router:'readme',
                        title: '企业管理',
                        subs: [
                            {
                               
                                index: 'qiyeGuanli',
                                title: '企业信息',
                            }
                        
                        ]
                    },
                    {
                        img:'../../../../static/img/zhanghu.png',
                        index: '3',
												router:'readme',
                        title: '账户管理',
                        subs: [
                            {
                               
                                index: 'accountBalance',
                                title: '账户余额',
                            },
														{
                                index: 'transactionRecord',
                                title: '交易记录'
                            }
                        ]
                    },
                    {
                        img:'../../../../static/img/yuangong.png',
                        index: '4',
												router:'readme',
                        title: '员工管理',
                        subs: [
                            {
                                index: 'guideToImport',
                                title: '导入须知',
                            },
                            {
                                index:'employeeInformation',
                                title:"员工信息"
                            }
                        ]
                    },
                    {
                        img:'../../../../static/img/gongzi.png',
                        title: '工资管理',
												router:'readme',
                        index:'5',
                        subs: [
                            {
                                index: 'noticeOfIssuance',
                                title: '发放须知',
                            },
                         
                            {
                                index: 'detailsOfWages',
                                title: '工资详情'
                            },
                            {
                                index: 'wageProgress',
                                title: '工资记录'
                            },
                            {
                                index:'salaryReview',
                                title:'工资审核'
                            }
                        ],
                        
                    }
                ],
                itemss:[
                    {
                        img1:'../../../../static/img/gongzuotai1.png',
                    },
                    {
                        img1:'../../../../static/img/qiye1.png',
                    },
                    {
                        img1:'../../../../static/img/zhanghu1.png',
                    },
                    {
                        img1:'../../../../static/img/yuangong1.png',
                    },
                    {
                        img1:'../../../../static/img/gongzi1.png',
                    }
                ],
				router:[],
                public:[],
                active:'',
                imgs:[],
                imgs1:[]
                         
            }
        },
				mounted(){
					for(let [index,val] of Object.entries(this.items)){
						if(val.subs == ''){
							document.getElementsByClassName('el-submenu__icon-arrow')[index].style.display = 'none';
							this.public.push(val.index);
							this.router.push(val.router);
						}
					}
				},
				methods:{
					add(val){
						console.log(val);
					},
					handleOpen(key) {
						var key = key-1;
						for(let i=0;i<this.public.length;i++){
							if(i == key){
								this.$router.push({path:this.router[i]});
							}
                        }
						 this.imgs = Object.assign([],this.items[key])
                        for(let j=0;j<this.items.length;j++){
                        	this.imgs1 = Object.assign([],this.items[j])
//                      	console.log(this.imgs1)
                            if(j == key){
                         
                                 for(let s = 0;s<this.itemss.length;s++){
                                 	
                                    if(j == s && j == key && s == key){
//                                  	console.log(this.items)
//                                  	console.log(this.itemss)
//                                  	console.log(this.imgs)
                                       this.items[j].img = this.itemss[s].img1
//                                     console.log(this.items[j].img)
                                       
                                    }else{
                                    	console.log(this.items[j])
                                    	this.items[j].img =this.items[j].img
                                    }
                                 }
                              
                            }
                        }
    
                        
					},
					handleClose(key) {
//						console.log(this.imgs1)
						var key = key-1;
						for(let i=0;i<this.public.length;i++){
							if(i == key){
								this.$router.push({path:this.router[i]});
							}
						}
                        for(let j=0;j<this.items.length;j++){
                            if(j == key){
                              		
                                 for(let s = 0;s<this.itemss.length;s++){
                                    if(j == s && j == key && s == key){
                                       this.items[j].img = this.imgs.img
//                                    
                                    }
                                 }
                              
                            }
                        }
                    },
                    seceted(title){
                            this.active = title;
                    }
				}
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 200px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #2E363F;
    }
    .sidebar > ul {
        height:100%;
        
    }
    .el-submenu .el-menu-item{
        height: 35px;
        line-height: 35px;
        padding: 0 5px;
    }
    .img{
     width:50px; 
     position: absolute; 
     height:50px;
     left:50px;
      top:15px;
    }
    .img_p{
        padding-top: 30px;
    }

.el-submenu{
    width: 150px;
    height: auto;
    margin: 0 auto;
    margin-bottom: 10px;
    margin-top: 13px;
}
.active {
   color: #13227a;
 }
</style>
