import React from 'react';
import { useSelector } from 'react-redux';
import Details from '../component/Details';
import picture from '../img/border2.png';

const Border = () => {
  const { animals } = useSelector((state) => state.animal);
  const category2 = animals.filter((animal) => animal.breeds.primary === 'Domestic Short Hair' || animal.breeds.primary === 'Border'
  || animal.breeds.primary === 'German Shorthaired Pointer' || animal.breeds.primary === 'Golden Retriever' || animal.breeds.primary === 'Australian Cattle Dog');

  return (
    <div>
      <Details picture={picture} animals={category2} title="Border" />
    </div>
  );
};

export default Border;
