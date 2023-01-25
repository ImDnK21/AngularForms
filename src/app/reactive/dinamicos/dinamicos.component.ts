import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validator, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit{

  miFormulario : FormGroup = this.formBuilder.group({

    nombre: ['',[Validators.required, Validators.minLength(3)]],
    favoritos : this.formBuilder.array( [
      ['Metal Gear', Validators.required],
      ['Death Stranding',Validators.required],
      ['God Of War',Validators.required],
      
    ],Validators.required )
  })

  nuevoFavorito : FormControl = this.formBuilder.control('',Validators.required)

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(private formBuilder : FormBuilder) { }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.miFormulario.reset({
    //   nombre: 'Ejemplo'
    // })
  }

  campoEsValido(campo : string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  agregarFavorito(){
    if (this.nuevoFavorito.invalid){ return }
      //this.favoritosArr.push(new FormControl(this.nuevoFavorito.value, Validators.required));
      this.favoritosArr.push(this.formBuilder.control(this.nuevoFavorito.value, Validators.required));

      this.nuevoFavorito.reset()
  }

  borrarFavorito(i : number){
    if (this.nuevoFavorito.invalid) {
      this.favoritosArr.removeAt(i);
      
    }

  }

  guardar(){
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched()
      return
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset()
    // imprimir el valor del formulario, solo si es valido
  }
  
}
