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
					<b-nav-item-dropdown :text="datosmenu.name" v-for="datosmenu in menuDesplegar" v-if="isAuth && ! datosmenu.parent_id && datosmenu.sublevels">
						<b-dropdown-item href="#">
							<template>
								<div v-html="traerHtml(datosmenu.id,datosmenu.parent_id,menuDesplegar)"></div>
							</template>
						</b-dropdown-item>
						<b-dropdown-item href="#" v-for="otherDatosmenu in menuDesplegar" v-if="otherDatosmenu.parent_id == datosmenu.id && ! otherDatosmenu.sublevels">{{otherDatosmenu.name}}</b-dropdown-item>
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
				menuDesplegar : [],
				datos : ``				
			}       
		},
		watch:{
			$route:function(){				
				this.isAuth = this.$auth.isAuthenticated();
				if(this.isAuth){
					this.menuDesplegar = JSON.parse(this.$auth.getMenuDesplegar());
				}				
			}
		},
		methods:{
			traerHtml(menuId,mainParent,menuDesplegar){
				let _this = this
				var optionsDrop = ``;				
				menuDesplegar.forEach(function(element,index){				    
				    if(element.parent_id == menuId){
				    	if(element.sublevels){				    		
				    		optionsDrop += `<li class='dropdown-submenu'>`;
				    		optionsDrop += `<a class="dropdown-item" tabindex="-1" href="#">`+element.name+`</a>`;
				    		optionsDrop += `<ul class='dropdown-menu'>`;
				    		optionsDrop += _this.traerHtml(element.id,1,menuDesplegar);
				    		optionsDrop += `</ul>`;				    		
				    	}else{
				    		if(mainParent > 0){				    			
				    			optionsDrop += `<li class="dropdown-item"><a href="Logout">` + element.name + `</a></li>`;				    			
				    		}
				    	}
				    }				    				          
				});
				return optionsDrop;							
			}
		}
	}
</script>

<style>

.dropdown-submenu {
    position: relative;
}

.dropdown-submenu>.dropdown-menu {
    top: 0;
    left: 100%;
    margin-top: -6px;
    margin-left: -1px;
    -webkit-border-radius: 0 6px 6px 6px;
    -moz-border-radius: 0 6px 6px;
    border-radius: 0 6px 6px 6px;
}

.dropdown-submenu:hover>.dropdown-menu {
    display: block;
}

.dropdown-submenu>a:after {
    display: block;
    content: " ";
    float: right;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    border-width: 5px 0 5px 5px;
    border-left-color: #ccc;
    margin-top: 8px;
    margin-right: -10px;
}

.dropdown-submenu:hover>a:after {
    border-left-color: #fff;
}

.dropdown-submenu.pull-left {
    float: none;
}

.dropdown-submenu.pull-left>.dropdown-menu {
    left: -100%;
    margin-left: 10px;
    -webkit-border-radius: 6px 0 6px 6px;
    -moz-border-radius: 6px 0 6px 6px;
    border-radius: 6px 0 6px 6px;
}
</style>