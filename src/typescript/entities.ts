export interface IEntity {
  id: number;
  name: string;
  access?: 'all' | 'admin';
}

export interface IFile extends IEntity {
  type: 'file';
}

export interface IFolder extends IEntity {
  type: 'folder';
  folders?: number[];
  files?: number[];
}

export type FileDataList = (IFolder | IFile)[];

export interface IUser {
  id: number;
  name: string;
  role: 'user' | 'admin';
}
