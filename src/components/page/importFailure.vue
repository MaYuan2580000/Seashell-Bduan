<template>
      <section class="wrapper">
          <div class="transaction_header">
             <div class="transaction_header_left">
                <div>
                    <el-button class="button_dao">导出数据</el-button>
                    <span style="color:red;font-size:12px; margin-left:30px;">注 : 因员工姓名、身份证号、手机号、银行卡号等其中一项或多项信息有误，导致以下员工没有成功导入系统，
                          请导出后整理正确的数据，重新导入系统。
                    </span>
                </div>
             </div>
             <div class="transaction_header_right">
                 <div class="right_button">
                 <el-button class="backClass" @click="backTog" style="float:right">返回</el-button>
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
                          <th>状态</th>
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
                          <td>{{item.kahao}}</td>
                          <td style="color:red">{{item.tai}}</td>
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
         ]
      };
    },
    methods:{
        backTog(){
            this.$router.push('/accountBalance')
        }
    },
    components:{
        pageFen
    }
}
</script>

<style>
 .transaction_header{
     width: 1260px;
     height: 50px;
     display: flex;
     margin: 0 auto;
 }
 .transaction_header_left{
     width: 1000px;
     height: 50px;
     line-height: 50px;
 }

 .transaction_header_right{
     width: 260px;
     height: 50px;
     margin-top: 6px;
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
     color: #eeeeee;
 }
 .tbody_table tr td{
     text-align: center;
     height: 40px;
     font-size: 12px;
     border-bottom: 1px solid #dddddd;
 }
 .button_dao{
     background: lightslategray;
     font-size: 12px;
     color: white;
     border-radius: 10px;
     width: 120px;
     height: 30px;;
     line-height: 10px;
 }
 .backClass{
     background: lightslategray;
     font-size: 12px;
     color: white;
 }

</style>
