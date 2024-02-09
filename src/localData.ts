import { FileData, IUser } from 'typescript/entities';

export const localUsers: IUser[] = [
  {
    id: Math.round(Math.random() * 10 ** 8),
    name: 'Admin 1',
    role: 'admin',
  },
  {
    id: Math.round(Math.random() * 10 ** 8),
    name: 'Admin 2',
    role: 'admin',
  },
  {
    id: Math.round(Math.random() * 10 ** 8),
    name: 'User 1',
    role: 'user',
  },
  {
    id: Math.round(Math.random() * 10 ** 8),
    name: 'User 2',
    role: 'user',
  },
];

export const localFileData: FileData = {
  data: [
    {
      id: 1,
      name: 'empty folder',
      type: 'folder',
      folders: [],
      files: [],
    },
    {
      id: 2,
      type: 'file',
      name: '.txt',
      access: 'admin',
    },
    {
      id: 3,
      type: 'file',
      name: 'common.jpg',
    },
    {
      id: 4,
      type: 'file',
      name: 'common.avi',
    },
    {
      id: 5,
      type: 'file',
      name: 'common.mp3',
    },
    {
      id: 6,
      type: 'file',
      name: 'common.txt',
    },
    {
      id: 7,
      type: 'folder',
      name: 'adminSubSubSubSub',
    },
    {
      id: 8,
      type: 'folder',
      name: 'adminSubSubSub',
      folders: [7],
    },
    {
      id: 9,
      type: 'folder',
      name: 'adminSubSub',
      folders: [8],
    },
    {
      id: 10,
      type: 'file',
      name: 'admin.jpg',
      access: 'admin',
    },
    {
      id: 11,
      type: 'file',
      name: 'admin.avi',
      access: 'admin',
    },
    {
      id: 12,
      type: 'file',
      name: 'admin.mp3',
      access: 'admin',
    },
    {
      id: 13,
      type: 'file',
      name: 'admin.txt',
      access: 'admin',
    },
    {
      id: 14,
      type: 'folder',
      name: 'adminSub',
      folders: [9],
      files: [10, 11, 12, 13],
    },
    {
      id: 15,
      type: 'folder',
      name: 'admin',
      access: 'admin',
      folders: [14],
    },
    {
      id: 16,
      type: 'file',
      name: 'publicFile',
    },
    {
      id: 17,
      type: 'file',
      name: 'adminFile',
      access: 'admin',
    },
    {
      id: 18,
      type: 'folder',
      name: 'public',
      files: [16, 17],
    },
  ],
  display: [1, 2, 3, 4, 5, 6, 15, 18],
};
