import React, { ReactElement } from "react";
import { Box, CircularProgress, SxProps } from "@mui/material";
import { CircularProgressProps } from "@mui/material/CircularProgress/CircularProgress";

interface IProps {
  type: 'page' | 'button',
  containerClassName?: string;
  containerSx?: SxProps;
  progressProps?: CircularProgressProps;
}

export default function CustomProgress({ type, containerClassName, containerSx, progressProps }: IProps): ReactElement {
  return (
    <Box
      className={containerClassName}
      sx={{
        ...(
          type === 'page' ?
          {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          } : {}
        ),
        ...(containerSx || {}),
      }}
    >
      <CircularProgress
        size={type === 'button' ? 16 : undefined}
        {...(progressProps || {})}
      />
    </Box>
  )
}