<template>
	<div class="row-fluid">
		<div class="col-md-6 offset-md-3">
			<form>
				<div class="form-group">
					<label for="exampleInputName">Name</label>
					<input type="text" class="form-control" id="exampleInputName" aria-describedby="NameHelp" placeholder="Enter your name" v-model="name">
					<small id="NameHelp" class="form-text text-muted">Your name is :  {{ name }}</small>
				</div>
				<div class="form-group">
					<label for="exampleInputEmail1">Email address</label>
					<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
					<small id="emailHelp" class="form-text text-muted">Your e-mail is : {{email}}</small>
				</div>
				<div class="form-group">
					<label for="exampleInputPassword1">Password</label>
					<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
				</div>	  
				<button type="submit" class="btn btn-primary">Submit</button>
			</form>
		</div>		
	</div> 	
</template>

<script>
	export default{
		data(){
			return{
				name : "",
				email : "",
				password : ""
			}	    	
		}
	}
</script>