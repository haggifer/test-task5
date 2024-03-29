import RefreshIcon from '@mui/icons-material/Refresh';
import { Alert, Box, Divider, IconButton, Typography } from '@mui/material';
import { ISerializableError, mockFilesFetcher } from 'api/api';
import {
  CommonSelect,
  defaultNumberSelectOption,
  ISelectOption,
} from 'components/common/CommonSelect/CommonSelect';
import _ from 'lodash';
import FileTree from 'pages/public/Files/FileTree';
import { ReactElement, useEffect, useMemo, useState } from 'react';
import { useFileStore } from 'stores/fileStore';
import { useUserStore } from 'stores/userStore';
import useSWR, { useSWRConfig } from 'swr';
import { FileData } from 'typescript/entities';
import FileFilters from './FileFilters';
import { getFilteredFiles } from '../../../utils/helpers/files';
import CustomProgress from '../../../components/common/CustomProgress/CustomProgress';

export default function Home(): ReactElement {
  const { data, search, setData, setActive, setOpen } = useFileStore();
  const { users, current, setCurrent } = useUserStore();

  const dataToView = useMemo<FileData | null>(() => {
    if (!data || !search.value) {
      return data;
    }

    return {
      ...data,
      data: getFilteredFiles(data.data, search.value),
      display: null,
    };
  }, [data, search]);

  const userOptions = useMemo<ISelectOption<number>[]>(() => {
    return !users
      ? [defaultNumberSelectOption]
      : users.map((user) => ({
          label: `${user.name} (${_.capitalize(user.role)})`,
          value: user.id,
        }));
  }, [users]);

  const {
    data: apiData,
    error,
    isLoading,
  } = useSWR<FileData>('/files', mockFilesFetcher, {
    revalidateOnFocus: false,
  });

  const [swrLoading, setSwrLoading] = useState<boolean>(false);

  const { mutate } = useSWRConfig();

  useEffect(() => {
    setData(apiData || null);

    setActive(null);
    setOpen([]);
  }, [apiData]);

  useEffect(() => {
    setSwrLoading(isLoading);
  }, [isLoading]);

  const refetchData = async () => {
    setSwrLoading(true);

    await mutate('/files');

    setSwrLoading(false);
  };

  return (
    <>
      <Typography
        variant="body2"
        sx={{
          mb: 1,
        }}
      >
        Current user:
      </Typography>
      <CommonSelect<number, false>
        name="type"
        value={userOptions.find((option) => option.value === current?.id)}
        onChange={(newValue) =>
          setCurrent(users?.find((user) => user.id === newValue?.value) || null)
        }
        options={userOptions}
        styles={{
          control: {
            maxWidth: '300px',
            minHeight: '56px',
          },
          menu: {
            maxWidth: '300px',
          },
        }}
      />

      <Divider
        sx={{
          my: 3,
        }}
      />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <FileFilters disabled={swrLoading} />

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {dataToView && swrLoading && (
            <CustomProgress type="button" progressProps={{ size: 17 }} />
          )}
          <IconButton onClick={refetchData} sx={{ ml: 2 }} title="Refresh data">
            <RefreshIcon />
          </IconButton>
        </Box>
      </Box>

      {error ? (
        <Alert severity="error">{(error as ISerializableError).message}</Alert>
      ) : !dataToView && swrLoading ? (
        <CustomProgress type="page" />
      ) : !dataToView?.data.length ? (
        <Typography
          variant="body1"
          sx={{
            fontWeight: 'bold',
          }}
        >
          Nothing found
        </Typography>
      ) : (
        <FileTree data={dataToView} />
      )}
    </>
  );
}
