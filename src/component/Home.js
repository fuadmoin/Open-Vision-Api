/* eslint-disable */
import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { fetchAnimals } from '../redux/animals/animalSlice';


const Home = () => {
    const dispatch = useDispatch(); 
    const {animals, loading} = useSelector((state) => state.animal);
    const category1 = animals.filter(animal => animal.breeds.primary === "Pug" || animal.breeds.primary === "Terrier" 
    || animal.breeds.primary === "Tabby" || animal.breeds.primary === "Spaniel" || animal.breeds.primary === "Domestic Long Hair");
    const category2 = animals.filter(animal => animal.breeds.primary === "Domestic Short Hair" || animal.breeds.primary === "Border"
    || animal.breeds.primary === "German Shorthaired Pointer" || animal.breeds.primary === "Golden Retriever" || animal.breeds.primary === "Australian Cattle Dog");
    const category3 = animals.filter(animal => animal.breeds.primary === "Beagle" || animal.breeds.primary === "Old English Sheepdog" || animal.breeds.primary === "Mixed Breed"
    || animal.breeds.primary === "Doberman Pinscher" || animal.breeds.primary === "Hound" || animal.breeds.primary === "Border Collie" );
    const category4 = animals.filter(animal => animal.breeds.primary === "Labrador Retriever" || animal.breeds.primary === "German Shepherd Dog"
    || animal.breeds.primary === "New Zealand" || animal.breeds.primary === "Chihuahua" || animal.breeds.primary === "Boxer" || animal.breeds.primary === "Shih Tzu" );
    const category5 = animals.filter(animal => animal.breeds.primary === "Plott Hound" || animal.breeds.primary === "Blue Heeler"
    || animal.breeds.primary === "Dachshund" || animal.breeds.primary === "Pomeranian" || animal.breeds.primary === "Domestic Medium Hair" );
    const category6 = animals.filter(animal => animal.breeds.primary === "Miniature Schnauzer" || animal.breeds.primary === "Whippet"
    || animal.breeds.primary === "Rottweiler" || animal.breeds.primary === "Persian" || animal.breeds.primary === "Pit Bull Terrier" || animal.breeds.primary === "Yorkshire Terrier");
    useEffect(() => {
        if(!animals.length)
        dispatch(fetchAnimals());
    }, [dispatch, animals]);
const displayStyle = {
    textDecoration: "none",
    color: "black",
};

  return (
    <div>
        <h1>Home</h1>
         {
!loading && animals.length ? (
    <main className="homeContainer">   
   
 <div className="item"> <NavLink style={displayStyle} to={'./allBreeds'}> Animals and Their Breeds  {animals.length}</NavLink> </div>
    <p>Grouped breeds</p>
    <div className="items">      <NavLink style={displayStyle} to={'./tabby'}> <p>Group Tabby {category1.length}</p> </NavLink> </div>
    <div className="items">  <NavLink style={displayStyle} to={'./border'}> <p>Group Border {category2.length}</p> </NavLink> </div>
    <div className="items">  <NavLink style={displayStyle} to={'./beagle'}>  <p>Group Beagle {category3.length}</p> </NavLink> </div>
    <div className="items">  <NavLink style={displayStyle} to={'./boxer'}>  <p>Group Boxer {category4.length}</p> </NavLink> </div>
    <div className="items"> <NavLink style={displayStyle} to={'./dachshund'}>  <p>Group Dachshund {category5.length}</p> </NavLink> </div>
    <div className="items">  <NavLink style={displayStyle} to={'./rottweiler'}> <p>Group Rottweiler {category6.length}</p> </NavLink> </div>
   
    </main>

): null
        } 
    </div>
  )
}

export default Home