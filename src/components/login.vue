<template>
	<div class="wrap">
		<el-form
			:model="loginMsg"
			:rules="loginRules"
			ref="loginForm"
			label-position="left"
			label-width="0px"
			class="demo-ruleForm login-container"
		>
			<h3 class="title">系统登录</h3>
			<el-form-item prop="account">
				<el-input type="text" v-model="loginMsg.account" auto-complete="off" placeholder="账号"></el-input>
			</el-form-item>
			<el-form-item prop="checkPass">
				<el-input type="password" v-model="loginMsg.checkPass" auto-complete="off" placeholder="密码"></el-input>
			</el-form-item>
			<!-- <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox> -->
			<el-form-item class="submitBtn">
				<el-button
					type="primary"
					style="width:100%;"
					@click.native.prevent="loginSubmit"
					:loading="logining"
				>登录</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
//import NProgress from 'nprogress'
export default {
	data() {
		return {
			logining: false,
			loginMsg: {
				account: "",
				checkPass: ""
			},
			loginRules: {
				account: [
					{ required: true, message: "请输入账号", trigger: "blur" }
					//{ validator: validaePass }
				],
				checkPass: [
					{ required: true, message: "请输入密码", trigger: "blur" }
					//{ validator: validaePass2 }
				]
			},
			checked: true
		};
	},
	methods: {
		loginSubmit(){
            this.$refs.loginForm.validate(vaild => {
                if(vaild){
                    this.$router.replace({path:'/index'})
                }
            })
        }
	}
};
</script>

<style scoped>
.wrap{
    position: absolute;
    width: 100%;
    height: 100%;
    background: url('~@/assets/login/login_bg.jpg') no-repeat;
    background-size: 100%;
}
.login-container {
	border-radius: 5px;
	width: 420px;
	padding: 35px 35px 15px 35px;
	background: #fff;
	border: 1px solid #eaeaea;
	box-shadow: 0 0 25px #cac6c6;
	position: absolute;
	left: 50%;
	top: 45%;
	transform: translate(-50%, -50%);
}
.title {
	margin: 0px auto 40px auto;
	text-align: center;
	color: #505458;
}
.remember {
	margin: 0px 0px 35px 0px;
}
.submitBtn{
    margin-top: 70px;
}
</style>