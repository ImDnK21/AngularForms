import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // miFormulario :  FormGroup = new FormGroup({
  //   'nombre': new FormControl('RX 6600'),
  //   'precio': new FormControl(850000),
  //   'existencias': new FormControl(5)
  // })

  miFormulario: FormGroup = this.formBuilder.group({

    nombre: [,[Validators.required,Validators.minLength(3)] ],
    precio : [,[Validators.required,Validators.min(0)]],
    existencias :[ ,[Validators.required,Validators.min(0)]]
    })

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.miFormulario.reset({
      nombre : 'GTX 1080TI',
      precio : 670000,
      existencias: 0
    })
      
  }

  campoEsValido(campo : string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  guardar(){
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched()
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset()
  }

}
