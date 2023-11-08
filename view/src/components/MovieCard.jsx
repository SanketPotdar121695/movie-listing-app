import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { img_300, unavailable } from '../utils/images';

const MovieCard = ({
  id,
  date,
  name,
  title,
  media_type,
  poster_path,
  vote_average,
  release_date,
  first_air_date
}) => {
  const navigate = useNavigate();
  const { pathname, search } = useLocation();

  const handleRedirection = () => {
    if (pathname === '/') {
      return navigate(`/${media_type}/${id}`, {
        state: { data: pathname },
        replace: true
      });
    } else if (pathname === '/movie' || pathname === '/tv') {
      return navigate(`${pathname}/${id}`, {
        state: { data: pathname },
        replace: true
      });
    } else {
      let actualPath = pathname.split(/[\/?]/, 3);

      return navigate(`/${actualPath[2]}/${id}`, {
        state: { data: `${pathname}${search}` },
        replace: true
      });
    }
  };

  return (
    <div
      className='flex flex-col justify-between items-center gap-4 w-64 h-[30rem] p-5 m-auto rounded-xl cursor-pointer text-white bg-slate-800 hover:bg-white hover:text-black'
      style={{ fontFamily: '"Montserrat", sans-serif' }}
      onClick={handleRedirection}
    >
      <img
        src={poster_path ? `${img_300}${poster_path}` : unavailable}
        alt={name || title}
      />

      <div className='flex flex-col w-full justify-between items-center gap-4'>
        <h1 className='text-md font-medium'>{name || title}</h1>

        <div className='flex w-full justify-between items-center gap-4 text-gray-600'>
          <h2>{media_type === 'tv' ? 'TV Series' : 'Movie'}</h2>
          <h2>{first_air_date || release_date}</h2>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
