import { MongoAbility } from "@casl/ability";
import { Box, Typography } from "@mui/material";
import { ReactElement, useContext, useMemo } from "react";
import { useFileStore } from "stores/fileStore";
import { FileDataType, IFile, IFolder } from "typescript/entities";
import FileTreeItem from "./FileTreeItem";
import { AbilityContext } from "components/layout/PageLayout/PageLayout";
import _ from "lodash";

interface IProps {
  data: FileDataType,
}

export default function FileTree({ data }: IProps): ReactElement {
  const { open } = useFileStore()

  const ability = useContext(AbilityContext) as MongoAbility
  
  const renderFile = (file: IFile, level: number, parentIds: number[], parentAccess: IFile['access']) => {
    const fileAccess = file.access || parentAccess

    if (fileAccess && fileAccess === 'admin' && ability.cannot('read', 'adminData')) {
      return null
    }

    return (
      <FileTreeItem 
        id={file.id}
        name={file.name} 
        type="file" 
        level={level}
        key={file.id}
      />
    )
  }
  
  const renderFolder = (folder: IFolder, level: number, parentIds: number[], parentAccess: IFolder['access']) => {
    const folderAccess = folder.access || parentAccess

    if (folderAccess && folderAccess === 'admin' && ability.cannot('read', 'adminData')) {
      return null
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

        {
          folder.folders && open.includes(folder.id) &&
          folder.folders.map(folder => renderFolder(folder, level + 1, [...parentIds, folder.id], folder.access || parentAccess))
        }

        {
          folder.files && open.includes(folder.id) &&
          folder.files.map(file => renderFile(file, level + 1, [...parentIds, folder.id], folder.access || parentAccess))
        }
      </Box>
    )
  }

  const content = useMemo(() => _.compact(data?.map(item => 
    item.type === 'folder' ? 
      renderFolder(item, 0, [], item.access) : 
      renderFile(item, 0, [], item.access)
  )), [data, open, ability])

  return (
    !content?.length ?
      <Typography variant="body1" sx={{
        fontWeight: 'bold',
      }}>Nothing found</Typography> :
      <Box sx={theme => ({
        borderRadius: '10px',
        background: theme.palette.primarySpectrum[50],
        overflow: 'hidden',
      })}>
        {
          content?.length ? 
            content : 
            <Typography variant="body1" sx={{
              fontWeight: 'bold',
            }}>Nothing found</Typography>
        }
      </Box>
  )
}