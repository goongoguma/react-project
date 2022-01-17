import React from 'react';
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from 'react-query';
import axios from 'axios';
import NavItemView from './navItem.view';

const NavItemContainer = () => {
  const { isLoading, error, data } = useQuery('sideNav', () => axios.get('http://localhost:9000/gym'));

  return <NavItemView data={data?.data} />;
};

export default NavItemContainer;
