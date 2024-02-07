import _ from 'lodash';
import { FileDataList, IFile, IFolder } from 'typescript/entities';

export const getFilteredFiles = (
  data: FileDataList,
  search: string,
): IFile[] => {
  if (!search) {
    return [];
  }

  const result: IFile[] = [];

  data.forEach((item) => {
    if (item.type === 'folder') {
      const files = getFilteredFolderFiles(item, search);

      result.push(...files);
    } else {
      if (
        item.name.toLowerCase().split('.')[0].includes(search.toLowerCase())
      ) {
        result.push(item);
      }
    }
  });

  return _.sortBy(result, ['name']);
};

export const getFilteredFolderFiles = (
  folder: IFolder,
  search: string,
): IFile[] => {
  if (!search) {
    return [];
  }

  const subFiles = folder.folders
    ? folder.folders.map((subFolder) =>
      getFilteredFolderFiles(subFolder, search),
    )
    : [];

  const files = folder.files
    ? folder.files.filter((file) =>
      file.name.toLowerCase().split('.')[0].includes(search.toLowerCase()),
    )
    : [];

  return [...subFiles.flat(2), ...files];
};

export const getFilteredData = (
  data: FileDataList,
  search: string,
): FileDataList | null => {
  if (!search) {
    return data;
  }

  return _.compact(
    data.map((item) => {
      if (item.type === 'file') {
        return item.name
          .toLowerCase()
          .split('.')[0]
          .includes(search.toLowerCase())
          ? item
          : null;
      } else {
        return getFilteredFolder(item, search);
      }
    }),
  );
};

export const getFilteredFolder = (
  folder: IFolder,
  search: string,
): IFolder | null => {
  const filteredFolders = folder.folders
    ? folder.folders.map((subFolder) => getFilteredFolder(subFolder, search))
    : null;

  const filteredFiles = folder.files
    ? folder.files.filter((file) =>
      file.name.toLowerCase().split('.')[0].includes(search.toLowerCase()),
    )
    : null;

  const noFilteredFolders =
    !filteredFolders || !_.compact(filteredFolders).length;

  const noFilteredFiles = !filteredFiles?.length;

  if (noFilteredFolders && noFilteredFiles) {
    return folder.name
      .toLowerCase()
      .split('.')[0]
      .includes(search.toLowerCase())
      ? _.omit(folder, ['folders', 'files'])
      : null;
  } else {
    return {
      ...folder,
      folders: noFilteredFolders ? undefined : _.compact(filteredFolders),
      files: noFilteredFiles ? undefined : filteredFiles,
    };
  }
};
