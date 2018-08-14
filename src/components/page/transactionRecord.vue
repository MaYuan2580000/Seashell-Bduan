<template>
      <section>
          <div class="transaction_header">
             <div class="transaction_header_left">
                 <span>操作人 <input type="text"/></span>
                 <span class="DataSpan">交易日期 <input type="text"/></span>
                 <span class="DataSpan">交易类型 
                  <select class="select_la">
                      <option>请选择</option>
                      <option>账户充值</option>
                      <option>工资发放</option>
                 </select>
                 
                 </span>
             </div>
             <div class="transaction_header_right">
                 <div class="right_button">
                    <div class="padding_right">
                    <el-button type="success">搜索</el-button>
                    <el-button type="danger">清除</el-button>
                    </div>
                     <div class="padding_left">
                        <el-button type="primary" @click="backTog">返回</el-button>
                     </div>
                 </div>
             </div>
          </div>
          <div class="bottom_main">
              <table border="0" cellpadding="0" cellspacing="0">
                  <thead class="header_table">
                      <tr>
                          <th style="width:70px;">序号</th>
                          <th>交易单号</th>
                          <th>交易类型</th>
                          <th>交易金额</th>
                          <th>交易日期</th>
                          <th>操作人</th>
                      </tr>
                  </thead>
                  <tbody class="tbody_table">
                      <tr v-for="(item,index) in tableList" :key="index">
                          <td>{{index+1}}</td>
                          <td>{{item.Id}}</td>
                          <td>{{item.type}}</td>
                          <td style="color:red">{{item.moneny}}</td>
                          <td>{{item.data}}</td>
                          <td>{{item.name}}</td>
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
             {"Id":"100000000000001","type":"账户充值","moneny":"+ 1000000.00","data":'2018-06-06 18:06:25',"name":"财务人员"},
             {"Id":"100000000000002","type":"工资发放","moneny":"- 500000.00","data":'2018-06-09 18:06:25',"name":"刘一水"},
             {"Id":"100000000000003","type":"工资发放","moneny":"- 500000.00","data":'2018-06-09 19:16:34',"name":"赵梦欣"},
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

<style scoped>
 .transaction_header{
     width: 1260px;
     height: 80px;
     display: flex;
 }
 .transaction_header_left{
     width: 630px;
     height: 80px;
     line-height: 80px;
     margin-left: 40px;
 }
 .transaction_header_left input{
      width: 110px;
 }
 .transaction_header_left span{
     font-size: 12px;
     
 }
 .transaction_header_left input{
     margin-left: 10px;
 }
 .DataSpan{
     padding-left: 40px;
 }
 .select_la{
     width: 110px;
     font-size: 12px;
     height: 20px;
     margin-left: 20px;
    
 }

 .transaction_header_right{
     width: 630px;
     height: 80px;
 }
 .right_button{
     margin-left: 20px;
     padding-top: 20px;
     display: flex;
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
     height: 35px;
     font-size: 12px;
     border-bottom: 1px solid #dddddd;
 }
 .padding_left{
     padding-left: 125px;
 }
 .padding_right{
     margin-left: 180px;
 }

</style>
