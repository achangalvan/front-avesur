<template>
	<div class="container-fluid">
		<div class="row justify-content-md-center">
			<div class="card col-10">
				<div class="card-body">
					<h5 class="card-title">Configuración de permisos</h5>
					<hr>
					<div class="row">
						<div class="col-6">
						<select name="" id="" class="form-control">
							<option value="">Seleccione usuario</option>
						</select>
						</div>
						<div class="col-6">
							<treeselect 
							:load-root-options="getMenu" 
							v-model="value"
    						:multiple="true"
							:flat="true"
							placeholder="Seleccione permisos"
							:defaultExpandLevel="Infinity"							
    						/>
						</div>
					</div>									
				</div>
			</div>
		</div>
	</div>	
</template>
<script>
	import Treeselect from '@riophae/vue-treeselect'
	let called = false
	export default{
		components: { Treeselect },
		data(){
			return{
				value : null
			}	    	
		},		
		methods:{
			getMenu(callback){
				var rootOptions = [];
				this.$http.get('api/arbol').then(
					function(response){						
						callback(null, response.body.arbol)						
					},				
					function(response){
						callback(new Error('Network error'))
					}
				)
			}
		}
	}
</script>
<style src="@riophae/vue-treeselect/dist/vue-treeselect.min.css"></style>