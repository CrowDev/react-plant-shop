import React from 'react';
import PlantCard from '../../components/cards/plant-card';
import styled from 'styled-components';


const Section = styled.section`
  display: grid;
  gap: 10px;
`

const Shop = () => {

  const articles = [1,2,3].map((value: number) => {
    return (
      <PlantCard article={value} />
    )
  })

  return (
    <>
      <Section>
        {articles}
      </Section>
    </>
  )
}

export default Shop;
