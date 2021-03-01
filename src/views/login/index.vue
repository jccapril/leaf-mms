<template>
  <div class="login-container">
    <el-form
      ref="form"
      :rules="rules"
      :model="form"
      label-width="80px"
      class="login-form"
    >
      <h2 class="login-title">admin</h2>
      <el-form-item label="帐号" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {login,getUserInfo} from "@/api/login"

export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "帐号不能为空", trigger: "blur" },
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
      submitForm: function(formName){
        this.$refs[formName].validate(valid => {
          if(valid) {
            login(this.form.username,this.form.password).then(response => {
              const resp = response.data
              console.log(resp.code, resp.msg,response.data)
              if(resp.code == 2000) {
                getUserInfo(resp.data.token).then(response => {
                  const respUser = response.data
                  if(respUser.code == 2000) {
                    console.log(respUser)
                    localStorage.setItem('leaf-msm-user',JSON.stringify(respUser.data))
                    localStorage.setItem('leaf-msm-token',resp.data.token)
                    // 前往首页
                    this.$router.push('/')
                  }else {
                    this.$message({
                      message: respUser.msg,
                      type: 'warning'
                    })
                  }
                  
                })
              }else {
                this.$message({
                  message: resp.msg,
                  type: 'warning'
                })
              }
            })
          }else {
            console.log('submit error')
          }
          
        })
      }
  }
};
</script>

<style scoped>
.login-form {
  width: 350px;
  /* 上下间隙 160px, 左右自动居中 */
  margin: 160px auto;
  background-color: rgb(255, 255, 255, 0.8);
  padding: 28px;
  border-radius: 20px;
}
.login-container {
  position: absolute;
  width: 100%;
  height: 100%;
  /* background-color: blue; */
  background: url("../../assets/login.jpg");
}
.login-title {
  color: #303133;
  text-align: center;
}
</style>