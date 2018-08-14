<template>
      <section class="wrapper">
          <div class="bottom_main">
              <table  cellpadding="0" cellspacing="0">
                  <thead class="header_table">
                      <tr>
                          <th>发放年度/月度</th>
                          <th>操作人</th>
                          <th>发放日期</th>
                          <th>审核状态</th>
                          <th>发放状态</th>
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
                          <td><button class="tbody_table_button" @click="tolcaGo">工资详情</button></td>
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
             {"Id":"2017/07","type":"王金发","moneny":"2017-08-09","data":'通过',"name":"成功"},
             {"Id":"2017/07","type":"王金发","moneny":"2017-08-09","data":'通过',"name":"失败"}
         ]
      };
    },
    methods:{
        tolcaGo(){
            this.$router.push('/detailsOfWages')
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
     height: 30px;
     line-height: 26px;
     background: #8E9CA9;
 }
 .tbody_table tr td{
     text-align: center;
     height: 40px;
     font-size: 12px;
     border-bottom: 1px solid #DDE1E5;
 }
 .tbody_table_button{
     width: 80px;
     height: 30px;
     border-radius: 15px;
     background: #435A6F;
     border:none;
     color:white;
     cursor: pointer;
     font-size: 12px;
 }
</style>
