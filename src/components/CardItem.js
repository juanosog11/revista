import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <li className={`cards__item ${props.size || ''}`}>
      <Link className='cards__item__link' to={`${props.path}?page=${props.pageIndex}`}>
        <figure className='cards__item__pic-wrap' data-category={props.label}>
          <img className='cards__item__img' alt='Imagen de Artículo' src={props.src} />
          <div className='cards__item__title-overlay'>
            <h2 className='cards__item__title'>{props.title}</h2>
          </div>
        </figure>
        <div className='cards__item__info'>
          <h5 className='cards__item__text'>{props.text}</h5>
        </div>
      </Link>
    </li>
  );
}


export default CardItem;
