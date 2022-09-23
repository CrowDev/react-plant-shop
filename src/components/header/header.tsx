import React from 'react';
import styled from 'styled-components';
import SearcherComponent from './searcher';

const Header = styled.header`
  width: 100%;
  height: 80px;
  background-color: #0B7A75;
  display: flex;
  align-items: center;
`;



const HeaderApp = () => {
  return (
    <Header>
      <div>
        <SearcherComponent></SearcherComponent>
      </div>

    </Header>
  )
}

export default HeaderApp;
