import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './detail.css';
import back from '../img/left.png';
import mic from '../img/mic.png';
import setting from '../img/settings.png';
import right from '../img/right.png';

const Details = ({ picture, animals, title }) => {
  const displayStyles = {
    textDecoration: 'none',
    color: 'black',
    gridColumn: '1 / span 2',
  };
  const backStyles = {
    background: `url(${picture}) no-repeat left 20px center`,
    backgroundColor: '#e64a83',
    height: '200px',
    color: '#e9e6e6',

  };
  const uniqueData = {};
  animals.forEach((breed) => {
    if (uniqueData[breed.breeds.primary]) {
      uniqueData[breed.breeds.primary] += 1;
    } else { uniqueData[breed.breeds.primary] = 1; }
  });
  const indvidualBreed = Object.entries(uniqueData);
  return (
    <div>
      <nav className="header">
        <div className="goBack">
          {' '}
          <NavLink style={displayStyles} to="/">
            <img src={back} alt="back" />
            <span className="homeLink2">Home</span>
            {' '}

          </NavLink>
        </div>
        <span className="headerTitle2">{title}</span>
        <div className="headerRight2">
          <img className="setting2" src={mic} alt="mic" />
          <img className="setting2" src={setting} alt="setting" />
        </div>
      </nav>

      <main className="detailsContainer">
        <header style={backStyles} className="item">
          {' '}
          <small className="allPets"> ANIMALS AND THEIR BREEDS  </small>
          <small className="numbe">
            {' '}
            {animals.length}
            <small> animals</small>
          </small>

        </header>
        <small className="title">INDIVIDUAL BREEDS</small>
        <section className="breedSection">
          {
 indvidualBreed.map((breed) => (
   <article key={breed[0]} className="breedsContainer">
     <small className="breeds">{breed[0]}</small>
     <div className="rightSection">
       <small className="numbe nums">
         {' '}
         {breed[1]}
         <small className="views">
           {' '}
           {breed[1] > 1 ? 'animals' : 'animal'}
         </small>
       </small>
       <img className=" right2" src={right} alt="right" />
     </div>
   </article>
 ))
}

        </section>

      </main>

    </div>
  );
};

Details.propTypes = {
  picture: PropTypes.string.isRequired,
  animals: PropTypes.arrayOf(PropTypes.shape({
    breeds: PropTypes.shape({
      primary: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
  title: PropTypes.string.isRequired,
};

export default Details;
