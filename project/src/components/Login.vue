<template>
  <div class="login">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <div>
            <h1>金度教育后台管理系统登录页面</h1>
          </div>
        </div>
      </template>
      <el-form
        :model="form"
        ref="form"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item
          label="用户名"
          prop="useName"
          :rules="[{ required: true, message: '用户名不能为空' }]"
        >
          <el-input
            type="useName"
            v-model="form.useName"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          prop="passWrod"
          :rules="[{ required: true, message: '密码不能为空' }]"
        >
          <el-input
            type="passWrod"
            v-model="form.passWrod"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('form')">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
import {ElMessage} from 'element-plus'
export default {
  name: "logIn",
  data() {
    return {
      form: {
        useName: "",
        passWrod: "",
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert("submit!");
          console.log(this.form)
          this.axios.post('/login',this.form).then(
            res=>{
              console.log(res)
              if(res.data.status===200){
                ElMessage({
                  message:res.data.message,
                  type:'success'
                })
              }
            }
          )
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="less" >
//要把scoped 去掉 否则有作用域限制 样式会失效
.login {
  width: 100vw;
  height: 100vh;
  background: url("../assets/bg.jpg") center no-repeat;
  text-align: center;
  position: relative;
  .box-card {
    width: 500px;
    color: #fff;
    background-color: #65768557;
    position: absolute;
    top: 25%;
    left: 50%;
    margin-left: -250px;
    .el-form {
      width: 400px;
      .el-form-item__label {
        width: 100px;
        color: #fff;
      }
      .el-form-item__content {
        justify-content: center;
      }
      .el-button {
        width: 100%;
      }
    }
  }
}
</style>
