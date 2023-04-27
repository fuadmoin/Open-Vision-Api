/* eslint-disable */
import React from 'react';
import { useSelector} from 'react-redux';
import Details from '../component/Details';
import picture from '../img/pets5.png';

const AllBreeds = () =>{
  const {animals} = useSelector((state) => state.animal);

  return (
  <div>
    <Details picture={picture} animals={animals} title="All Breeds" />
  </div>
);}

export default AllBreeds;
