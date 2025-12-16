import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div id='magazine1' className='cards'>
      <h1>Dilemas Éticos de la IA</h1>

      <div className='cards__container'>
        <div className='cards__wrapper'>
          {/* Primera fila */}
          <ul className='cards__items'>
            <ul className='cards__item tall'>
              <CardItem
                src='images/cards/Introdu.jpg'
                label='Editorial'
                title='Introducción'
                path='/services'
                pageIndex={0}
              />
            </ul>

            <ul className='cards__item wide'>
              <CardItem
                src='images/cards/importancia.jpg'
                label='Motivación'
                title='¿Para qué lo hacemos?'
                path='/services'
                pageIndex={2}
              />
            </ul>
            <ul className='cards__item'>
              <CardItem
                src='images/cards/img-1.jpg'
                label='Propósito'
                title='¿Qué queremos hacer?'
                path='/services'
                pageIndex={1}
              />
            </ul>
          </ul>

          {/* Segunda fila */}
          <ul className='cards__items'>
            <ul className='cards__item'>
              <CardItem
                src='images/cards/razones.jpg'
                label='Justificación'
                title='¿Por qué se hace?'
                path='/services'
                pageIndex={3}
              />
            </ul>

            <ul className='cards__item'>
              <CardItem
                src='images/cards/Metodologia.jpg'
                label='Metodología'
                title='¿Cómo se va a hacer?'
                path='/services'
                pageIndex={4}
              />
            </ul>

            <ul className='cards__item wide'>
              <CardItem
                src='images/cards/fuentes.jpg'
                label='Contexto'
                title='¿Dónde se va a hacer?'
                path='/services'
                pageIndex={5}
              />
            </ul>

            <ul className='cards__item tall'>
              <CardItem
                src='images/cards/cronograma.jpg'
                label='Cronograma'
                title='¿Cuándo lo vamos a hacer?'
                path='/services'
                pageIndex={6}
              />
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
