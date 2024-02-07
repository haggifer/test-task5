import { FileData, IFolder } from 'typescript/entities';
// import { getFilteredData, getFilteredFiles, getFilteredFolder, getFilteredFolderFiles, } from './files';
//
// const mockData: FileData = [
//   {
//     id: Math.round(Math.random() * 10 ** 8),
//     type: 'folder',
//     name: 'topFolder',
//   },
//   {
//     id: Math.round(Math.random() * 10 ** 8),
//     type: 'folder',
//     name: 'topFolder2',
//   },
//   { id: Math.round(Math.random() * 10 ** 8), type: 'file', name: 'topFile1' },
//   { id: Math.round(Math.random() * 10 ** 8), type: 'file', name: 'topFile2' },
//   {
//     id: Math.round(Math.random() * 10 ** 8),
//     type: 'folder',
//     name: 'topFolder3',
//     folders: [
//       {
//         id: Math.round(Math.random() * 10 ** 8),
//         type: 'folder',
//         name: 'subFolder1',
//       },
//       {
//         id: Math.round(Math.random() * 10 ** 8),
//         type: 'folder',
//         name: 'subFolder2',
//         folders: [
//           {
//             id: Math.round(Math.random() * 10 ** 8),
//             type: 'folder',
//             name: 'subSubFolder1',
//           },
//           {
//             id: Math.round(Math.random() * 10 ** 8),
//             type: 'folder',
//             name: 'subSubFolder2',
//           },
//         ],
//       },
//       {
//         id: Math.round(Math.random() * 10 ** 8),
//         type: 'folder',
//         name: 'subFolder3',
//         files: [
//           {
//             id: Math.round(Math.random() * 10 ** 8),
//             type: 'file',
//             name: 'subSubFile1',
//           },
//           {
//             id: Math.round(Math.random() * 10 ** 8),
//             type: 'file',
//             name: 'subSubFile2',
//           },
//         ],
//       },
//     ],
//     files: [
//       {
//         id: Math.round(Math.random() * 10 ** 8),
//         type: 'file',
//         name: 'subFile1',
//       },
//     ],
//   },
// ];
//
// const addArrayAssertions = (currentArr: unknown[], testedArr: unknown[]) => {
//   expect(currentArr).toHaveLength(testedArr.length);
//
//   currentArr.forEach((item) => expect(testedArr).toContainEqual(item));
// };
//
// describe('getFilteredFolderFiles', () => {
//   const mockFolder = mockData[4] as IFolder;
//
//   test('returns an empty array if search is not provided', () => {
//     const result = getFilteredFolderFiles(mockFolder, '');
//
//     expect(result).toEqual([]);
//   });
//
//   test('gets filtered folder files based on the search string ignoring case', () => {
//     const result = getFilteredFolderFiles(mockFolder, 'SUBSUB');
//
//     const expectedResult = [
//       { id: expect.any(Number), type: 'file', name: 'subSubFile1' },
//       { id: expect.any(Number), type: 'file', name: 'subSubFile2' },
//     ];
//
//     addArrayAssertions(expectedResult, result);
//   });
// });
//
// describe('getFilteredFiles', () => {
//   test('returns an empty array if search is not provided', () => {
//     const result = getFilteredFiles(mockData, '');
//
//     expect(result).toEqual([]);
//   });
//
//   test('gets filtered files based on the search string ignoring case', () => {
//     const result = getFilteredFiles(mockData, 'FILE');
//
//     const expectedResult = [
//       { id: expect.any(Number), type: 'file', name: 'topFile1' },
//       { id: expect.any(Number), type: 'file', name: 'topFile2' },
//       { id: expect.any(Number), type: 'file', name: 'subFile1' },
//       { id: expect.any(Number), type: 'file', name: 'subSubFile1' },
//       { id: expect.any(Number), type: 'file', name: 'subSubFile2' },
//     ];
//
//     addArrayAssertions(expectedResult, result);
//   });
// });
//
// describe('getFilteredFolder', () => {
//   const mockFolder = mockData[4] as IFolder;
//
//   test('returns null if both folders and files are not filtered', () => {
//     const result = getFilteredFolder(mockFolder, 'unknown');
//     expect(result).toBeNull();
//   });
//
//   test('gets filtered folder based on the search string ignoring case', () => {
//     const result = getFilteredFolder(mockFolder, 'SUBFILE');
//
//     const expectedResult = {
//       id: expect.any(Number),
//       type: 'folder',
//       name: 'topFolder3',
//       folders: [
//         {
//           id: expect.any(Number),
//           type: 'folder',
//           name: 'subFolder3',
//           files: [
//             { id: expect.any(Number), type: 'file', name: 'subSubFile1' },
//             { id: expect.any(Number), type: 'file', name: 'subSubFile2' },
//           ],
//         },
//       ],
//       files: [{ id: expect.any(Number), type: 'file', name: 'subFile1' }],
//     };
//
//     expect(result).toEqual(expectedResult);
//   });
// });
//
// describe('getFilteredData', () => {
//   test('returns the original data if search is not provided', () => {
//     const result = getFilteredData(mockData, '');
//     expect(result).toEqual(mockData);
//   });
//
//   test('gets filtered data based on the search string ignoring case', () => {
//     const result = getFilteredData(mockData, 'TOP');
//
//     const expectedResult = [
//       { id: expect.any(Number), type: 'folder', name: 'topFolder' },
//       { id: expect.any(Number), type: 'folder', name: 'topFolder2' },
//       { id: expect.any(Number), type: 'file', name: 'topFile1' },
//       { id: expect.any(Number), type: 'file', name: 'topFile2' },
//       {
//         id: expect.any(Number),
//         type: 'folder',
//         name: 'topFolder3',
//       },
//     ];
//
//     expect(result).toEqual(expectedResult);
//   });
// });
