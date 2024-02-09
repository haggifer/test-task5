import AudioFileOutlinedIcon from '@mui/icons-material/AudioFileOutlined';
import FolderIcon from '@mui/icons-material/Folder';
import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import TextFieldsOutlinedIcon from '@mui/icons-material/TextFieldsOutlined';
import { Box, Typography } from '@mui/material';
import React, { ReactElement, useMemo } from 'react';
import { useFileStore } from 'stores/fileStore';
import { FileTypes, fileTypes } from 'utils/fileTypes';

interface IProps {
  id: number;
  name: string;
  type: 'folder' | 'file';
  level: number;
  empty?: boolean;
}

export default function FileTreeItem({
  id,
  name,
  type,
  level,
  empty,
}: IProps): ReactElement {
  const { active, open, setActive, setOpen } = useFileStore();

  const ItemIcon = useMemo<React.FC>(() => {
    if (type === 'folder') {
      return FolderIcon;
    }

    const nameSplit = name.split('.');

    if (nameSplit.length === 1 || (nameSplit.length === 2 && !nameSplit[0])) {
      return HelpCenterOutlinedIcon;
    }

    const currentExt = name.split('.').slice(-1)[0];

    let result: React.FC | null = null;

    Object.entries(fileTypes).forEach(([section, extensions]) => {
      if (extensions.includes(currentExt)) {
        switch (section as keyof FileTypes) {
          case 'image':
            result = ImageOutlinedIcon;
            break;
          case 'video':
            result = MovieCreationOutlinedIcon;
            break;
          case 'audio':
            result = AudioFileOutlinedIcon;
            break;
          case 'text':
            result = TextFieldsOutlinedIcon;
            break;
        }
      }
    });

    return result || HelpCenterOutlinedIcon;
  }, [name, type]);

  const toggleOpen = () => {
    const itemOpenIndex = open.findIndex((listId) => listId === id);

    if (itemOpenIndex !== -1) {
      const result = [...open];

      result.splice(itemOpenIndex, 1);

      setOpen(result);
    } else {
      setOpen([...open, id]);
    }
  };

  return (
    <Box
      onClick={() => setActive(id)}
      sx={(theme) => ({
        display: 'flex',
        alignItems: 'center',
        flexFlow: 'row nowrap',
        py: 2,
        pr: 3,
        pl: 4 * (level + 1),
        cursor: 'pointer',
        ...(active === id
          ? {
              background: theme.palette.primarySpectrum[200],
            }
          : {
              '&:hover': {
                background: theme.palette.primarySpectrum[100],
              },
            }),
      })}
    >
      <Box
        component={ItemIcon}
        sx={(theme) => ({
          mr: 1,
          fontSize: '24px',
          color: theme.palette.primary.main,
        })}
      />
      <Typography
        sx={{
          flexGrow: 1,
          fontSize: '16px',
        }}
      >
        {name}
      </Typography>
      {type === 'folder' && !empty && (
        <NavigateNextIcon
          onClick={toggleOpen}
          sx={(theme) => ({
            transform: open.includes(id) ? 'rotate(90deg)' : undefined,
            fontSize: '25px',
            color: theme.palette.primary.main,
          })}
        />
      )}
    </Box>
  );
}
