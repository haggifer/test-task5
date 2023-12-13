export interface IFile {
  id: number,
  type: 'file',
  name: string,
  access?: 'all' | 'admin',
}

export interface IFolder {
  id: number,
  type: 'folder',
  name: string,
  folders?: IFolder[],
  files?: IFile[],
  access?: 'all' | 'admin',
}

export type FileDataType = (IFolder | IFile)[]

export interface IUser {
  id: number,
  name: string,
  role: 'user' | 'admin',
}