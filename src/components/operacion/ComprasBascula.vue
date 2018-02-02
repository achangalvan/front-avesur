<template>
	<div class="container-fluid">
		<div class="row justify-content-md-center">
			<div class="card col-10">
				<div class="card-body">
					<h5 class="card-title">Compras con bascula</h5>
					<hr>
					<form>
						<div class="form-row">
							<div class="form-group col-md-6">
								<label for="pesobascula">Peso bascula</label>
								<input type="number" class="form-control" name="comprasCbascula_pesobascula" id="comprasCbascula_pesobascula">
							</div>
							<div class="form-group col-md-6">
								<label for="Precio">Precio</label>
								<input type="number" class="form-control" name="comprasCbascula_precio" id="comprasCbascula_precio">
							</div>
						</div>						
						<div class="form-group row">
							<label for="proveedor" class="col-sm-2 col-form-label">Proveedor</label>
							<div class="col-sm-10">
								<select name="comprasCbascula_proveedor" id="comprasCbascula_proveedor" class="form-control" v-model="proveedor">
									<option value="0">Seleccione proveedor</option>
									<option value="1">Proveedor 1</option>
									<option value="2">Proveedor 2</option>
								</select>
							</div>
						</div>
						<div class="form-group row">
							<label for="producto" class="col-sm-2 col-form-label">Producto</label>
							<div class="col-sm-10">
								<select name="comprasCbascula_producto" id="comprasCbascula_producto" class="form-control" v-model="producto">
									<option value="0">Seleccione producto</option>
									<option value="1">Producto 1</option>
									<option value="2">Producto 2</option>
								</select>
							</div>
						</div>
						<hr>
						<div class="form-row">
							<div class="form-group col-md-4">
								<label for="kgporcaja">Kg por caja</label>
								<input type="number" class="form-control" name="comprasCbascula_kgporcaja" id="comprasCbascula_kgporcaja" v-model="kgPorCaja">
							</div>
							<div class="form-group col-md-4">
								<label for="pollosporcaja">Pollos por caja</label>
								<input type="number" class="form-control" name="comprasCbascula_kgporcaja" id="comprasCbascula_kgporcaja" v-model="pollosPorCaja">
							</div>	
							<div class="form-group col-md-4">
								<label for="numcajas">Numero de cajas</label>
								<input type="number" class="form-control" name="comprasCbascula_kgporcaja" id="comprasCbascula_kgporcaja" v-model="cajas">
							</div>
						</div>
						<div class="form-group row">
							<div class="col-sm-10">
								<button type="button" class="btn btn-outline-info" @click="agregar">Agregar</button>
							</div>
						</div>						
						<div class="col-12" v-if="datos.length > 0">
							<table class="table">
								<thead>
									<tr>
										<th scope="col">Proveedor</th>
										<th scope="col">Producto</th>
										<th scope="col">Pollos por caja</th>
										<th scope="col">Kg por caja</th>
										<th scope="col">Pollos</th>
										<th scope="col">Kg</th>
										<th scope="col">Cajas</th>
										<th scope="col">Accion</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="(items, index) in datos">									
										<td>{{items.proveedor}}</td>
										<td>{{items.producto}}</td>
										<td>{{items.pollosPorCaja}}</td>
										<td>{{items.kgPorCaja}}</td>
										<td>{{items.pollos}}</td>
										<td>{{items.kg}}</td>
										<td>{{items.cajas}} </td>
										<td>
											<button type="button" class="btn btn-danger" @click="remove(index)">Eliminar</button>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</form>			
				</div>
			</div>
		</div>	
	</div>
</template>
<script>
	export default{
		data(){
			return{
				datos : [],
				proveedor : 0,
				producto : 0,
				pollosPorCaja : 0,				
				kgPorCaja : 0,
				cajas  : 0,				
			}
		},
		methods:{
			agregar(){
				this.datos.push({
					proveedor : this.proveedor,
					producto : this.producto,
					pollosPorCaja : this.pollosPorCaja,
					kgPorCaja : this.kgPorCaja,
					pollos : this.pollosPorCaja * this.cajas,
					kg : this.kgPorCaja * this.cajas,
					cajas  : this.cajas
				});				
			},
			remove(index){				
				this.datos.splice(index, 1);
			}
		}
	}
</script>