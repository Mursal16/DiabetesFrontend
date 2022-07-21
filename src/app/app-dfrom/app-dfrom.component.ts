import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validator } from '@angular/forms';
import {ActivatedRoute} from "@angular/router";

export class User {
  public age!: number;
  public polyuria!: number;
  public polydipsia!: number;
  public weightloss!:number;
  public weakness!:number;
  public polyphagia!:number;
  public genital!:number;
  public visual!:number;
  public itching!:number;
  public irritability!:number;
  public healing!:number;
  public paresis!:number;
  public stifness!:number;
  public alopecia!:number;
  public obesity!:number;
  public male!:number;
  public female!:number;
}
@Component({
  selector: 'app-app-dfrom',
  templateUrl: './app-dfrom.component.html',
  styleUrls: ['./app-dfrom.component.css']
})
export class AppDfromComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  finalarr:number[]=[];
  symptoms:number[]=[];
  model = new User();
  selections:boolean[]=[
    true,
    false
  ];
  result:any='any';
  flag1:boolean=true;
  decision:boolean=true;
  Polyuria:string[]=[
    'yes',
    'no'
  ];
  Poldipsia:string[]=[
    'yes',
    'no'
  ];
  Weightloss:string[]=[
    'yes',
    'no'
  ];
  Weakness:string[]=[
    'yes',
    'no'
  ];
  Polphagia:string[]=[
    'yes',
    'no'
  ];
  Genital:string[]=[
    'yes',
    'no'
  ];
  Visual:string[]=[
    'yes',
    'no'
  ];
  Itching:string[]=[
    'yes',
    'no'
  ];
  Irritability:string[]=[
    'yes',
    'no'
  ];
  Healing:string[]=[
    'yes',
    'no'
  ];
  Paresis:string[]=[
    'yes',
    'no'
  ];
  Stifness:string[]=[
    'yes',
    'no'
  ];
  Alopecia:string[]=[
    'yes',
    'no'
  ];
  Obesity:string[]=[
    'yes',
    'no'
  ];
  Gender:string[]=[
    'Male',
    'Female'
  ];

  
  constructor (private http:HttpClient){}
  onSubmit(form: any) {
    this.symptoms=[];
    this.finalarr=[];
    this.symptoms.push(+form.value.age);
    if(form.value.polyuria=='yes'){
      this.symptoms.push(1);
    }
    else{
      this.symptoms.push(0);
    }
    if(form.value.polydipsia=='yes'){
      this.symptoms.push(1);
    }
    else{
      this.symptoms.push(0);
    }
    if(form.value.weightloss=='yes'){
      this.symptoms.push(1);
    }
    else{
      this.symptoms.push(0);
    }
    if(form.value.weakness=='yes'){
      this.symptoms.push(1);
    }
    else{
      this.symptoms.push(0);
    }
    if(form.value.polyphagia=='yes'){
      this.symptoms.push(1);
    }
    else{
      this.symptoms.push(0);
    }
    if(form.value.genital=='yes'){
      this.symptoms.push(1);
    }
    else{
      this.symptoms.push(0);
    }
    if(form.value.visual=='yes'){
      this.symptoms.push(1);
    }
    else{
      this.symptoms.push(0);
    }
    if(form.value.itching=='yes'){
      this.symptoms.push(1);
    }
    else{
      this.symptoms.push(0);
    }
    if(form.value.irritability=='yes'){
      this.symptoms.push(1);
    }
    else{
      this.symptoms.push(0);
    }
    if(form.value.delayed=='yes'){
      this.symptoms.push(1);
    }
    else{
      this.symptoms.push(0);
    }
    if(form.value.paresis=='yes'){
      this.symptoms.push(1);
    }
    else{
      this.symptoms.push(0);
    }
    if(form.value.stifness=='yes'){
      this.symptoms.push(1);
    }
    else{
      this.symptoms.push(0);
    }
    if(form.value.alopecia=='yes'){
      this.symptoms.push(1);
    }
    else{
      this.symptoms.push(0);
    }
    if(form.value.obesity=='yes'){
      this.symptoms.push(1);
    }
    else{
      this.symptoms.push(0);
    }
    if(form.value.gender=='Male')
    {
      this.symptoms.push(1);
      this.symptoms.push(0);
    }
    else{
      this.symptoms.push(0);
      this.symptoms.push(1);
    }
    console.log([this.symptoms]);

    this.http.post('https://diabetes-76.herokuapp.com/predict',{'data':[this.symptoms]}).subscribe(responsedata=>{
      this.result=responsedata;
      console.log(this.result.response);
      this.flag1=false;
      if (this.result.response=="no")
        {
          this.decision=false;
        }
      else if (this.result.response=="yes")
      {
        this.decision=true;
      }
    });
  }


  ngOnInit(): void {
  }

}
