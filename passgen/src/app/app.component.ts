import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length=10;
  password='';
  charInclude=false;
  cap=false;
  numInclude=false;
  symbolInclude=false;

  
  lenChange(value:string){
       const parseValue=parseInt(value);
       if (!isNaN(parseValue)) {
         this.length=parseValue;
       }
  }
  OnChangeNum(){
    this.numInclude=!this.numInclude;
  }
  OnChangeCap(){
    this.cap=!this.cap;
  }
  OnChangeSymbol(){
    this.symbolInclude=!this.symbolInclude;
  }
  OnChangeChar(){
    this.charInclude=!this.charInclude;
  }
  OnBtnClick(){
    const num="1234567890";
    const symbol="!@#$&()-";
    const char="abcdefghijklmnopqrstuvwxyz";
    const capletter="ABCDEFGHJKLMNOPQRSTUVWXYZ"
    let validChar='';
    if(this.numInclude){
      validChar+=num;
    }
    if(this.cap){
      validChar+=capletter;
    }
    if(this.charInclude){
      validChar+=char;
    }
    if(this.symbolInclude){
      validChar+=symbol;
    }
    let generatePass=''
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random()*validChar.length);
      generatePass+=validChar[index];
      
    }
    this.password=generatePass;
  }

}