import { MongoAbility } from '@casl/ability';
import { Box, Typography } from '@mui/material';
import { AbilityContext } from 'components/layout/PageLayout/PageLayout';
import { ReactElement, useContext, useMemo } from 'react';
import { useFileStore } from 'stores/fileStore';
import { FileData, IFile, IFolder } from 'typescript/entities';
import FileTreeItem from './FileTreeItem';
import { getSortedEntities } from '../../../utils/helpers/files';

interface IProps {
  data: FileData;
}

export default function FileTree({ data }: IProps): ReactElement {
  const { open } = useFileStore();

  const ability = useContext(AbilityContext) as MongoAbility;

  const renderFile = (
    file: IFile,
    level: number,
    parentAccess: IFile['access'],
  ) => {
    const fileAccess = file.access || parentAccess;

    if (fileAccess === 'admin' && ability.cannot('read', 'adminData')) {
      return null;
    }

    return (
      <FileTreeItem
        id={file.id}
        name={file.name}
        type="file"
        level={level}
        key={file.id}
      />
    );
  };

  const renderFolder = (
    folder: IFolder,
    level: number,
    parentIds: number[],
    parentAccess: IFolder['access'],
  ) => {
    const folderAccess = folder.access || parentAccess;

    if (folderAccess === 'admin' && ability.cannot('read', 'adminData')) {
      return null;
    }

    return (
      <Box key={folder.id}>
        <FileTreeItem
          id={folder.id}
          name={folder.name}
          type="folder"
          level={level}
          empty={!folder.folders?.length && !folder.files?.length}
        />

        {folder.folders &&
          open.includes(folder.id) &&
          getSortedEntities(data.data, folder.folders).map((folder) => {
            return renderFolder(
              folder as IFolder,
              level + 1,
              [...parentIds, folder.id],
              folder.access || parentAccess,
            );
          })}

        {folder.files &&
          open.includes(folder.id) &&
          getSortedEntities(data.data, folder.files).map((file) => {
            return renderFile(
              file as IFile,
              level + 1,
              file.access || parentAccess,
            );
          })}
      </Box>
    );
  };

  const content = useMemo(() => {
    const sortedEntities = getSortedEntities(data.data, data.display);

    return sortedEntities.map((entity) => {
      return entity && entity.type === 'folder'
        ? renderFolder(entity, 0, [], entity.access)
        : renderFile(entity, 0, entity.access);
    });
  }, [data, open, ability]);

  return !content?.length ? (
    <Typography
      variant="body1"
      sx={{
        fontWeight: 'bold',
      }}
    >
      Nothing found
    </Typography>
  ) : (
    <Box
      sx={(theme) => ({
        borderRadius: '10px',
        background: theme.palette.primarySpectrum[50],
        overflow: 'hidden',
      })}
    >
      {content?.length ? (
        content
      ) : (
        <Typography
          variant="body1"
          sx={{
            fontWeight: 'bold',
          }}
        >
          Nothing found
        </Typography>
      )}
    </Box>
  );
}
