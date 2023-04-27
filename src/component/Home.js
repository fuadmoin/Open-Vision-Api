/* eslint-disable */
import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { fetchAnimals } from '../redux/animals/animalSlice';
import './home.css';
import back from '../img/left.png';
import mic from '../img/mic.png';
import setting from '../img/settings.png';
import right from '../img/right.png';

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
const displayStyles = {
    textDecoration: "none",
    color: "black",
    gridColumn: "1 / span 2",
};
const displayStyle = {
    textDecoration: "none",
    color: "black",
};

  return (
    <div>
        <div className="header">
            {/* <div className="goBack"> <NavLink style={displayStyles} to={'./'}>
                <img src={back} alt="back" /><span className="homeLink">Home</span> </NavLink>
                 </div> */}
                 <span className="headerTitle">Home</span>
                 <div className="headerRight">
                    <img className="setting" src={mic} alt="mic" />
                    <img className="setting" src={setting} alt="setting" />
                 </div>
        </div>
         {
!loading && animals.length ? (
    <main className="homeContainer">   
   
  <NavLink style={displayStyles} to={'./allBreeds'}> <div className="item"> <small className="allPets"> ANIMALS AND THEIR BREEDS  </small> <small className="number"> {animals.length} <small className="views"> animals</small></small>

 </div> </NavLink> 
 <small className="title">GROUPED BREEDS</small>
      <NavLink style={displayStyle} to={'./tabby'}> <div className="items2 tabby"> 
      <img className="setting right" src={right} alt="right"/>
       <small className="pets">GROUP TABBY</small>
        <small className="numbers"> {category1.length}</small> 
        </div></NavLink>
      <NavLink style={displayStyle} to={'./border'}> <div className="items border"> 
      <img className="setting right" src={right} alt="right"/>
       <small className="pets">GROUP BORDER</small>
        <small className="numbers num"> {category2.length}</small> 
        </div></NavLink>
      <NavLink style={displayStyle} to={'./beagle'}> <div className="items beagle"> 
      <img className="setting right" src={right} alt="right"/>
       <small className="pets">GROUP BEAGLE</small>
        <small className="numbers"> {category3.length}</small> 
        </div></NavLink>
      <NavLink style={displayStyle} to={'./boxer'}> <div className="items2 boxer"> 
      <img className="setting right" src={right} alt="right"/>
       <small className="pets">GROUP BOXER</small>
        <small className="numbers num"> {category4.length}</small> 
        </div></NavLink>
      <NavLink style={displayStyle} to={'./dachshund'}> <div className="items2 dachshund"> 
      <img className="setting right" src={right} alt="right"/>
       <small className="pets">GROUP DACHSHUND</small>
        <small className="numbers"> {category5.length}</small> 
        </div></NavLink>
      <NavLink style={displayStyle} to={'./rottweiler'}> <div className="items rottweiler"> 
      <img className="setting right" src={right} alt="right"/>
       <small className="pets">GROUP ROTTWEILER</small>
        <small className="numbers num"> {category6.length}</small> 
        </div></NavLink>
    
   
    </main>

): null
        } 
    </div>
  )
}

export default Home