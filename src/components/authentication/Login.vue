<template>	
		<div class="container">
	      	<form class="form-signin">
		        <h2 class="form-signin-heading">Please sign in</h2>
		        <label for="inputEmail" class="sr-only">Email address</label>
		        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="" v-model="email">
		        <label for="inputPassword" class="sr-only">Password</label>
		        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" v-model="password">
		        <div class="checkbox">
		          <label>
		            <input type="checkbox" value="remember-me"> Remember me
		          </label>
		        </div>
		        <button class="btn btn-lg btn-primary btn-block" type="button" @click="test">Sign in</button>              
	    	</form>
    </div> <!-- /container -->
</template>

<script>	
	export default{
		data(){
			return{
				email : "",
				password : ""
			}	    	
		},
		methods: {
			test () {				
				var data ={
					client_id : 2,
					client_secret: 'MxR9wstIR3SWZg9fkPJSR9KDeDCOm4LtTATvJcBg',
					grant_type: 'password',
					username: this.email,
					password: this.password
				}
				this.$http.post('http://192.168.2.123:8889/oauth/token',data).then(
					function(response){
						//console.log(response);
						this.$auth.setToken(response.body.access_token, response.body.expires_in + Date.now());
						this.$router.push("/feed");
					},
					function(response){
						alert("Ocurrio algun detalle");
					}
				)
			}
		}
	}
</script>
<style>
	body {
	  padding-top: 40px;
	  padding-bottom: 40px;
	}

	.form-signin {
	  max-width: 330px;
	  padding: 15px;
	  margin: 0 auto;
	}
	.form-signin .form-signin-heading,
	.form-signin .checkbox {
	  margin-bottom: 10px;
	}
	.form-signin .checkbox {
	  font-weight: 400;
	}
	.form-signin .form-control {
	  position: relative;
	  box-sizing: border-box;
	  height: auto;
	  padding: 10px;
	  font-size: 16px;
	}
	.form-signin .form-control:focus {
	  z-index: 2;
	}
	.form-signin input[type="email"] {
	  margin-bottom: -1px;
	  border-bottom-right-radius: 0;
	  border-bottom-left-radius: 0;
	}
	.form-signin input[type="password"] {
	  margin-bottom: 10px;
	  border-top-left-radius: 0;
	  border-top-right-radius: 0;
	}

</style>