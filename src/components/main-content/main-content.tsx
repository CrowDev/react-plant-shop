import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from 'react-router-dom';
import styled from 'styled-components';
import Shop from '../../pages/shop/shop';
import TitleCard from '../title-card/title-card';

const router = createBrowserRouter([
  {
    path: '/',
    element: Shop()
  }
])

const Main = styled.main`
  background-color: #EBEBEB;
  padding: 50px 70px;
  display: flex;
  flex-direction: column;
`;

const MainContent = () => {
  return (
    <Main>
      <TitleCard title={'Plants'} />
      <RouterProvider router={router} />
    </Main>
  )
}

export default MainContent;
