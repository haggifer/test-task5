import _ from 'lodash';
import { FileData, IFile, IFolder } from 'typescript/entities';

export const getFilteredFiles = (
  data: FileData['data'],
  search: string,
): IFile[] => {
  if (!search) {
    return [];
  }

  const allFiles: IFile[] = data.filter(item => item.type === 'file') as IFile[];
  console.log(allFiles)

  const filteredFiles = allFiles.filter(file => file.name.includes(search))
  console.log(filteredFiles)

  return _.sortBy(filteredFiles, ['name']);
};

export const getSortedEntities = (ids: number[] | null, data: (IFolder | IFile)[]) => {
  const entities = ids ?
    _.compact(ids.map(id => data.find(entity => entity.id === id))) :
    data

  return [
    ..._.sortBy(entities.filter(entity => entity.type === 'folder'), 'name'),
    ..._.sortBy(entities.filter(entity => entity.type === 'file'), 'name'),
  ]
}

// export const getFilteredData = (
//   data: FileData,
//   search: string,
// ): FileData['data'] => {
//   if (!search) {
//     return data;
//   }
//
//
// };
//
// export const getFilteredFolder = (
//   folder: IFolder,
//   search: string,
// ): IFolder | null => {
//   const filteredFolders = folder.folders
//     ? folder.folders.map((subFolder) => getFilteredFolder(subFolder, search))
//     : null;
//
//   const filteredFiles = folder.files
//     ? folder.files.filter((file) =>
//       file.name.toLowerCase().split('.')[0].includes(search.toLowerCase()),
//     )
//     : null;
//
//   const noFilteredFolders =
//     !filteredFolders || !_.compact(filteredFolders).length;
//
//   const noFilteredFiles = !filteredFiles?.length;
//
//   if (noFilteredFolders && noFilteredFiles) {
//     return folder.name
//       .toLowerCase()
//       .split('.')[0]
//       .includes(search.toLowerCase())
//       ? _.omit(folder, ['folders', 'files'])
//       : null;
//   } else {
//     return {
//       ...folder,
//       folders: noFilteredFolders ? undefined : _.compact(filteredFolders),
//       files: noFilteredFiles ? undefined : filteredFiles,
//     };
//   }
// };