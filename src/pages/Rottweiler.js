import React from 'react';
import { useSelector } from 'react-redux';
import Details from '../component/Details';
import picture from '../img/rottweiler2.png';

const Rottweiler = () => {
  const { animals } = useSelector((state) => state.animal);
  const category6 = animals.filter((animal) => animal.breeds.primary === 'Miniature Schnauzer' || animal.breeds.primary === 'Whippet'
  || animal.breeds.primary === 'Rottweiler' || animal.breeds.primary === 'Persian' || animal.breeds.primary === 'Pit Bull Terrier' || animal.breeds.primary === 'Yorkshire Terrier');

  return (
    <div>
      <Details picture={picture} animals={category6} title="Rottweiler" />
    </div>
  );
};

export default Rottweiler;
