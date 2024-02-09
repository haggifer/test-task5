import { Box, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { ReactElement, useEffect, useState } from 'react';
import { useFileStore } from 'stores/fileStore';
import { useDebounce } from 'usehooks-ts';
import * as yup from 'yup';

interface IProps {
  disabled?: boolean;
}

interface IFiltersValues {
  search: string;
}

export default function FileFilters({ disabled }: IProps): ReactElement {
  const { search, setSearch } = useFileStore();

  const [initFiltersValues] = useState<IFiltersValues>({
    search: '',
  });

  const [validationSchema] = useState(yup.object({}));

  const { values, handleChange, setFieldValue } = useFormik({
    validationSchema: validationSchema,
    onSubmit: () => {},
    initialValues: initFiltersValues,
    enableReinitialize: true,
  });

  const debouncedSearchValue = useDebounce<string>(values.search, 400);

  useEffect(() => {
    setFieldValue('search', search.value);
  }, [search.value]);

  useEffect(() => {
    setSearch({
      ...search,
      value: debouncedSearchValue,
    });
  }, [debouncedSearchValue]);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        mb: 3,
        '> *:not(:last-child)': {
          mr: 2,
        },
      }}
    >
      <TextField
        type="text"
        name="search"
        disabled={disabled}
        value={values.search}
        onChange={handleChange}
        autoFocus
        placeholder="Search"
        label="Search"
      />
    </Box>
  );
}
