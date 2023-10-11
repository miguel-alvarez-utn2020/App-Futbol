export interface Message {
  from: string;
  photo: string;
  subject: string;
  date: Date;
  userId: string;
}

export interface Channel {
  id: string;
  messages: Message[];
}
