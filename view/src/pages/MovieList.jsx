import React from 'react';
import axios from 'axios';
import Error from '../utils/Error';
import Loader from '../utils/Loading';
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';
import { useLocation, useSearchParams } from 'react-router-dom';

// Function to persist the page number
// const getCurrentPageFromURL = (value) => {
//   value = Number(value);
//   if (typeof value === 'number' && value <= 0) {
//     value = 1;
//   }
//   if (!value) {
//     value = 1;
//   }
//   return value;
// };

const MovieList = () => {
  const location = useLocation();
  const { pathname, search } = location;
  const [page, setPage] = React.useState(1);
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [totalPages, setTotalPages] = React.useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  // const initialPage = getCurrentPageFromURL(+searchParams.get('page'));
  // const [page, setPage] = React.useState(initialPage || 1);

  const fetchData = async () => {
    let currentQuery = '';

    if (pathname === '/') {
      currentQuery = `trending/all/day${search}`;
    } else if (pathname === '/search/movie' || pathname === '/search/tv') {
      currentQuery = `${pathname}${search}&language=en-US&page=${page}&include_adult=false`;
    } else {
      currentQuery = `discover${pathname}?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`;
    }

    try {
      setLoading(true);
      let res = await axios(`/api/movies/${currentQuery}`);
      setData(res.data.results);
      setTotalPages(res.data.total_pages);
      setLoading(false);
    } catch (err) {
      setError(true);
      console.log(err.message);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, [location]);

  React.useEffect(() => {
    setSearchParams({ page });
  }, [page]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <>
      <div className='p-4'>
        {pathname === '/' && (
          <h1 className='text-3xl text-slate-400 uppercase'>Trending today</h1>
        )}

        <div
          className='flex flex-wrap justify-center items-center gap-6 pt-8'
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))'
          }}
        >
          {data?.length > 0 &&
            data.map((item) => <MovieCard key={item.id} {...item} />)}
        </div>
      </div>

      {totalPages > 1 && (
        <Pagination
          setPage={setPage}
          page={page}
          total_pages={totalPages || 0}
        />
      )}
    </>
  );
};

export default MovieList;
