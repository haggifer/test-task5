import React, { ReactElement } from 'react';
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { defaultPublicPath } from "../../../routing/routes/publicRoutes";
import FolderCopyIcon from '@mui/icons-material/FolderCopy';

export default function Header(): ReactElement {
  const theme = useTheme()
  const isXs = useMediaQuery(theme.breakpoints.only('xs'))

  return (
    <Box component="header" sx={theme => ({
      display: 'flex',
      justifyContent: 'center',
      background: theme.palette.accent[50],
    })}>
      <Box sx={theme => ({
        display: 'flex',
        justifyContent: isXs ? 'center' : undefined,
        width: '100%',
        maxWidth: theme.extra.maxContentWidth,
        height: theme.extra.headerHeight,
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '15px 20px',
      })}>
        <Box
          component={Link}
          to={defaultPublicPath}
          sx={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
          }}
        >
          <FolderCopyIcon sx={{
            mr: 3,
            fontSize: '40px',
          }}/>
          <Typography variant="subtitle1" sx={{
            fontSize: '30px',
          }}>Tree View</Typography>
        </Box>
      </Box>
    </Box>
  )
}
