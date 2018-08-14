<template>
    <div class="auditPage_main">
        <header class="headerr">
            <input class="header_p" type="text" placeholder="请输入验证码"/>
            <el-button class="header_button">获取验证码</el-button>
            <div class="headerr_div">
              <p>验证码有效期<span style="color:red;">59</span>秒</p>
              <p style="margin-top:15px;">收不到验证码,<a href="/">试试语音验证码</a></p>
            </div>
        </header>
        <section class="auditPage_shenhe">
            <textarea cols="81" rows="8"
             placeholder="请输入审批意见"
             style=" resize: none;"
            ></textarea>
            <div class="el_button">
            <el-button class="el_buttonTong">通过</el-button>
            <el-button class="el_buttonJu">拒绝</el-button>
            </div>
        </section>
        <section class="auditPage_bottom">
        
            <el-steps 
            direction="vertical" style="height:500px"
            
            >
                <el-step title="开始"></el-step>
                <el-step title="申请人"></el-step>
                <el-step title="审批人1"></el-step>
                <el-step title="审批人2"></el-step>
                <el-step title="结束"></el-step> 
            </el-steps>
             <div class="auditPage_bottom_div">
                 <p>张一峰（通过） &nbsp&nbsp&nbsp2018年06月23日 &nbsp&nbsp18:45:20 &nbsp&nbsp星期一</p>
                                  <p class="div_p">刘金玉（同意） &nbsp&nbsp&nbsp2018年06月23日 &nbsp&nbsp18:45:20 &nbsp&nbsp星期一 <i class="el-icon-time" style="margin-left:30px;">1小时05分</i></p>
                 <p style="color:blue;">同意调入</p>
             </div>
        </section>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
       
            }
        },
        methods: {
         
        }
    }
</script>
<style scoped>
    .auditPage_main{
        width: 1260px;
        height: auto;
    }
    .headerr{
        width: 1260px;
        height: 60px;
        position: relative;
        margin: 0 auto;
        display: flex;
        
    }
    .header_p{
        height: 30px;
        font-size: 12px;
        margin-top: 20px;
        margin-left: 20px;
    }
    .header_button{
        width: 170px;
        height: 32px;
        border: none;
        background: lightslategray;
        margin-top: 20px;
        margin-left: 20px;
        font-size: 12px;
        color: white;
        border-radius: 15px;
    }

    .auditPage_shenhe{
        width: 800px;
        height: 150px;
        margin-top: 30px;
        margin-left: 20px;
        display: flex;
    }
    .auditPage_bottom{
        width: 1260px;
        height: 600px;
        margin-top: 30px;
        margin-left: 20px;
        display: flex;
    }
    .headerr_div{
        width: 200px;
        height: 90px;
    }
    .headerr_div p{
        font-size: 12px;
        margin-top: 27px;
        margin-left: 10px;
        letter-spacing: 1px;
    }
    .headerr_div p a{
        color: blue;
        border-bottom: 1px solid blue;
    }
  ::placeholder{
      padding: 10px;
      
  }
  .el_button{
      margin-left: 20px;
      margin-top: 118px;
  }
  .el_buttonTong{
      width: 70px;
      height: 30px;
      background: lightslategray;
      font-size: 12px;
      color: white;
      line-height: 10px;
      border: none;
      border-radius: 15px;
  }
  .el_buttonJu{
      width: 70px;
      height: 30px;
      background: orange;
      font-size: 12px;
      color: white;
      line-height: 10px;
      border: none;
    border-radius: 15px;
  }
  .auditPage_bottom_div{
      margin-top: 5px;
      position: relative;
      width: 1000px;
  }
  .auditPage_bottom_div p{
      font-size: 12px;
      margin-top: 102px;
      margin-left: 20px;
      letter-spacing: 2px;
  }
  .div_p{
      position: absolute;
      top: 100px;
  }
</style>