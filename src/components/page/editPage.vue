<template>
    <section class="main">
           <div class="main_bian">
               <span class="Name">员工姓名</span>
               <span class="main_span">张鑫帆</span>
           </div>
          <div class="main_bian">
               <span class="Name">证件类型</span>
               <span class="main_span">身份证</span>
         </div>
         <div class="main_bian">
               <span class="Name">证件号码</span>
               <span class="main_span">153122198012131313</span>
        </div>
        <div class="main_bian">
               <span class="Name">手机号</span>
               <input style="margin-left:60px;"/>
        </div>
        <div class="main_bian">
               <span class="Name">所属部门</span>
               <input style="margin-left:60px;"/>
        </div>
        <div class="main_bian">
               <span class="Name">岗位</span>
               <input style="margin-left:60px;" />
        </div>
        <div class="main_bian">
               <span class="Name">银行名称</span>
               <input style="margin-left:60px;" />
        </div>
        <div class="main_bian">
               <span class="Name">银行卡号</span>
               <input style="margin-left:60px;"/>
        </div>
        <div class="main_bian">
            <button class="baocun" @click="gotoBack">保存</button>
            <button class="quxiao" @click="gotoBack">取消</button>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            gotoBack(){
                this.$router.push('/employeeInformation')
            }
        }
    }
</script>

<style scoped>
   .main{
       width: 1260px;
       height: 100%;
       font-size: 12px;
       margin-left: 20px;
   }
   .main_bian{
       width: 600px;
       height: 75px;
       line-height: 75px;
   }
   .main_bian input{
       width: 197px;
   }
   .Name{
       width: 100px;
       height: 30px;
       line-height: 30px;
       text-align: center;
       display: inline-block;
       background: #e5e5e5;
      
   }

   .baocun{
       width: 100px;
       height: 30px;
       border-radius: 10px;
       border: none;
       background: lightslategray;
       color: white;
       margin-left: 50px;
       cursor: pointer;
   }
    .quxiao{
       width: 100px;
       height: 30px;
       border-radius: 10px;
       border: none;
       background: lightslategray;
       color: white;
       margin-left: 72px;
       cursor: pointer;
   }
   .main_span{
    margin-left:60px;
    width: 200px;
    background: #e5e5e5;
    display: inline-block;
    height: 30px;
    line-height: 30px;
    text-align: center;
   }
</style>