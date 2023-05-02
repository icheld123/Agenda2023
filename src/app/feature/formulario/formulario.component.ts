import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  constructor(){}
  formulario = new FormGroup({
    user : new FormControl('',Validators.required),
    lastname : new FormControl('',Validators.required),
  });
}
