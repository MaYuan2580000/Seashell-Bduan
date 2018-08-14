<template>
    <div class="wrapper">
        <section class="flex-box">
            <section class="conent_main">
                <div class="table">
                    <p>第一步: 登录贵公司企业网银系统</p>
                </div>
                <div class="tablel">
                    <p>第二步: 向银行发薪专户转账</p>
                    <p class="tablel_p">账户名称: 发薪专户</p>
                    <p class="tablel_p">银行名称: 中国光大银行</p>
                    <p class="tablel_p">银行账号: <span class="span_red">10002536895452365</span></p>
                </div>
                <div class="tablell">
                    <p>第三步: 转账完成后10分钟，可以在系统中账户管理中查看账户余额</p>
                    <p class="span_red">特殊说明: 工资发放时将从账户余额扣除相应的工资金额，发薪总额一定要小于等于账户余额</p>
                </div>
                <div class="table_bottom">
                    <p>账户余额 : <span  class="span_red">10000000.00</span>   元</p>
                    <button class="buttonClass" @click="tolcalNezxt">查看交易记录</button>
                </div>
            </section>
        </section>
    </div>
</template>

<script>
    import Schart from 'vue-schart';
    export default {
        components: {
            Schart
        },
        data: () => ({

        }),
        methods:{
            tolcalNezxt(){
                this.$router.push('/transactionRecord')
            }
        }
    }
</script>

<style scoped>
  .conent_main{
      width: 1260px;
      height: 600px;
  }
  .table{
      width: 100%;
      height: 70px;
      border-bottom: 1px dashed #dddddd;
      line-height: 70px;
      font-size: 12px;
      padding-left: 50px;
  }
  .span_red{
    color: red;
  }
  .table_bottom{
      width: 100%;
      height: 200px;
      margin-top: 30px;
  }
  .table_bottom p{
      width: 200px;
      height: 30px;
      font-size: 12px;
      border: 1px solid #000;
      text-align: center;
      line-height: 30px;
      margin-left: 50px;
  }
  .buttonClass{
      margin-top: 50px;
      margin-left: 50px;
      font-size: 12px;
      color: white;
      width: 170px;
      height: 30px;
      background: lightslategray;
      border-radius: 5px;
      border: none;
      cursor: pointer;
      box-shadow: 5px 4px 10px 0px lightslategray;
  }
  .tablel{
      height:130px;
      flex-wrap: wrap;
      width: 100%;
      line-height: 30px;
      border-bottom: 1px dashed #dddddd;
      font-size: 12px;
      padding-left: 50px;
      padding-top: 10px;
  }
  .tablel_p{
      padding-left: 56px;
  }
  .tablell{
      height:80px;
      flex-wrap: wrap;
      width: 100%;
      line-height: 30px;
      border-bottom: 1px dashed #dddddd;
      font-size: 12px;
      padding-left: 50px;
      padding-top: 25px;  
  }
</style>