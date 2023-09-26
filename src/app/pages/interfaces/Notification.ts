export interface CreateNotification {
  bg: string;
  icon: string;
  title: string;
  subject: string;
}

export interface Notification extends CreateNotification {
  quantityUsers: number;
  id: string;
}
