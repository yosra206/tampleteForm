import { Component, OnInit } from '@angular/core';
import { Countries } from './countriesinterface';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  log(x:any){
console.log(x)}
onSubmit(x:any){
  console.log(x)
}

  constructor() { }
countries:Countries[]=[
  {name:'Egypt'},
  {name:'America'},
  {name:'London'},
  {name:'India'}
]
  ngOnInit(): void {
  }

}
