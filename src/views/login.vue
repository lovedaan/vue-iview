<template>
  <div class="login-page">
     <div class="form-con">
       <div class="title">xx管理系统</div>
       <Form ref="formCustom" :model="formValidate" :rules="ruleValidate" :label-width="80">
          <FormItem label="用户名">
              <Input v-model="formValidate.username" placeholder="请输入用户名"></Input>
          </FormItem>
          <FormItem label="密码">
              <Input v-model="formValidate.password" placeholder="请输入密码"></Input>
          </FormItem>
          <FormItem>
              <Button type="primary" @click="handleSubmit()">登录</Button>
          </FormItem>
      </Form>
     </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
          formValidate: {
              username: '',
              password: ''
          },
          ruleValidate: {
              username: [
                  { required: true, message: '用户名不能为空', trigger: 'blur' }
              ],
              password: [
                  { required: true, message: '密码不能为空', trigger: 'blur' }
              ],
          }
      }
  },
  methods: {
      handleSubmit () {

      }
  }

  }
</script>

<style lang="less">
  .login-page {
    width: 100%;
    height: 100%;
    background: url(~assets/img/bg.jpg) no-repeat;
    background-size: cover;
    padding-top: 100px;
    box-sizing: border-box;
  }
  .form-con {
    width: 400px;
    padding: 20px;
    margin: 0 auto;
    background: #fff;
    border-radius: 5px;
    .title {
      text-align: center;
      margin-bottom: 20px;
      font-size: 22px;
    }
  }
</style>