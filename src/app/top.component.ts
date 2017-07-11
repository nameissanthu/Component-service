import  { Component } from '@angular/core';
import {TopService} from './top.service';

@Component({
   selector:'top',
   template:`<h1>{{name}}</h1>
          <p><strong>Email Id:</strong>{{email}}</p>
          <h4> <strong>Address:</strong> {{address.street}},{{address.city}},{{address.state}},{{address.country}}</h4>
               <button (click)="toggleHobbies()" class="btn btn-info">{{showHobbies ? "Hide Hobbies": "Show Hobbies" }}</button>
          <div *ngIf="showHobbies">
         <h3><strong>Hobbies:</strong></h3>
         <ul>
         <li *ngFor="let hobby of hobbies; let i = index ">
         {{hobby}} <button (click)="DeleteHobby(i)" class="btn btn-xs btn-danger">X</button>
         </li>
         </ul>
         
         <label>Add Hobby</label>
         <input type="text" #hobby >
         <button (click)="addHobby(hobby.value)" class="btn btn-success">Submit</button>
         
         </div>
         <hr>
         <h2>Edit User</h2>
         <label> Name : </label> <br/>
         <input type="text" name="Name"  [(ngModel)]="name"><br>
         <label> Email : </label> <br/>
         <input type="text" name="Email"[(ngModel)]="email"><br>
         <label> street : </label> <br/>
         <input type="text" name="address.street" [(ngModel)]="address.street"><br>
         <label> city : </label> <br/>
         <input type="text" name="address.city" [(ngModel)]="address.city"><br>
         <label> state </label> <br/>
         <input type="text" name="address.state"[(ngModel)]="address.state"><br>
         <label> country </label> <br/>
         <input type="text" name="address.country" [(ngModel)]="address.country">
         
   `,
   providers:[TopService]
})



export class TopComponent{
    name:string;
    email:string;
    address:address;
    hobbies:string[]; 
    showHobbies:boolean;
        posts:any; 
    
    constructor(){

        this.name='Santhosh'
        this.email='nameissanthu@gmail.com'
    this.address={
        street:'Banjara Hills',
        city:'Hyderabad',
        state:'telangana',
        country:'india'
    }
 this.hobbies=['music','movies','coocking']
 this.showHobbies=false;



}
   toggleHobbies(){
       if (this.showHobbies==true){
          this.showHobbies=false;  
       }else{
             this.showHobbies=true;
       }
   }
   addHobby(hobby){
       this.hobbies.push(hobby)
   }
   DeleteHobby(i){
       this.hobbies.splice(i,1);
   }
}
interface address{
    street:string,
    city:string,
    state:string,
    country:string
}