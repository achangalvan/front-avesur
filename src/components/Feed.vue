<template>
	<div class="container">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias eligendi magni placeat quis natus inventore optio, sequi perspiciatis, obcaecati libero eius corporis mollitia reiciendis quia sint similique iste, doloribus consequuntur.
	</div>
</template>
<script>
	export default{
		data(){
			return{
				first : "",
				last : ""
			}	    	
		},		
		created(){
			this.$http.get('http://192.168.0.20:8889/api/test').then(
				function(response){					
					this.first = response.body.user.first_name;
				},				
				function(response){
					//alert("Ocurrio algun detalle");
				}
			)
		}
	}
</script>