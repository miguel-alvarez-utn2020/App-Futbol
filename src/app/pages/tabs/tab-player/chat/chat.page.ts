import { Component, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IonContent} from '@ionic/angular';
import { Message } from 'src/app/pages/domain/models/Channel';
import { Group } from 'src/app/pages/domain/models/Group';
import { User } from 'src/app/pages/domain/models/User';

// import { ChatService } from 'src/app/services/chat.service';
// import { CoreService } from 'src/app/services/core.service';
// import { Group } from 'src/app/domain/models/Group';
// import { Message } from 'src/app/domain/models/Channel';
// import { UserInfo } from 'src/app/domain/models/User';
// import { StoreService } from 'src/app/services/store.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat-part1.page.scss', './chat-part2.page.scss'],
})
export class ChatPage implements OnInit, OnDestroy {

  @ViewChild('IonContent', { static: true }) content!: IonContent;
  // private coreService = inject(CoreService);
  // private chatService = inject(ChatService);
  // private storeService = inject(StoreService);
  loading = false;
  textBackButton: string = 'home'
  backUrl: string = '/home'
  
  user!: User;
  group!: Group;
  messages: Message[] = [];
  textBox: string = '';

  ngOnDestroy(): void {
    // if(this.group){
    //   this.chatService.leaveRoom(this.group.id);
    // }
  }

  ngOnInit() {
    // this.storeService.user.subscribe( user => {
    //   this.user = user
    // });
    // this.coreService.loadingGroupSelected.subscribe(  value => this.loading = value  );
    // this.storeService.groupSelected.subscribe( (group) => {
    //   if(group){
    //     this.group = group;
    //     this.messages = group.messages;
    //     this.chatService.joinRoom(group.id);
    //     this.scrollDown();
    //   }
    // });
    // this.chatService.getMessage()
    //   .subscribe( msg => {
    //       if(msg.userId !== this.user.id){
    //         this.messages.push(msg)
    //       }
    //       this.scrollDown()
    //   });    
  }
  
  ionViewWillEnter(){
    this.scrollDown()
  }

  sendMsg() {
    // if (this.textBox.trim().length > 0) {
    //   console.log("object");
    //   this.chatService.sendMessage({
    //     groupId: this.group.id,
    //     userId: this.user.id,
    //     msg: this.textBox
    //   });
    //   this.messages.push({
    //     from: `${this.user.name} ${this.user.lastname}`,
    //     photo: this.user.photo,
    //     subject: this.textBox,
    //     date: new Date(),
    //     userId: this.user.id
    //   });
    //   this.textBox = '';
    //   this.scrollDown()
    // }
  }

  scrollDown() {
    setTimeout(() => {
      this.content.scrollToBottom(50)
    }, 50);
  }

}
