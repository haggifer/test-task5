export type EntityAccess = 'admin'

export interface IEntity {
  id: number;
  name: string;
  access?: EntityAccess;
}

export interface IFile extends IEntity {
  type: 'file';
}

export interface IFolder extends IEntity {
  type: 'folder';
  folders?: number[];
  files?: number[];
}

export type FileData = {
  data: (IFolder | IFile)[],
  display: number[] | null,
};

export interface IUser {
  id: number;
  name: string;
  role: 'user' | 'admin';
}
