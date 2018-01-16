<script>
	export default{
		created(){
			this.$auth.destroyToken();
			this.$router.push("/");
		}
	}
</script>