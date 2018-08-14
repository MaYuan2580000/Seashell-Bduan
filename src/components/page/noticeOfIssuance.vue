<template>
        <section class="flex-box">
            <section class="conent_main">
                <div class="table">
                    <p>第一步 : 下载工资模板, 模板内容包含 : <span class="span_red">姓名、手机号、税后实发、</span>其他工资项目，其中姓名、手机号、税后实发为必填项目，其他工资项目可根据贵公司情况自行确定。</p>
                </div>
                <div class="table">
                    <p>第二步 : 将核算好的工资数据整理到工资模板中，确保工资模板中的员工应通过 "员工信息" 导入系统;否则需要先将员工数据导入到系统中,才能够为员工该员工发放工资。</p>
                </div>
                <div class="table">
                    <p>第三步 : 导入整理好工资数据的工资模板,导入过程中系统会自动核算工资模板中的员工是否在 "员工信息" 中存在,并验证工资模板中<span class="span_red">姓名、手机号、税后实发</span>
                    三项内容不能为空。
                    </p>
                    
                </div>

               <div class="data_bottom">
                      <div class="data_date">
                          <button>工资发放年度和月度</button>
                          <select class="data_date_select">
                              <option>2017</option>
                              <option>2018</option>
                              <option>2019</option>
                          </select>
                         <select class="data_date_select">
                              <option>请选择月</option>
                              <option>01</option>
                              <option>02</option>
                              <option>03</option>
                              <option>04</option>
                              <option>05</option>
                              <option>06</option>
                          </select>
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
                    <button class="buttonClass">上传工资单</button>
                 </div>
                  </div>
               </div>
            </section>
        </section>
</template>

<script>
    import Schart from 'vue-schart';
    export default {
        components: {
            Schart
        },
        data(){
               return{
                  
      }
        },
        methods:{
               
        }
    }
</script>

<style scoped>
  .conent_main{
      width: 1260px;
      height: 600px;
      letter-spacing: 1px;
     
  }
  .table{
      width: 1050px;
      height: 80px;
      border-bottom: 1px dashed #dddddd;
      line-height: 80px;
      font-size: 12px;
      margin-left: 30px;
      
  }
  .span_red{
    color: red;
  }

  .buttonClasss{
      font-size: 12px;
      color: white;
      width: 110px;
      height: 30px;
      background: lightslategray;
      border-radius: 5px;
      border: none;
      cursor: pointer;
      box-shadow: 5px 4px 10px 0px lightslategray;
      position: absolute;
      top: 355px;
      left: 125px;
  }


 .data_bottom{
     width: 600px;
     height: 260px;
     margin-top: 40px;
 }
 .data_date{
     width: 700px;
     height: 50px;
     font-size: 12px;
     line-height: 50px;
    
 }
 .data_date button{
     width: 200px;
     height: 30px;
     background: lightslategray;
     border: none;
     margin-left: 30px;
 }


 .data_date_select{
     width: 170px;
     margin-left: 20px;
     font-size: 12px;
     height: 30px;
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
    .table_bottom{
      width: 1260px;
      height: 200px;
      margin-top: 60px;
      display: flex;
      margin-left: 30px;
      
  }

   .border_raduis img{
     width: 35px;
     margin-left: 38px;
 }
 .upShang{
     background: none;
     border: none;
     color: white;
     line-height: 18px;
 }
</style>