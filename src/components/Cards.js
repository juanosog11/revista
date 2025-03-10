import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div id='magazine1' className='cards'>
      <h1>Dilemas Éticos de la IA</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Introdu.jpg'
              text='Editorial y visión general sobre los dilemas éticos de la inteligencia artificial'
              label='Editorial'
              title='Introducción'
              path='/services'
              pageIndex={0}
            />
            <CardItem
              src='images/img-2.jpg'
              text='Objetivos y propósito de nuestra investigación sobre ética en IA'
              label='Propósito'
              title='¿Qué queremos hacer?'
              path='/services'
              pageIndex={1}
            />
            <CardItem
              src='images/img-2.jpg'
              text='La importancia de analizar las implicaciones éticas de la IA en nuestra sociedad'
              label='Motivación'
              title='¿Para qué lo hacemos?'
              path='/services'
              pageIndex={2}
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Las razones fundamentales detrás de nuestro análisis ético de la IA'
              label='Justificación'
              title='¿Por qué se hace?'
              path='/services'
              pageIndex={3}
            />
            <CardItem
              src='images/img-3.jpg'
              text='Metodología y enfoque para el estudio de los dilemas éticos'
              label='Metodología'
              title='¿Cómo se va a hacer?'
              path='/services'
              pageIndex={4}
            />
            <CardItem
              src='images/img-4.jpg'
              text='El marco académico y las fuentes que fundamentan nuestra investigación'
              label='Contexto'
              title='¿Dónde se va a hacer?'
              path='/services'
              pageIndex={5}
            />
            <CardItem
              src='images/img-8.jpg'
              text='Cronograma y plazos para el desarrollo de la revista sobre ética en IA'
              label='Cronograma'
              title='¿Cuándo lo vamos a hacer?'
              path='/services'
              pageIndex={6}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
