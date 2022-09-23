import React from 'react';
import styled from 'styled-components';

const Article = styled.article`
  width: 100px;
  background-color: white;
`

const PlantCard = ({article}: {article: any}) => {

  return (
    <Article>
      {article}
    </Article>
  )

};

export default PlantCard
