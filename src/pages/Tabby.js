/* eslint-disable */
import React from 'react';
import { useSelector} from 'react-redux';
import Details from '../component/Details';
import picture from '../img/tabby2.png';

const Tabby = () => {
  const {animals} = useSelector((state) => state.animal);
  const category1 = animals.filter(animal => animal.breeds.primary === "Pug" || animal.breeds.primary === "Terrier" 
  || animal.breeds.primary === "Tabby" || animal.breeds.primary === "Spaniel" || animal.breeds.primary === "Domestic Long Hair");
 
  return (
  <div>
    <Details picture={picture} animals={category1} title="Tabby" />
  </div>
);}

export default Tabby;
