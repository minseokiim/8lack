export interface IChat {
  id: string;
  name: string;
  users: User[]; // 속한 유저 id
  isPrivate: boolean;
  latestMessage: Message | null;
  updatedAt: Date;
}

export interface User {
  id: string;
  name: string;
  picture: string;
}

export type IChatRoom = Pick<IChat, 'id' | 'name' | 'isPrivate' | 'latestMessage' | 'updatedAt'> & {users: IUserInfo[]};
export type IUserInfo = Omit<User, 'name'> & {username: string};

export interface Message {
  id: string;
  text: string;
  userId: string;
  createdAt: Date;
}

export interface PrevMessage {
  messages: Message[];
}

export interface UserID {
  users: string[];
}

export interface NewUser {
  users: string[]; // 참여자들 id
  joiners: string[]; // 새로운 참여자 id
}

export interface leaveUser {
  users: string[]; // 참여자들 id
  leaver: string; // 나간 사용자 id
}

export interface Props {
  key: string;
  data: IChat;
}
