<template>
      <section class="wrapper">
          <div class="bottom_main">
              <table border="0" cellpadding="0" cellspacing="0">
                  <thead class="header_table">
                      <tr>
                          <th>发放年度/月度</th>
                          <th>申请人</th>
                          <th>申请日期</th>
                          <th>业务类型</th>
                          <th>审核状态</th>
                          <th>操作</th>
                      </tr>
                  </thead>
                  <tbody class="tbody_table">
                      <tr v-for="(item,index) in tableList" :key="index">
                          <td>{{item.Id}}</td>
                          <td>{{item.type}}</td>
                          <td>{{item.moneny}}</td>
                          <td>{{item.data}}</td>
                          <td>{{item.name}}</td>
                          <td style="width:400px;">
                              <el-button class="tbody_table_che">撤销</el-button>
                              <el-button class="tbody_table_shen" @click="nextShen">审核</el-button>
                              <el-button class="tbody_table_jindu" @click="nextJindu">审核进度</el-button>
                         </td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </section>
</template>

<script>
export default {
       data() {
      return {
         tableList:[
             {"Id":"2017/07","type":"王金发","moneny":"2017-08-09","data":'薪资发放',"name":"审核中"},
             {"Id":"2017/07","type":"王金发","moneny":"2017-08-09","data":'薪资发放',"name":"审核中"}
         ]
      };
    },
    methods:{
        tolcaGo(){
            this.$router.push('/detailsOfWages')
        },
        nextShen(){
            this.$router.push('/auditPage')
        },
        nextJindu(){
            this.$router.push('/reviewProgress')
        }
    }
}
</script>

<style scoped>
 .bottom_main{
     width: 1260px;
     height: 300px;
     
 }
 .header_table tr th{
     width: 240px;
     font-size: 12px;
     height: 35px;
     line-height: 26px;
     background: #435A6F;
     color: #eeeeee;
     
 }
 .tbody_table tr td{
     text-align: center;
     height: 40px;
     font-size: 12px;
     border-bottom: 1px solid #dddddd;
 }

 .tbody_table_che{
     width: 70px;
     border-radius: 15px;
     background: orange;
     color:white;
     cursor: pointer;
     font-size: 12px;
     height: 30px;
     line-height: 10px;
     border:none;
     
 }
 .tbody_table_shen{
     width: 70px;
     border-radius: 15px;
     background: #435A6F;
     color:white;
     cursor: pointer;
     font-size: 12px;
     height: 30px;
     line-height: 10px;
     border:none;
 }
  .tbody_table_jindu{
     width: 90px;
     border-radius: 15px;
     background: #435A6F;
     color:white;
     cursor: pointer;
     font-size: 12px;
     height: 30px;
     line-height: 10px;
     border:none;
 }
</style>
