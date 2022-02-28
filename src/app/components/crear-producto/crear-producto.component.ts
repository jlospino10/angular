 import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
   selector: 'app-root',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  productoForm: FormGroup;
  titulo = 'Crear producto';
  id: string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _productoService: ProductoService,
              private aRouter: ActivatedRoute) { 
    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      cantidad: ['', Validators.required],
      proveedor: ['', Validators.required],
   
 
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarProducto() {

    const PRODUCTO: Producto = {
      nombre: this.productoForm.get('nombre')?.value,
      cantidad: this.productoForm.get('cantidad')?.value,
      proveedor: this.productoForm.get('proveedor')?.value,
       
       
       
    }
    if(this.id != null){
    this._productoService.obtenerProducto(this.id,PRODUCTO).subscribe(data => {
      this.toastr.info('El producto fue editado con exito!', 'Producto Registrado!');
      this.router.navigate(['/ver-productos']);
    }, error => {
      console.log(error);
      this.productoForm.reset();
    })
    
    }else{
     console.log(PRODUCTO);
    this._productoService.guardarProducto(PRODUCTO).subscribe(data => {
      this.toastr.success('El producto fue registrado con exito!', 'Producto Registrado!');
      this.router.navigate(['/ver-productos']);
    }, error => {
      console.log(error);
      this.productoForm.reset();
    })
    
    }

   

  
  }

  esEditar() {

    if(this.id !== null) {
      this.titulo = 'Editar producto';
      this._productoService.obtenerProducto(this.id).subscribe(data => {
        this.productoForm.setValue({
          nombre: data.nombre,
          cantidad: data.cantidad,
          proveedor: data.proveedor,
 
           
        })
      })
    }
  }

}
