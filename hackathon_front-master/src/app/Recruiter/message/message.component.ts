import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
// import { io } from 'socket.io-client';
import { AppService } from 'src/app/app.service';
import { ServiceService } from 'src/app/service.service';
// const SOCKET_ENDPOINT = "localhost:3000";
 
import { ChatService } from '../chat.service';
@Component({
 selector: 'app-message',
 templateUrl: './message.component.html',
 styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
 
 @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  socket:any;
 message:any;
 public userId:any = localStorage.getItem('rec_id');
 
 public roomId: any;
 public messageText: any;
 public messageArray:any = [];
 private storageArray:any = [];
 
 public showScreen = false;
 public phone: any;
 public currentUser:any;
 public selectedUser:any;
 
 public userList:any;
 
 constructor(private router:Router, public service:AppService, private chatService: ChatService,private httpService:ServiceService) { }
 
 ngOnInit(): void {
   this.chatService.getMessage()
     .subscribe((res:any) => {
       if (this.roomId) {
         setTimeout(() => {
           this.httpService.getChatsById(this.roomId).subscribe((res:any)=>{
             this.messageArray = res;
             console.log(this.messageArray);
            
           })
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
   this.httpService.getCandidateList(this.userId).subscribe((res:any)=>{
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
     recruiterId: this.userId,
     userId: this.selectedUser.id
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
 

