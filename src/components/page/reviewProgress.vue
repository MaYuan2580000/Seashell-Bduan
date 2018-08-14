<template>
    <div class="table">
        <p style="margin-left:20px; padding-top:20px;">审批情况</p>
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
                 <p class="div_pp">赵梦欣（同意） &nbsp&nbsp&nbsp2018年06月23日 &nbsp&nbsp18:45:20 &nbsp&nbsp星期一 <i class="el-icon-time" style="margin-left:30px;">1小时05分</i></p>
                 <p style="color:blue; margin-top:85px;">同意调入</p>
             </div>
        </section>
    </div>
</template>

<script>

    export default {
        data: function(){
            return {
            }

        }  
    }
</script>

<style scoped>
    .auditPage_bottom{
        width: 1260px;
        height: 600px;
        margin-top: 30px;
        margin-left: 20px;
        display: flex;
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
  .div_pp{
      position: absolute;
      top: 200px;
  }
</style>