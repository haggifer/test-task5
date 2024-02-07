import axios from 'axios';
import { localFileData, localUsers } from '../localData';
import { FileData, IUser } from '../typescript/entities';

export interface ISerializableError {
  name: string;
  message: string;
  code: string;
  response: {
    status: string;
    data: string;
  };
}

export const apiProvider = axios.create({
  baseURL: '',
});

apiProvider.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const serializableError: ISerializableError = {
      name: error.name,
      message: error.message,
      code: error.code,
      response: {
        status: error.response.status,
        data: error.response.data,
      },
    };

    return Promise.reject(serializableError);
  },
);

export const filesFetcher = async (url: string) => {
  return apiProvider.get(url).then((res) => res.data);
};

export const mockFilesFetcher = (): Promise<FileData> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(localFileData);
    }, 1000);
  });

export const usersFetcher = async (url: string) => {
  return apiProvider.get(url).then((res) => res.data);
};

export const mockUsersFetcher = (): Promise<IUser[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(localUsers);
    }, 1000);
  });
