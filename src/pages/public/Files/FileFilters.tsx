import { Box, TextField } from "@mui/material";
import { CommonSelect } from "components/common/CommonSelect";
import { useFormik } from 'formik';
import { ReactElement, useEffect, useState } from "react";
import { IFileStore, useFileStore } from "stores/fileStore";
import { ISelectOption } from "typescript/common";
import { useDebounce } from "usehooks-ts";
import * as yup from 'yup';

interface IProps {
  disabled?: boolean,
}

interface IFiltersValues {
  search: string,
  searchType: ISelectOption<IFileStore['search']['type']>,
}

export default function FileFilters({ disabled }: IProps): ReactElement {
  const { search, setSearch } = useFileStore()

  const [searchTypeOptions] = useState<ISelectOption<IFileStore['search']['type']>[]>([
    {
      label: 'By structure',
      value: 'byStructure',
    },
    {
      label: 'By files',
      value: 'byFiles',
    },
  ])

  const [initFiltersValues] = useState<IFiltersValues>({
    search: '',
    searchType: searchTypeOptions[0],
  })

  const [validationSchema] = useState(yup.object({}))

  const {
    values,
    handleChange,
    setFieldValue,
  } =
    useFormik({
      validationSchema: validationSchema,
      onSubmit: () => {
      },
      initialValues: initFiltersValues,
      enableReinitialize: true,
    });

  const debouncedSearchValue = useDebounce<string>(values.search, 400)

  useEffect(() => {    
    setFieldValue('search', search.value)
  }, [search.value])

  useEffect(() => {
    setFieldValue('searchType', searchTypeOptions.find(option => option.value === search.type))
  }, [search.type])

  useEffect(() => {
    setSearch({
      ...search,
      value: debouncedSearchValue,
    })
  }, [debouncedSearchValue])

  useEffect(() => {
    setSearch({
      ...search,
      type: values.searchType.value,
    })
  }, [values.searchType])

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      mb: 3,
      '> *:not(:last-child)': {
        mr: 2,
      }
    }}>
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
      
      <CommonSelect<string, false>
        name="type"
        value={values.searchType}
        isDisabled={disabled}
        onChange={newValue => setFieldValue('searchType', newValue)}
        options={searchTypeOptions}
        styles={{
          control: {
            minHeight: '56px',
          },
          singleValue: {
            textTransform: 'capitalize',
          },
          option: {
            textTransform: 'capitalize',
          },
        }}
      />
    </Box>
  )
}