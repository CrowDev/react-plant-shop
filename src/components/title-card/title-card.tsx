import React from 'react';
import styled from 'styled-components';

const Article = styled.article`
  width: 400px;
  height: 100px;
  border-radius: 25px;
  background-color: #0B7A75;
  padding: 20px 40px;
  align-self: center;
`
const H1 = styled.h1`
  margin: 0;
  color: white;
`

const TitleCard = ({title}: {title: string}) => {
  return (
    <Article>
      <H1>{title}</H1>
    </Article>
  )
}

export default TitleCard;
