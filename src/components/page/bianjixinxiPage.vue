<template>
      <section class="section_section">
             <section>
                 <el-button class="message_button">保存</el-button>
                 <el-button class="message_button1" @click="quxiao">取消</el-button>
                     <section class="section_header">
                         <span class="right_border"></span>
                         <span class="rightt">公司基本信息</span>
                         <div class="setction_div1">
                             公司名称：<input type="text" class="section_input">
                             <span class="faxin">
                             发薪日期：<select type="text" class="section_input_input" >
                                     <option >请选择</option>
                                     <option>2018-05-09</option>
                                     <option>2018-05-09</option>
                                    </select>
                            </span>
                            <p class="section_p">公司地址：<input type="text" class="section_inputLenght"></p>

                            <p class="section_p1">财务联系人：<input type="text" class="section_input" style="margin-left:18px">
                             <span class="youxiang">
                             邮箱：<input type="text" class="section_inputt">
                            </span>
                            </p>

                             <p class="section_p">办公电话：<input type="text" class="section_input" style="margin-left:20px; width:380px;">
                             <span class="youxiang1">
                             移动电话：<input type="text" class="section_inputt" style="margin-left:19px;">
                            </span>
                            </p>
                         </div>

                         <span class="right_border"></span>
                         <span class="righttt">公司资质信息</span>
                         <div class="setction_div1">
                             营业执照：<input type="text" class="section_input" style="margin-left:19px;">
                             <span class="faxinn">
                             组织机构代码：<input type="text" class="section_inputt">
                            </span>
                            
                            <p class="section_p2">法人名称：<input type="text" class="section_input" style="margin-left:19px;">
                            <span class="zhengjian">
                             证件类型：<select type="text" class="section_inputtt" style="font-size:12px; margin-left:18px; height:28px;">
                                     <option >请选择</option>
                                     <option>身份证</option>
                                     <option>护照</option>
                                    </select>
                            </span>
                            </p>

                             <p class="section_p">证件号码：<input type="text" class="section_input" style="margin-left:19px;">
                            </p>
                         </div>

                         <span class="right_border"></span>
                         <span class="right_message">上传公司文件</span>
                <div class="table_bottom">
                    <div>
                        <div class="border_raduis">
                            <img src="../../../static/img/up_03.jpg">
                   </div>
                         <el-upload
                            action="https://jsonplaceholder.typicode.com/posts/">
                             <el-button size="small" class="upShang">请上传法人身份证正面扫描件</el-button>
                         </el-upload>
                  </div>
                        <div style="margin-left:120px;">
                            <div class="border_raduis">
                             <img src="../../../static/img/up_03.jpg">
                        </div>
                        <el-upload
                            action="https://jsonplaceholder.typicode.com/posts/">
                             <el-button size="small" class="upShang">请上传法人身份证负面扫描件</el-button>
                         </el-upload>
                    </div>
                 <div style="margin-left:120px;">
                     <div class="border_raduis">
                         <img src="../../../static/img/up_03.jpg">
                     </div>
                        <el-upload
                            action="https://jsonplaceholder.typicode.com/posts/">
                             <el-button size="small" class="upShang">请上传公司营业执照扫描件</el-button>
                         </el-upload>
                    </div>
                  </div>
                     </section>
             </section>
      </section>
</template>

<script>
export default {
   data(){
       return{

       }
   },
   methods:{
      quxiao(){
          this.$router.back(-1)
      }
   }
}
</script>

<style scoped>
    .section_section{
        width: 1260px;
        height: auto;
        margin: 0 auto;
    }
    .message_button{
        width: 140px;
        border: none;
        border-radius: 15px;
        background: lightslategrey;
        font-size: 12px;
        color: white;
        margin-top: 10px;
    }
    .section_header{
        width: 1260px;
        height: 230px;
        margin-top: 20px;
        font-size: 12px;
        position: relative;
    }
    .right_border{
        width: 5px;
        height: 15px;
        background: lightslategray;
        display: inline-block;
        margin-top: 7px;
    }
    .rightt{
        display: inline-block;
        margin-left: 5px;
        position: absolute;
        top: 7px;
    }
    .righttt{
        display: inline-block;
        margin-left: 5px;
        position: relative;
        top: -2px;  
    }
    .right_message{
        display: inline-block;
        margin-left: 5px;
        position: relative;
        top: -2px;  
    }
    .setction_div1{
        margin-left: 10px;
        margin-top: 10px;
        margin-bottom: 30px;
    
    }
    .section_input{
        width: 380px;
        margin-left: 20px;
        height: 22px;
    }
    .section_inputt{
        width: 300px;
        margin-left: 20px;
        height: 23px;
    }
    .section_inputtt{
        width: 306px;
        margin-left: 20px;
        height: 23px;
    }
    .section_input_input{
        width: 303px;
        margin-left: 20px;
        height: 28px;
        font-size: 12px;
    }
    .faxin{
        display: inline-block;
        padding-left: 90px;
    }
    .faxinn{
        display: inline-block;
        padding-left: 70px;
    }
  .zhengjian{
        display: inline-block;
        padding-left: 95px;
    }
    .youxiang{
        display: inline-block;
        padding-left: 115px;
    }
    .youxiang1{
       display: inline-block;
        padding-left: 92px;  
    }
    .section_p{
        margin-top: 20px;
    }
    .section_p1{
      margin-top: 20px; 
      margin-left: -10px;
    }
   .section_p2{
      margin-top: 20px; 
     
    }
  
    .section_inputLenght{
        width:857px;
        margin-left: 20px;
        height: 22px;
    }

   .table_bottom{
      width: 1260px;
      height: auto;
      margin-top: 40px;
      display: flex;
      margin-left: 0px;
      
  }

   .border_raduis img{
     width: 30px;
     margin-left: 80px;
 }
 .upShang{
     background: none;
     border: none;
     color: white;
     line-height: 18px;
 }
   .message_button{
        width: 100px;
        border: none;
        border-radius: 15px;
        background: lightslategrey;
        font-size: 12px;
        color: white;
        margin-top: 10px;
    }
    .message_button1{
        width: 100px;
        border: none;
        border-radius: 15px;
        background: orange;
        font-size: 12px;
        color: white;
        margin-top: 10px;
    }
</style>
