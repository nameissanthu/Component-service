import { Injectable } from '@angular/core';
@Injectable()


export class PostService{
posts:any;
constructor(){
    this.posts=[
        {
            title:'my first post',
            body:'body of my firt post'
        },

        {
            title:'my second post',
            body:'body of my second post'
        },
        {
            title:'my third post',
            body:'body of my third post'
        },
        
    ];
}
   getPosts(){
   return this.posts;
}
addServie(newPost){
   this.posts.push(newPost);
}
}
