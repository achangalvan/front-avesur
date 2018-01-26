<template>
	<header>
		<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
			<a href="#" class="navbar-brand">Carrousel</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
	          <span class="navbar-toggler-icon"></span>
	        </button>
			<div class="collapse navbar-collapse" id="navbarCollapse">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item active" v-if=" ! isAuth">
						<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
					</li>
					<li class="nav-item" v-if=" ! isAuth">
					<a class="nav-link" href="#">Link</a>
						</li>
					<li class="nav-item" v-if=" ! isAuth">               
						<router-link to="Login" class="nav-link">Iniciar sesión</router-link>
					</li>
					<li class="nav-item" v-if="isAuth">               
						<router-link to="Logout" class="nav-link">Cerrar sesión</router-link>
					</li>
					<b-nav-item-dropdown text="Opciones" right v-if="isAuth">
						<b-dropdown-item :to="opciones.route" :key="opciones.id" v-for="opciones in menuDesplegar">{{opciones.route}}</b-dropdown-item>
					</b-nav-item-dropdown>
				</ul>          
				<form class="form-inline mt-2 mt-md-0">
					<input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
					<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
				</form>
			</div>
		</nav>
	</header>	
</template>

<script>
	export default{
		data(){
			return{
				isAuth : false,
				menuDesplegar : []
			}       
		},
		watch:{
			$route:function(){				
				this.isAuth = this.$auth.isAuthenticated();
				if(this.isAuth){
					this.menuDesplegar = JSON.parse(this.$auth.getMenuDesplegar());
				}
				//console.log(this.$auth.getMenuDesplegar());
			}
		}
	}
</script>