<template>
      <section class="wrapper">
          <div class="transaction_header">
             <div class="transaction_header_left">
                 <span>发放年度/月度 <input type="text" class="input" placeholder="年"/>
                                    <input type="text" class="input" placeholder="月"/>
                 </span>
                 <span class="DataSpan">姓名 <input type="text"/></span>
                 <span class="DataSpan">手机号 <input type="text"/></span>
                
             </div>
             <div class="transaction_header_right">
                 <div class="right_button">
                 <el-button type="success">搜索</el-button>
                 <el-button type="danger">清除</el-button>
                 </div>
             </div>
             <div class="henader_bottom">
                   <el-button class="shenhe">提交审核</el-button>
                   <el-button class="gongzi">工资发放</el-button>
                   <el-button class="dingshi" @click="centerDialogVisible = true">定时发放</el-button>
                   <el-dialog
                        :visible.sync="centerDialogVisible"
                        center="true"
                        class="width"
                        :show-close="true"
                        width="30%"
                        >
                        <span class="widtn_span">选择定时时间</span>
                        <p class="width_p"><input type="text" placeholder="年/月/日/时间"/></p>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="centerDialogVisible = false" class="footer_button">保存</el-button>
                            <el-button type="primary" @click="centerDialogVisible = false" class="footer_back">返回</el-button>
                        </span>
                    </el-dialog>
                   <span class="time">
                       <i class="el-icon-time" style="color:red;"></i>
                       定时时间 : 2018-07-15 18:00:00
                   </span>
             </div>
          </div>
          <div class="bottom_main">
          <table border="0" cellpadding="0" cellspacing="0">
                  <thead class="header_table">
                      <tr>
                          <th style="width:240px;">发放年度/月度</th>
                          <th style="width:280px;">姓名</th>
                          <th style="width:280px;">手机号</th>
                          <th style="width:150px;">所属部门</th>
                          <th style="width:400px;">岗位</th>
                          <th style="width:200px;">税后实发</th>
                          <th>岗位工资</th>
                          <th>实发合计</th>
                          <th>扣款合计</th>
                          <th>公积金公司</th>
                          <th>公积金个人</th>
                      </tr>
                  </thead>
                  <tbody class="tbody_table">
                      <tr v-for="(item,index) in tableList" :key="index">
                          <td>{{item.name}}</td>
                          <td>{{item.type}}</td>
                          <td>{{item.numBer}}</td>
                          <td>{{item.phone}}</td>
                          <td>{{item.men}}</td>
                          <td>{{item.gang}}</td>
                          <td>{{item.yin}}</td>
                          <td>{{item.kahao}}</td>
                          <td>{{item.tai}}</td>
                          <td>{{item.he}}</td>
                          <td>{{item.ji}}</td>
                          
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
              "name":"2017/08",
              "type":"刘一水",
              "numBer":"18911541206",
              "phone":'市场部',
              "men":"市场部总监",
              "gang":"5865.00",
              "yin":"2000",
              "kahao":"5400",
              "tai":"8000",
              "he":"8000",
              "ji":"8000"
              },
             {
              "name":"2017/08",
              "type":"刘一水",
              "numBer":"18911541206",
              "phone":'市场部',
              "men":"人力资源部总监",
              "gang":"5865.00",
              "yin":"2000",
              "kahao":"5400",
              "tai":"8000",
              "he":"8000",
              "ji":"8000"
              },
             {
              "name":"2017/08",
              "type":"刘一水",
              "numBer":"18911541206",
              "phone":'市场部',
              "men":"人力资源部总监",
              "gang":"5865.00",
              "yin":"2000",
              "kahao":"5400",
              "tai":"8000",
              "he":"8000",
              "ji":"8000"
              },
             {
              "name":"2017/08",
              "type":"刘一水",
              "numBer":"18911541206",
              "phone":'市场部',
              "men":"人力资源部总监",
              "gang":"5865.00",
              "yin":"2000",
              "kahao":"5400",
              "tai":"8000",
              "he":"8000",
              "ji":"8000"
              },
             {
              "name":"2017/08",
              "type":"刘一水",
              "numBer":"18911541206",
              "phone":'市场部',
              "men":"人力资源部总监",
              "gang":"5865.00",
              "yin":"2000",
              "kahao":"5400",
              "tai":"8000",
              "he":"8000",
              "ji":"8000"
              },
         ],
         centerDialogVisible: false
      };
    },
    methods:{

    },
    components:{
        pageFen
    }
}
</script>

<style scoped>
 .transaction_header{
     width: 1260px;
     height: 120px;
     display: flex;
     flex-wrap: wrap;
     margin: 0 auto;
 }
 .transaction_header_left{
     width: 1000px;
     height: 80px;
     line-height: 80px;
 }
 .transaction_header_left span{
     font-size: 12px;
    
 }
 .transaction_header_left input{
     width: 100px;
     margin-left: 15px;
     height:25px;
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
     height: 300px;
     margin: 0 auto;
 }
 .header_table tr th{
     width: 240px;
     font-size: 12px;
     height: 35px;
     line-height: 15px;
     background: lightslategray;
     color: #eeeeee;
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
 .DataSpan input{
     width: 110px;
     height: 25px;
 }
 .henader_bottom{
     width: 700px;
     height: 40px;
     margin-top: -20px;
    line-height: 40px;
 }
 .shenhe{
     width: 90px;
     height: 30px;
     border-radius: 5px;
     background: lightslategray;
     border: none;
     font-size: 12px;
     color: white;
     cursor: pointer;
     
 }
  .gongzi{
     width: 90px;
     height: 30px;
     border-radius: 5px;
     background: lightslategray;
     border: none;
     font-size: 12px;
     color: white;
     margin-left: 40px;
     cursor: pointer;
 }
   .dingshi{
     width: 90px;
     height: 30px;
     border-radius: 5px;
     background: tomato;
     border: none;
     font-size: 12px;
     color: white;
     margin-left: 40px;
     cursor: pointer;
 }
 .input{
     width: 70px;
 }
 .time{
     width: 240px;
     height: 30px;
     font-size: 12px;
     color: #000000;
     margin-left: 10px;
     display: inline-block;
     text-align: center;
     letter-spacing: 1px;
 }
 .width{
    width:700px; 
    margin:0 auto;
    height: 1000px;
    text-align: center;
    
 }
 .widtn_span{
     display: inline-block;
     position: absolute;
     top: 50px;
     right: 165px;
     font-size: 12px;
 }
 .width_p{
     margin-top: 60px; 
 }
 .width_p input{
     width: 260px;
     font-size: 12px;
     height: 25px;
     text-align: center;
     letter-spacing: 1px;
 }
 .footer_button{
     margin-right: 20px;
     width: 90px;
     height: 30px;
     border-radius: 5px;
     background: lightslategray;
     border: none;
     font-size: 12px;
     color: white;
     cursor: pointer;
 }
 .footer_back{
     width: 90px;
     height: 30px;
     border-radius: 5px;
     background: lightslategray;
     border: none;
     font-size: 12px;
     color: white;
     cursor: pointer;
     margin-right: 70px;

 }
</style>
