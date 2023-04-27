/* eslint-disable */
import React from 'react';
import { useSelector} from 'react-redux';
import Details from '../component/Details';
import picture from '../img/beagle2.png';

const Beagle = () => {
  const {animals} = useSelector((state) => state.animal);
  const category3 = animals.filter(animal => animal.breeds.primary === "Beagle" || animal.breeds.primary === "Old English Sheepdog" || animal.breeds.primary === "Mixed Breed"
  || animal.breeds.primary === "Doberman Pinscher" || animal.breeds.primary === "Hound" || animal.breeds.primary === "Border Collie" );
  
  return (
  <div>
    <Details picture={picture} animals={category3} title="Beagle" />
  </div>
);}


export default Beagle;
