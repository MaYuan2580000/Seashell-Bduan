<template>
    <div class="header">
        <div class="header_auto">
        <div class="logo">
            <img src="../../../static/img/tu_03.jpg" style="width:100px; margin-top:-5px; margin-left:20px;" class="header_img">
        </div>
        <div class="user-info">
            <span class="span_span">选择公司: 北京海贝云创科技公司</span>
            <span class="span_span1"> 王金发</span>
            <span class="span_span2">2018年5月26日（周三）</span>
    <el-dropdown trigger="click">
         <span class="el-dropdown-link">
         <img src="../../../static/img/tu_06.jpg" style="width:20px;margin-left:50px;"/>
        </span>
      <el-dropdown-menu slot="dropdown" >
         <el-dropdown-item ><div  @click="dialogVisible = true">修改密码</div></el-dropdown-item>
         <el-dropdown-item><div @click="togo()">退出</div></el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
      
           <div>
               <el-dialog
                   :visible.sync="dialogVisible"
                    width="30%"
                    :show-close="false"
                    >
                    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="原密码" prop="pass">
                            <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="新密码" prop="pass">
                            <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码" prop="checkPass">
                            <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                            <el-button @click="resetForm('ruleForm2')">重置</el-button>
                        </el-form-item>
                    </el-form>
                </el-dialog>
           </div>
        </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
           
             return {
                name: 'linxin',
                dialogVisible:false,
                       ruleForm2: {
                        pass: '',
                        checkPass: '',
                        },
                    rules2: {
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ]
                    }
                 }

      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
        }
        },
        methods:{
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
                });
        },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            togo(){
                this.$router.push('./loginPage')
            }

           
        }
    }
</script>
<style scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 50px;
        font-size: 22px;
        line-height: 70px;
        color: #fff;
        background: #ffffff;
        border-bottom: 2px solid #dddddd;
        
    }
    .header_auto{
        width: 1545px;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
    }
    .user-info {
        float: right;
        padding-right: 50px;
        font-size: 16px;
        color: #000;
        font-family: 'Courier New', Courier, monospace;
        margin-top: -8px;
    }
    .user-info .el-dropdown-link{
        position: relative;
        display: inline-block;
        color: #dddddd;
        cursor: pointer;
        vertical-align: middle;
        top: 3px;
        right: 50px;
    }
    .user-info .user-logo{
        position: absolute;
        left:0;
        top:15px;
        width:40px;
        height:40px;
        border-radius: 50%;
    }
    .el-dropdown-menu__item{
        text-align: center;
    }
 .span_span{
     display:inline-block;
     margin-right: 30px;
     margin-left: 120px;
 }
  .span_span1{
     display:inline-block;
     margin-right: 30px;
 }
   .span_span2{
     display:inline-block;
     margin-right: 10px;
 }
  .el-input {
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 260px;
}

.el-form-item {
    margin-bottom: 22px;
    margin-left: -20px;
}
</style>
