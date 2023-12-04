import { Injectable, isStandalone } from '@angular/core';
import { Socket } from 'ngx-socket-io';

export const NEW_MESSAGE = 'new_message';
export const EVENT_MESSAGE = 'event_message';
export const EVENT_JOIN = 'event_join';
export const EVENT_LEAVE = 'event_leave';

type SendMessage = {
  groupId: string;
  userId: string;
  msg: string;
}

@Injectable()
export class ChatService {

  constructor(private socket: Socket) {}

  sendMessage(payload: SendMessage) {
    return this.socket.emit(EVENT_MESSAGE, payload);
  }

  joinRoom(room: string): void {
    console.log("room ", room);
    this.socket.emit('event_join', room);
  }

  leaveRoom(room: string): void {
    this.socket.emit('event_leave', room);
  }

  getMessage() {
    return this.socket.fromEvent<any>('new_message');
  }
}