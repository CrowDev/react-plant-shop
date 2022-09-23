import React from 'react';
import styled from 'styled-components';

const Searcher = styled.input`
  border-color: white;
  border-radius: 20px;
  width: 400px;
  height: 30px;
  border-width: 0;
  padding: 3px 15px;
  &:focus {
    border-color: white;
    outline-style: none;
  }
`;

const SearcherComponent = () => {
  return (
    <>
      <Searcher></Searcher>
    </>
  )
}

export default SearcherComponent;
