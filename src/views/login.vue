<template>
    <div class="login">
        <div class="container">
            <img src="../assets/1.png" alt="" class="avatar">
 <el-form :model="loginForm" :rules="rules" ref="loginForm" class="demo-ruleForm">
  <el-form-item  prop="username" >
    <el-input v-model="loginForm.username" placeholder="请输入用户名" prefix-icon="myicon myicon-user"></el-input>
  </el-form-item>
   <el-form-item  prop="password" >
    <el-input v-model="loginForm.passwordname" placeholder="请输入密码" prefix-icon="myicon myicon-key"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary">立即创建</el-button>
  </el-form-item>
</el-form>
        </div>

    </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #2f4050;
  .container {
    position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    padding: 0px 40px 15px 40px;
    margin: 200px auto;
    background: white;
    .avatar {
      position: relative;
      left: 50%;
      width: 120px;
      height: 120px;
      margin-left: -60px;
      margin-top: -60px;
      box-sizing: border-box;
      border-radius: 50%;
      border: 10px solid #fff;
      box-shadow: 0 1px 5px #ccc;
      overflow: hidden;
    }
    .login-btn {
      width: 100%;
    }
  }
}
</style>
