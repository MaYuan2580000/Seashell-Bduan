<template>
      <section class="wrapper">
          <div class="transaction_header">
             <div class="transaction_header_left">
                 <span>员工姓名 <input type="text"/></span>
                 <span class="DataSpan">证件号码 <input type="text"/></span>
                 <span class="DataSpan">手机号 <input type="text"/></span>
                
             </div>
             <div class="transaction_header_right">
                 <div class="right_button">
                 <el-button class="button_sou">搜索</el-button>
                 <el-button class="button_qing">清除</el-button>
                 </div>
             </div>
          </div>
          <div class="bottom_main">
          <table border="0" cellpadding="0" cellspacing="0">
                  <thead class="header_table">
                      <tr>
                          <th style="width:134px;">序号</th>
                          <th style="width:190px;">员工姓名</th>
                          <th style="width:170px;">证件类型</th>
                          <th>证件号码</th>
                          <th>手机号</th>
                          <th>所属部门</th>
                          <th>岗位</th>
                          <th>银行名称</th>
                          <th>银行卡号</th>
                          <th>操作</th>
                      </tr>
                  </thead>
                  <tbody class="tbody_table">
                      <tr v-for="(item,index) in tableList" :key="index">
                          <td>{{index+1}}</td>
                          <td>{{item.name}}</td>
                          <td>{{item.type}}</td>
                          <td>{{item.numBer}}</td>
                          <td>{{item.phone}}</td>
                          <td>{{item.men}}</td>
                          <td>{{item.gang}}</td>
                          <td>{{item.yin}}</td>
                          <td style="color:blue;">{{item.kahao}}</td>
                          <td>
                            <button class="bian" @click="bianji">编辑</button>
                            <button class="li">离职</button>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
               <pageFen/>
      </section>
</template>

<script>
import pageFen from '../../components/common/pageFenye'
export default {
       data() {
      return {
            tableList:[
             {
              "name":"张鑫帆",
              "type":"身份证",
              "numBer":"153122198012131313",
              "phone":'18911541206',
              "men":"人力资源部",
              "gang":"人力资源总经理",
              "yin":"招商银行",
              "kahao":"6225707845612589",
              "tai":"导入失败"
              },
             {
               "name":"刘一水",
               "type":"身份证",
               "numBer":"210122199009090909",
               "phone":'18911541206',
               "men":"人力资源部",
               "gang":"总经理助理",
               "yin":"工商银行",
               "kahao":"6225707845612589",
               "tai":"导入失败"
               },
             {
               "name":"赵梦欣",
               "type":"身份证",
               "numBer":"210122199009097837",
               "phone":'18911457892',
               "men":"薪酬科室",
               "gang":"薪酬科室经理",
               "yin":"北京银行",
               "kahao":"6225707845612589",
               "tai":"导入失败"
                
               },
                     {
               "name":"赵梦欣",
               "type":"身份证",
               "numBer":"210122199009097837",
               "phone":'18911457892',
               "men":"薪酬科室",
               "gang":"薪酬科室经理",
               "yin":"北京银行",
               "kahao":"6225707845612589",
               "tai":"导入失败"
                
               },
                     {
               "name":"赵梦欣",
               "type":"身份证",
               "numBer":"210122199009097837",
               "phone":'18911457892',
               "men":"薪酬科室",
               "gang":"薪酬科室经理",
               "yin":"北京银行",
               "kahao":"6225707845612589",
               "tai":"导入失败"
                
               },
                {
               "name":"赵梦欣",
               "type":"身份证",
               "numBer":"210122199009097837",
               "phone":'18911457892',
               "men":"薪酬科室",
               "gang":"薪酬科室经理",
               "yin":"北京银行",
               "kahao":"6225707845612589",
               "tai":"导入失败"
                
               },
               
               
         ]
      };
    },
    methods:{
          bianji(){
              this.$router.push('/editPage')
          }
    },
    components:{
        pageFen
    }
}
</script>

<style scoped>
 .transaction_header{
     width: 1260px;
     height: 80px;
     display: flex;
     margin: 0 auto;
 }
 .transaction_header_left{
     width: 1000px;
     height: 80px;
     line-height: 80px;
     margin: 0 auto;
 }
 .transaction_header_left span{
     font-size: 12px;
     
 }
 .transaction_header_left input{
     margin-left: 10px;
     width: 130px;
     height: 22px;
 }

 .transaction_header_right{
     width: 260px;
     height: 80px;
     
 }
 .right_button{
     padding-top: 20px;
     float: right;
 }
 .bottom_main{
     width: 1260px;
     height: auto;
     margin: 0 auto;
 }
 .header_table tr th{
     width: 240px;
     font-size: 12px;
     height: 35px;
     line-height: 35px;
     background: lightslategray;
 }
 .tbody_table tr td{
     text-align: center;
     height: 50px;
     font-size: 12px;
     border-bottom: 1px solid #dddddd;
 }
 .DataSpan{
     padding-left: 50px;
 }
 .bian{
     width: 50px;
     height: 30px;
     border-radius: 5px;
     border: none;
     background: blue;
     color: white;
 }
  .li{
     width: 50px;
     height: 30px;
     border-radius: 5px;
     border: none;
     background: red;
     color: white;
 }

 .button_qing{
    background:Orange; 
    color:white;
    border:none;
 }
 .button_sou{
    background:olive; 
    color:white;
    border:none;
 }
</style>
