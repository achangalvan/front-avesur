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
					<b-nav-item-dropdown text="Lang" right>
						<b-dropdown-item-button>
							<b-nav-item-dropdown class="dropdown-submenu" text="submenu 1">											
								<b-dropdown-item href="#">EN</b-dropdown-item>
								<b-dropdown-item href="#">ES</b-dropdown-item>
								<b-dropdown-item href="#">RU</b-dropdown-item>
								<b-dropdown-item href="#">
									<b-nav-item-dropdown class="dropdown-submenu" text="submenu 2">
										<b-dropdown-item href="#">EN</b-dropdown-item>
										<b-dropdown-item href="#">ES</b-dropdown-item>
										<b-dropdown-item href="#">
											<b-nav-item-dropdown class="dropdown-submenu" text="submenu 3">
												<b-dropdown-item href="#">EN</b-dropdown-item>
												<b-dropdown-item href="#">ES</b-dropdown-item>
												<b-dropdown-item href="#">RU</b-dropdown-item>
												<b-dropdown-item href="#">FA</b-dropdown-item>
											</b-nav-item-dropdown>
										</b-dropdown-item>
										<b-dropdown-item href="#">FA</b-dropdown-item>
									</b-nav-item-dropdown>
								</b-dropdown-item>
							</b-nav-item-dropdown>
						</b-dropdown-item-button>
						<b-dropdown-item href="#">ES</b-dropdown-item>
						<b-dropdown-item href="#">RU</b-dropdown-item>
						<b-dropdown-item href="#">FA</b-dropdown-item>
					</b-nav-item-dropdown>
					<b-nav-item-dropdown text="Lang" right>
						<b-dropdown-item href="#">EN</b-dropdown-item>
						<b-dropdown-item href="#">ES</b-dropdown-item>
						<b-dropdown-item href="#">RU</b-dropdown-item>
						<b-dropdown-item href="#">
							<template>
								<div v-html="htmlContent"></div>
							</template>
						</b-dropdown-item>
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

.dropdown-submenu > a {
    color: #b2acac !important;
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
<script>
	export default{
		data(){
			return{
				isAuth : false,
				menuDesplegar : [],
				htmlContent :
				`
					<li class="dropdown-submenu">
						<a  class="dropdown-item" tabindex="-1" href="#">Submenu 1</a>
						<ul class="dropdown-menu">
							<li class="dropdown-item"><a tabindex="-1" href="#">Second level</a></li>
							<li class="dropdown-submenu">
								<a class="dropdown-item" href="#">Even More..</a>
									<ul class="dropdown-menu">
										<li class="dropdown-item"><a href="#">3rd level</a></li>
										<li class="dropdown-submenu"><a class="dropdown-item" href="#">another level</a>
											<ul class="dropdown-menu">
												<li class="dropdown-item"><a href="#">4th level</a></li>
												<li class="dropdown-item"><a href="#">4th level</a></li>
												<li class="dropdown-item"><a href="#">4th level</a></li>
											</ul>
										</li>
										<li class="dropdown-item"><a href="#">3rd level</a></li>
									</ul>
							</li>
							<li class="dropdown-item"><a href="#">Second level</a></li>
							<li class="dropdown-item"><a href="#">Second level</a></li>
						</ul>
					</li>
				`
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