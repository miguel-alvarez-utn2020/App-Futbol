import { Group } from './Group';
import { Notification } from './Notification';

export interface UserShared {
  name: string;
  lastname: string;
  photo: string;
  id: string;
}

export interface CreateUser {
  name: string;
  lastname: string;
  photo: string;
  email: string;
  password: string;
  age: number;
}

export interface User extends CreateUser {
  id: string;
  groups: Group[];
  notifications: Notification[];
}

export interface PayloadUser {
  email: string;
  id: string;
  isAdminInGroups: string[];
}

export interface UserActions {
  createGroup: () => Group;
  inviteGroup: () => Group;
  joinGroup: () => Group;
}
