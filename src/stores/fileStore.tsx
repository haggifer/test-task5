import { FileDataList } from 'typescript/entities';
import { create } from 'zustand';

export interface IFileStore {
  data: FileDataList | null;
  setData: (newData: IFileStore['data']) => void;
  active: number | null;
  setActive: (newValue: IFileStore['active']) => void;
  open: number[];
  setOpen: (newValue: IFileStore['open']) => void;
  search: {
    value: string;
    type: 'byStructure' | 'byFiles';
  };
  setSearch: (newValue: IFileStore['search']) => void;
}

export const useFileStore = create<IFileStore>((set) => ({
  data: null,
  active: null,
  open: [],
  search: {
    value: '',
    type: 'byStructure',
  },
  setData: (newData) => set(() => ({ data: newData })),
  setActive: (newValue) => set(() => ({ active: newValue })),
  setOpen: (newValue) => set(() => ({ open: newValue })),
  setSearch: (newValue) => set(() => ({ search: newValue })),
}));
