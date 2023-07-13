import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Enjoy the trends over the years</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/sum2021.jpg'
              text='The most awaited post covid fashion!'
              label='the trends of 2021'
              path='/products'
            />
            <CardItem
              src='images/sum2020.jpg'
              text='During covid, fashion never died'
              label='the trends of 2020'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/intro2021.jpg'
              text='The breath-taking trends of 2021'
              label='2021'
              path='/products'
            />
            <CardItem
              src='images/intro2020.jpg'
              text='The show-stopping trends of 2020'
              label='2020'
              path='/services'
            />
            <CardItem
              src='images/intro2022.jpg'
              text='The nail biting trends of 2022'
              label='2022'
              path='/year2022'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
