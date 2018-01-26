export default function (Vue) {
	Vue.auth = {
		setToken (token, expiration)  {
			localStorage.setItem('token', token);
			localStorage.setItem('expiration', expiration);
		},		
		getToken ()  {
			var token = localStorage.getItem('token');
			var expiration = localStorage.getItem('expiration');

			if( ! token || ! expiration){
				return null;
			}
			if(Date.now() > parseInt(expiration)){
				this.destroyToken();
				return null;
			}else{
				return token;
			}
		},
		destroyToken () {
			localStorage.removeItem('token');
			localStorage.removeItem('expiration');
		},
		isAuthenticated ()  {
			if(this.getToken()){
				return true;
			}else{
				return false;
			}
		},
		setMenuDesplegar(resultado) {			
			localStorage.setItem("menu", JSON.stringify(resultado));					
		},
		getMenuDesplegar() {
			var menu = [];
			if(this.getToken()){
				var menu = localStorage.getItem('menu');
			}			
			return menu;
		}
	}

	Object.defineProperties(Vue.prototype,{
		$auth:{
			get:()=> {
				return Vue.auth
			}
		}
	});
}