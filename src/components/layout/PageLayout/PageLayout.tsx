import { MongoAbility } from '@casl/ability';
import { Alert, Box, useMediaQuery, useTheme } from '@mui/material';
import { mockUsersFetcher } from 'api/api';
import CustomProgress from 'components/common/CustomProgress';
import { createContext, ReactElement, useEffect } from 'react';
import { Outlet } from 'react-router';
import { useLocation, useNavigate } from 'react-router-dom';
import { useUserStore } from 'stores/userStore';
import useSWR from 'swr';
import { IUser } from 'typescript/entities';
import defineAbilityFor from 'utils/defineAbility';
import { defaultPublicPath } from '../../../routing/routes/publicRoutes';
import Header from '../Header/Header';

export const AbilityContext = createContext<MongoAbility | null>(null);

export default function PageLayout(): ReactElement {
  const location = useLocation();
  const navigate = useNavigate();

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));

  const { current, setUsers, setCurrent } = useUserStore();

  const { data, error, isLoading } = useSWR<IUser[]>(
    '/users',
    mockUsersFetcher,
    {
      revalidateOnFocus: false,
    },
  );

  useEffect(() => {
    setUsers(data || null);

    if (data?.length) {
      setCurrent(data[0]);
    }
  }, [data]);

  useEffect(() => {
    if (location.pathname === '/') {
      navigate(defaultPublicPath);
    }
  }, [location.pathname]);

  return (
    <>
      <Header/>

      <Box
        component="main"
        sx={() => ({
          display: 'flex',
          justifyContent: 'center',
        })}
      >
        <Box
          sx={(theme) => ({
            width: '100%',
            maxWidth: theme.extra.maxContentWidth,
            height: `calc(100vh - ${theme.extra.headerHeight}px)`,
            marginLeft: 'auto',
            marginRight: 'auto',
            ...(isXs
              ? {
                padding: '15px',
              }
              : {
                padding: '15px 20px',
              }),
          })}
        >
          {error && !isLoading ? (
            <Alert severity="error">Fetching users error</Alert>
          ) : isLoading ? (
            <CustomProgress type="page"/>
          ) : (
            <AbilityContext.Provider value={defineAbilityFor(current)}>
              <Outlet/>
            </AbilityContext.Provider>
          )}
        </Box>
      </Box>
    </>
  );
}
