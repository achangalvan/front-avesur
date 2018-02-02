<template>
	<div class="container" v-if="permiso">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias eligendi magni placeat quis natus inventore optio, sequi perspiciatis, obcaecati libero eius corporis mollitia reiciendis quia sint similique iste, doloribus consequuntur.
	</div>
</template>
<script>
	export default{
		data(){
			return{
				permiso : false
			}	    	
		},		
		created(){
			this.$http.get('api/test').then(
				function(response){					
					if(typeof response.body.hasacces !== 'undefined'){
						//alert(response.body.message);
						return false;
					}else{
						this.permiso = true;
					}											
				},				
				function(response){
					alert("Ocurrio algun detalle");
				}
			)
		}
	}
</script>