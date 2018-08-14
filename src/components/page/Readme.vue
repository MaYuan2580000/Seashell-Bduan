<template>
    <div >
        <section class="section_header">
            <div class="marginCenter">
                 <ul v-for="(item,index) in list" :key="index" @click="toLcalNext(index)"
                        class="button" :class="{'bor':clicked==index}"
                 >
                 <li> {{item}}</li>
                 </ul>
                 </div>
        </section>
        <section class="section_main">
            <div class="section_main_data">
                <dataComponent style="margin-top:30px;"/>

            </div>
            <div class="section_main_echarts">
                <p class="section_main_echarts_p">月度工资分析表</p>
                <p class="section_main_echarts_p1">金额/元</p>
                <div id="myChart" :style="{width: '600px', height: '380px',marginLeft:'8px',marginTop:'-30px'}"></div>
                <p class="section_main_echarts_p2">2018</p>
            </div>
        </section>
        <a ></a>
    </div>
</template>
<script>
   import dataComponent from '../../components/page/dataComponent.vue'; 
    export default {
        data: function(){
            return {
                list:['账户余额','导入须知','工资记录','发放须知','员工信息','工资审核','工资详情','交易记录'],
                clicked:0
  
            }
        },
          mounted(){
                this.drawLine();
        },
        components:{
            dataComponent
        },
        methods:{
            toLcalNext(index){
              if(index==0){
                this.$router.push('/accountBalance')
              }else if(index==1){
                this.$router.push('/guideToImport')
              }else if(index==2){
               this.$router.push('/wageProgress')
              }else if(index==3){
               this.$router.push('/noticeOfIssuance')
              }else if(index==4){
               this.$router.push('/employeeInformation')
              }else if(index==5){
               this.$router.push('/salaryReview')
              }else if(index==6){
               this.$router.push('/detailsOfWages')
              }else if(index==7){
               this.$router.push('/transactionRecord')
              }
              this.clicked = index;
              li.addClass('border_bottom')
            },
        drawLine(){
        // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
            myChart.setOption({
            tooltip: {
                
            },
            xAxis : [
            {
            type : 'category',
            boundaryGap : false,
            data : ['01','02','03','04','05','06','07','08','09','10','11','12','年/月']
             }
            ],
             yAxis : [
             {
                 type : 'value'
             }
            ],
         series : [
       
                {

                    type:'line',
                    stack: '总量',
                    symbolSize: 10,
                    label: {
                        normal: {
                            show: false,
                            position: 'top'
                           
                        }
                    },
                          itemStyle : {
                                normal : {
                                    color:'#00FF00',
                                }
                            },
                        areaStyle: {
                          normal: {
                          backgroundColor:'blue',
                    }},
                    data:[820, 932, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000]
                }
            ]
                });
            }
        }
    }
</script>

<style scoped >
    .section_header ul{
        list-style: none;
        float: left;
        margin-left: 87px;
        margin-top: 30px;
        color: white;
    }
    .section_header ul{
        cursor: pointer;
    }
    .section_header ul:hover{
        color: red;
        border-bottom: 1px solid red;
    }
    
  .section_header{
      width: 100%;
      height:100px;
      line-height: 37px;
  }
  .section_main{
      width: 1260px;
      height: 500px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 30px;
  }

  .section_main_data{
      width: 580px;
      height: 450px;
      margin-left: 40px;
      border-radius: 20px;
      border: 1px solid #dddddd;

  }
  .section_main_echarts{
      width: 580px;
      height: 450px;
      margin-right: 10px;
      border-radius: 20px;
      border: 1px solid #dddddd;
      
  }
  .border_bottom{
      border-bottom: 1px solid red;
      height: 30px;
  }
  .marginCenter{
      width: 1290px;
      height: 110px;
      margin: 0 auto;
      background: url(../../assets/backgroundImage.jpg) no-repeat;
      background-size: 100%;
      line-height: 50px;
  }
  .section_main_echarts_p{
      text-align: center;
      padding-top: 30px;
  }
  .section_main_echarts_p1{
      padding-left: 18px;
      padding-top: 20px;
  }
  .section_main_echarts_p2{
      text-align: center;
      margin-top: -25px;
  }
</style>