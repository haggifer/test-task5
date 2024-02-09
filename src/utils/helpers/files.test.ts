import { FileData } from 'typescript/entities';
import { getFilteredFiles, getSortedEntities } from './files';

const mockData: FileData = {
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

describe('getFilteredFiles', () => {
  test('gets filtered files based on the search string ignoring case', () => {
    const result = getFilteredFiles(mockData.data, 'FILE');

    const expectedResult = [
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
    ];

    expect(result).toEqual(expectedResult);
  });
});

describe('getSortedEntities', () => {
  test("returns full data if 'ids' argument is not provided", () => {
    const result = getSortedEntities(mockData.data, null);

    expect(result.length).toEqual(mockData.data.length);
  });

  test('properly sorts entities', () => {
    const result = getSortedEntities(mockData.data, [1, 3, 4, 7]);

    const expectedResult = [
      {
        id: 7,
        type: 'folder',
        name: 'adminSubSubSubSub',
      },
      {
        id: 1,
        type: 'folder',
        name: 'empty folder',
        folders: [],
        files: [],
      },
      {
        id: 4,
        type: 'file',
        name: 'common.avi',
      },
      {
        id: 3,
        type: 'file',
        name: 'common.jpg',
      },
    ];

    expect(result).toEqual(expectedResult);
  });
});
