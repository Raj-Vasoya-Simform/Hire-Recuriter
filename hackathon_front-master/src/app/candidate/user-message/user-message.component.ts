import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { ServiceService } from 'src/app/service.service';
import { UserServiceService } from 'src/app/user-service.service';
import { UserChatService } from '../user-chat.service';
 
@Component({
 selector: 'app-user-message',
 templateUrl: './user-message.component.html',
 styleUrls: ['./user-message.component.css']
})
export class UserMessageComponent implements OnInit {
 socket:any;
 message:any;
 public userId:any = localStorage.getItem('user_id');
 
 public roomId: any;
 public messageText: any;
 public messageArray:any = [];
 private storageArray:any = [];
 
 public showScreen = false;
 public phone: any;
 public currentUser:any;
 public selectedUser:any;
 
 public userList:any;
 @ViewChild('scrollMe') private myScrollContainer: ElementRef;
 constructor(private router:Router, public service:AppService, private chatService: UserChatService,private httpService:ServiceService, public userService:UserServiceService) { }
 
 ngOnInit(): void {
   this.chatService.getMessage()
     .subscribe((res:any) => {
       if (this.roomId) {
         setTimeout(() => {
           this.httpService.getChatsById(this.roomId).subscribe((res:any)=>{
             this.messageArray = res;             
           })
           this.showScreen= true;
           // this.storageArray = this.chatService.getStorage();
           // const storeIndex = this.storageArray
           //   .findIndex((storage:any) => storage.roomId === this.roomId);
           // this.messageArray = this.storageArray[storeIndex].chats;
         }, 500);
       }
     });
   this.login()
 }
  ngAfterViewChecked() {       
   this.scrollToBottom()
 }
 
 scrollToBottom(): void {
     try {
         this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;       
   } catch(err) { }                
 }
 
 login(): void {
   this.currentUser = this.userId;
   this.httpService.getRecruiterListByCandidate(this.userId).subscribe((res:any)=>{     
     this.userList = res.filter((value:any, index:any, self:any) =>
       index === self.findIndex((t:any) => (
         t.place === value.place && t.name === value.name
       ))
     );
    
   })
   if (this.currentUser) {
     this.showScreen = true;
   }
 }
 
 selectUserHandler(id: any): void {
   this.selectedUser = this.userList.find((user:any) => user.id === id);
   const obj= {
     userId: this.userId,
     recruiterId: this.selectedUser.id
   }
   this.httpService.getRoom(obj).subscribe((res:any)=>{          
     this.roomId = res.id;
     this.httpService.getChatsById(this.roomId).subscribe((res:any)=>{
       this.messageArray = res;       
     })
     this.join();
     this.storageArray = this.chatService.getStorage();
     const storeIndex = this.storageArray
       .findIndex((storage:any) => storage.roomId === this.roomId);
      if (storeIndex > -1) {
       this.messageArray = this.storageArray[storeIndex].chats;
     }   
   })     
 }
 
 join(): void {
   this.chatService.joinRoom({user: this.userId, room: this.roomId});
 }
 
 sendMessage(): void {
   this.chatService.sendMessage({
     user: this.currentUser.id,
     room: this.roomId,
     message: this.messageText,
     roomId:this.roomId,
     senderId: this.userId
   });
   const obj= {
     message: this.messageText,
     roomId:this.roomId,
     senderId: this.userId
   }
 
   this.storageArray = this.chatService.getStorage();
   const storeIndex = this.storageArray
     .findIndex((storage:any) => storage.roomId === this.roomId);
 
   this.httpService.addMessage(obj).subscribe((res:any)=>{
     console.log(res);
      
   })
 
   if (storeIndex > -1) {
     this.storageArray[storeIndex].chats.push({
       user: this.currentUser.name,
       message: this.messageText
     });
   } else {
     const updateStorage = {
       roomId: this.roomId,
       chats: [{
         user: this.userId,
         message: this.messageText
       }]
     };
 
     this.storageArray.push(updateStorage);
   }
 
   this.chatService.setStorage(this.storageArray);
   this.messageText = '';
 }
}
 
 

