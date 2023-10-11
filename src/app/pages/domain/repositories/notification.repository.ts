import { CreateNotification } from "../models/Notification";


export interface NotificationRepository {
    create: ( notification: CreateNotification ) => Promise<Notification>,
    read: ( notificationId: string ) => Promise<Notification>
}