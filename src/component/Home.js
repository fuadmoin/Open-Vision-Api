import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnimals } from '../redux/animals/animalSlice';
import './home.css';
import mic from '../img/mic.png';
import setting from '../img/settings.png';
import right from '../img/right.png';

const Home = () => {
  const dispatch = useDispatch();
  const { animals, loading } = useSelector((state) => state.animal);

  const handleCategory = (category) => {
    let result = [];
    category.forEach((element) => {
      const animal = animals.filter((animal) => animal.breeds.primary === element);
      result = [...result, ...animal];
    });
    return result;
  };

  const category1 = handleCategory(['Pug', 'Terrier', 'Tabby', 'Spaniel', 'Domestic Long Hair']);
  const category2 = handleCategory(['Domestic Short Hair', 'Border', 'German Shorthaired Pointer', 'Golden Retriever', 'Australian Cattle Dog']);
  const category3 = handleCategory(['Beagle', 'Old English Sheepdog', 'Mixed Breed', 'Doberman Pinscher', 'Hound', 'Border Collie']);
  const category4 = handleCategory(['Labrador Retriever', 'German Shepherd Dog', 'New Zealand', 'Chihuahua', 'Boxer', 'Shih Tzu']);
  const category5 = handleCategory(['Plott Hound', 'Blue Heeler', 'Dachshund', 'Pomeranian', 'Domestic Medium Hair']);
  const category6 = handleCategory(['Miniature Schnauzer', 'Whippet', 'Rottweiler', 'Persian', 'Pit Bull Terrier', 'Yorkshire Terrier']);
  useEffect(() => {
    if (!animals.length) { dispatch(fetchAnimals()); }
  }, [dispatch, animals]);
  const displayStyles = {
    textDecoration: 'none',
    color: 'black',
    gridColumn: '1 / span 2',
    width: '97%',
  };
  const displayStyle = {
    textDecoration: 'none',
    color: 'black',
    width: '97%',
  };

  return (
    <div>
      <div className="header5">

        <span className="headerTitle">Home</span>
        <div className="headerRight">
          <img className="setting" src={mic} alt="mic" />
          <img className="setting" src={setting} alt="setting" />
        </div>
      </div>
      {
!loading && animals.length ? (
  <main className="homeContainer">

    <NavLink style={displayStyles} to="./allBreeds">
      <div className="item">
        {' '}
        <small className="allPets"> ANIMALS AND THEIR BREEDS  </small>
        <small className="number">
          {' '}
          {animals.length}
          <small> animals</small>
        </small>

      </div>
      {' '}

    </NavLink>
    <small className="title">GROUPED BREEDS</small>
    <NavLink style={displayStyle} to="./tabby">
      {' '}
      <div className="items2 tabby">
        <img className="setting right" src={right} alt="right" />
        <small className="pets">GROUP TABBY</small>
        <small className="num">
          {' '}
          {category1.length}
        </small>
      </div>
    </NavLink>
    <NavLink style={displayStyle} to="./border">
      {' '}
      <div className="items border">
        <img className="setting right" src={right} alt="right" />
        <small className="pets">GROUP BORDER</small>
        <small className="num">
          {' '}
          {category2.length}
        </small>
      </div>
    </NavLink>
    <NavLink style={displayStyle} to="./beagle">
      {' '}
      <div className="items beagle">
        <img className="setting right" src={right} alt="right" />
        <small className="pets">GROUP BEAGLE</small>
        <small className=" num">
          {' '}
          {category3.length}
        </small>
      </div>
    </NavLink>
    <NavLink style={displayStyle} to="./boxer">
      {' '}
      <div className="items2 boxer">
        <img className="setting right" src={right} alt="right" />
        <small className="pets">GROUP BOXER</small>
        <small className=" num">
          {' '}
          {category4.length}
        </small>
      </div>
    </NavLink>
    <NavLink style={displayStyle} to="./dachshund">
      {' '}
      <div className="items2 dachshund">
        <img className="setting right" src={right} alt="right" />
        <small className="pets">GROUP DACHSHUND</small>
        <small className="num">
          {' '}
          {category5.length}
        </small>
      </div>
    </NavLink>
    <NavLink style={displayStyle} to="./rottweiler">
      {' '}
      <div className="items rottweiler">
        <img className="setting right" src={right} alt="right" />
        <small className="pets">GROUP ROTTWEILER</small>
        <small className=" num">
          {' '}
          {category6.length}
        </small>
      </div>
    </NavLink>

  </main>

) : null
        }
    </div>
  );
};

export default Home;
