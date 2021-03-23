import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these amazing  Collections!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Classy leather belt watch'
              label='Watch'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Latest apple smart watch'
              label='Apple Watch'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Latest Samsung headphones'
              label='Headphones'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Headphones of high quality'
              label='Gadget'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Wireless apple smart airpods'
              label='Airpods'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;