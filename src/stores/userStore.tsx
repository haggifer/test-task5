import { IUser } from 'typescript/entities';
import { create } from 'zustand';

export interface IUserStore {
  users: IUser[] | null;
  current: IUser | null;
  setUsers: (newData: IUserStore['users']) => void;
  setCurrent: (newData: IUserStore['current']) => void;
}

export const useUserStore = create<IUserStore>((set) => ({
  users: null,
  current: null,
  setUsers: (newList) => set(() => ({ users: newList })),
  setCurrent: (newUser) => set(() => ({ current: newUser })),
}));
