import React from 'react';
import { useSelector } from 'react-redux';
import Details from '../component/Details';
import picture from '../img/boxer2.png';

const Boxer = () => {
  const { animals } = useSelector((state) => state.animal);
  const category4 = animals.filter((animal) => animal.breeds.primary === 'Labrador Retriever' || animal.breeds.primary === 'German Shepherd Dog'
  || animal.breeds.primary === 'New Zealand' || animal.breeds.primary === 'Chihuahua' || animal.breeds.primary === 'Boxer' || animal.breeds.primary === 'Shih Tzu');

  return (
    <div>
      <Details picture={picture} animals={category4} title="Boxer" />
    </div>
  );
};

export default Boxer;
