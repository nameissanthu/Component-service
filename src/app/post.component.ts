import { Component } from '@angular/core'
import { PostService } from './post.service'
@Component({
    selector:'post',
    template:`<h1>Posts</h1>
<label> TITLE </label>
<input type="text" [(ngModel)]="title">
<br>
<label> BODY </label>
<input type="text" [(ngModel)]="body">
<br> 
<input type="submit" value="Submit" (click)="addPosts()">




    <ul>
    <li *ngFor="let post of posts">
    <h3>{{post.title}}</h3>
    <p>{{post.body}}</p>
    </li>
   </ul>
    `,
    providers:[PostService]
})

export class PostComponent{
    posts:any;
    title:any;
    body:any;
    newPost:any;
    constructor(private _postService:PostService){
       this.posts=this._postService.getPosts();
    }
    addPosts(){
        this.newPost={
            title:this.title,
            body:this.body
        }
        this. _postService.addServie(this.newPost)
    }

    
}