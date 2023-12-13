import { FileDataType, IUser } from "typescript/entities";

export const localUsers: IUser[] = [
  {
    id: Math.round(Math.random() * 10**8),
    name: 'Admin 1',
    role: 'admin',
  },
  {
    id: Math.round(Math.random() * 10**8),
    name: 'Admin 2',
    role: 'admin',
  },
  {
    id: Math.round(Math.random() * 10**8),
    name: 'User 1',
    role: 'user',
  },
  {
    id: Math.round(Math.random() * 10**8),
    name: 'User 2',
    role: 'user',
  },
]

export const localFileData: FileDataType = [
  {
    id: Math.round(Math.random() * 10**8),
    type: 'folder',
    name: 'admin',
    access: 'admin',
    folders: [
      {
        id: Math.round(Math.random() * 10**8),
        type: 'folder',
        name: 'adminSub',
        folders: [
          {
            id: Math.round(Math.random() * 10**8),
            type: 'folder',
            name: 'adminSubSub',
            folders: [
              {
                id: Math.round(Math.random() * 10**8),
                type: 'folder',
                name: 'adminSubSubSub',
                folders: [
                  {
                    id: Math.round(Math.random() * 10**8),
                    type: 'folder',
                    name: 'adminSubSubSubSub',
                  },
                ],
              },
            ],
          },
        ],
        files: [
          {
            id: Math.round(Math.random() * 10**8),
            type: 'file',
            name: 'admin.jpg',
          },
          {
            id: Math.round(Math.random() * 10**8),
            type: 'file',
            name: 'admin.avi',
          },
          {
            id: Math.round(Math.random() * 10**8),
            type: 'file',
            name: 'admin.mp3',
          },
          {
            id: Math.round(Math.random() * 10**8),
            type: 'file',
            name: 'admin.txt',
          },
        ],
      },
    ]
  },
  {
    id: Math.round(Math.random() * 10**8),
    type: 'folder',
    name: 'public',
    files: [
      {
        id: Math.round(Math.random() * 10**8),
        type: 'file',
        name: 'publicFile',
      },
      {
        id: Math.round(Math.random() * 10**8),
        type: 'file',
        name: 'adminFile',
        access: 'admin',
      },
    ],
  },
  {
    id: Math.round(Math.random() * 10**8),
    name: 'empty folder',
    type: 'folder',
    folders: [],
    files: [],
  },
  {
    id: Math.round(Math.random() * 10**8),
    type: 'file',
    name: '.txt',
    access: 'admin',
  },
  {
    id: Math.round(Math.random() * 10**8),
    type: 'file',
    name: 'common.jpg',
  },
  {
    id: Math.round(Math.random() * 10**8),
    type: 'file',
    name: 'common.jpg',
  },
  {
    id: Math.round(Math.random() * 10**8),
    type: 'file',
    name: 'common.avi',
  },
  {
    id: Math.round(Math.random() * 10**8),
    type: 'file',
    name: 'common.mp3',
  },
  {
    id: Math.round(Math.random() * 10**8),
    type: 'file',
    name: 'common.txt',
  },
]