/* eslint-disable */
import React from 'react';
import { useSelector} from 'react-redux';
import Details from '../component/Details';
import picture from '../img/dachshund2.png';
const Dachshund = () => {
  const {animals} = useSelector((state) => state.animal);
  const category5 = animals.filter(animal => animal.breeds.primary === "Plott Hound" || animal.breeds.primary === "Blue Heeler"
  || animal.breeds.primary === "Dachshund" || animal.breeds.primary === "Pomeranian" || animal.breeds.primary === "Domestic Medium Hair" );
  
  return (
  <div>
    <Details picture={picture} animals={category5} title="Dachshund" />
  </div>
);}


export default Dachshund;
