//import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import './Movie-list.scss';

import { SwiperSlide, Swiper } from 'swiper/react';
//import { Link } from 'react-router-dom';
import 'swiper/css';
//import Button from '../Button/Button';

import tmdbApi, { category } from '../../api/tmdbApi';
//import apiConfig from '../../api/apiConfig';
import MovieCard from '../movie-card/MovieCard';
//import MovieCard from '../movie-card/MovieCard';



const Movielist = props => {


  const [items, setItems] = useState([]);


  useEffect(() => {
    const getList = async () => {
        let response = null;
        const params = {};

        if (props.type !== 'similar') {
            switch(props.category) {
                case category.movie:
                    response = await tmdbApi.getMoviesList(props.type, {params});
                    break;
                default:
                    response = await tmdbApi.getTvList(props.type, {params});
            }
        } else {
            response = await tmdbApi.similar(props.category, props.id);
        }
        setItems(response.results);
    }
    getList();
}, [props.category, props.id, props.type]);



  return (

    <div className="movie-list">
    <Swiper
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={'auto'}
    >
        {
            items.map((item, i) => (
                <SwiperSlide key={i}>
                  <MovieCard item={item} category={props.category} />
                </SwiperSlide>
            ))
        }
    </Swiper>
</div>


  )
}
export default Movielist;