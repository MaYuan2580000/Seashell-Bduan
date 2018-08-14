<template>
    <div class="wrapper">
        <section class="flex-box">
            <section class="conent_main">
                <div class="table">
                    <p>第一步 : 下载数据模板，按照模板整理员工数据（<span class="span_red">姓名、证件类型、证件号码、手机号、银行名称、银行卡号，以上内容均为必填</span>）。</p>
                </div>
                <div class="table">
                    <p>第二步 : 整理好员工数据，通过系统下方的 "导入并验证" 功能导入到系统中。</p>
                </div>
                <div class="tablel">
                    <p class="table_pp">第三步 : 导入系统时自动验证员工数据，验证通过的员工数据直接进入 "员工信息" ，验证失败的员工数据
                       ，通过 "查看失败数据" 在页面
                    </p>
                    <p  class="table_pp">中查看，可以导出并修改完成后重新上传验证(验证内容 : 姓名、证件号码、手机号、银行卡号 ,
                         系统只能验证具有身份证号的中国大陆居民，港澳台及外籍人员无法验证信息)。
                    </p>
                </div>
                <div class="table">
                    <p class="span_red">特殊说明 : 系统验证员工的姓名、证件号码、手机号、银行卡号信息，是为了保证工资发放能够
                                        及时到账，请各位HR一定认证对待。
                    </p>
                </div>
                <div class="table_bottom">
                    <div>
                    <div class="border_raduis">
                       <img src="../../../static/img/6_03.jpg">
                    </div>
                    <button class="buttonClass" >下载模板</button>
                    </div>
                 <div style="margin-left:120px; margin-top:3px;">
                    <div class="border_raduis">
                        <img src="../../../static/img/6_05.jpg">
                    </div>
                    <button class="buttonClass" >导入并验证</button>
                 </div>
                 <div style="margin-left:120px;  margin-top:3px;">
                    <div class="border_raduis">
                         <img src="../../../static/img/6_07.jpg">
                    </div>
                    <button class="buttonClass" @click="failShibai">查看失败数据</button>
                 </div>
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
         failShibai(){
             this.$router.push('/importFailure')
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
      width: 1260px;
      height: 80px;
      border-bottom: 1px dashed #dddddd;
      line-height: 80px;
      font-size: 12px;
      padding-left: 50px;
      letter-spacing: 1px;
  }
  .tablel{
      width: 1260px;
      height: 90px;
      border-bottom: 1px dashed #dddddd;
      font-size: 12px;
      padding-left: 50px;
      letter-spacing: 1px;
      padding-top: 30px;
      line-height: 20px;
  }
  .span_red{
    color: red;
  }
  .table_bottom{
      width: 1260px;
      height: 200px;
      margin-top: 30px;
      display: flex;
      margin-left: 40px;
  }
  .table_bottom p{
      width: 170px;
      height: 30px;
      font-size: 12px;
      border: 1px solid #000;
      text-align: center;
      line-height: 30px;
      margin-left: 50px;
  }
  .buttonClass{
      margin-top: 5px;
      font-size: 12px;
      color: white;
      width: 110px;
      height: 30px;
      background: lightslategray;
      border-radius: 9px;
      border: none;
      cursor: pointer;
      box-shadow: 5px 4px 10px 0px lightslategray;
  }
 .table_p{
     margin-top: -65px;
     color: red;
     letter-spacing: 1px;
 }
 .border_raduis{
     width: 80px;
     text-align: center;
     color: white;
     font-size: 24px;
     margin-top: 20px;
 }
 .border_raduis img{
     width: 35px;
     margin-left: 33px;
 }
 .table_pp{
     width: 785px;
     letter-spacing: 1px;
     
 }
</style>