import { FileDataList } from "typescript/entities";
import { create } from "zustand";

export interface IFileStore {
  data: FileDataList | null,
  active: number | null,
  open: number[],
  search: {
    value: string,
    type: 'byStructure' | 'byFiles'
  },
  setData: (newData: IFileStore['data']) => void,
  setActive: (newValue: IFileStore['active']) => void,
  setOpen: (newValue: IFileStore['open']) => void,
  setSearch: (newValue: IFileStore['search']) => void,
}

export const useFileStore = create<IFileStore>((set) => ({
  data: null,
  active: null,
  open: [],
  search: {
    value: '',
    type: 'byStructure',
  },
  setData: newData => set(() => ({ data: newData })),
  setActive: newValue => set(() => ({ active: newValue })),
  setOpen: newValue => set(() => ({ open: newValue })),
  setSearch: newValue => set(() => ({ search: newValue })),
}))