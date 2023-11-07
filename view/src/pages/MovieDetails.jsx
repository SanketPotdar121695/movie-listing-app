import React from 'react';
import axios from 'axios';
import Error from '../utils/Error';
import Loader from '../utils/Loading';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { unavailable, unavailableLandscape, img_500 } from '../utils/images';

const MovieDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [video, setVideo] = React.useState('');
  const comingFrom = location.state?.data || '/';
  const [error, setError] = React.useState(false);
  const [details, setDetails] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  console.log(details);

  const getData = async () => {
    try {
      setLoading(true);
      let { data } = await axios(`/api/movies${location.pathname}`);
      setDetails(data);
      setLoading(false);
    } catch (err) {
      setError(true);
      console.log(err.message);
    }
  };

  const fetchVideo = async () => {
    const { data } = await axios.get(
      `/api/movies${location.pathname}/videos?language=en-US`
    );
    setVideo(data.results[0]?.key);
  };

  React.useEffect(() => {
    getData();
    fetchVideo();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div>
      <div className='flex flex-col lg:flex-row justify-start lg:justify-center items-center lg:items-start w-full p-8 lg:px-24 gap-6 text-white'>
        <img
          className='hidden lg:block w-[32%] rounded-xl'
          src={
            details?.poster_path && `${img_500}/${details.poster_path}`
            // : unavailable
          }
          alt={details.name || details.title}
        />

        <img
          className='lg:hidden w-full rounded-xl'
          src={
            details?.backdrop_path
              ? `${img_500}/${details.backdrop_path}`
              : unavailableLandscape
          }
          alt={details.name || details.title}
        />

        <div className='flex flex-col justify-between items-stretch'>
          <div className='w-full px-4'>
            <h1 className='text-4xl'>
              {details.name || details.title} (
              {(
                details.first_air_date ||
                details.release_date ||
                '-----'
              ).substring(0, 4)}
              )
            </h1>

            <p className='py-4 text-lg text-white/50'>
              {details.tagline && <i className='tagline'>{details.tagline}</i>}
            </p>

            <p className='py-2 text-lg text-justify leading-8'>
              {details.overview}
            </p>

            <div className='flex justify-between items-center py-4 pr-8'>
              <p>Rating: {Math.floor(details.vote_average)}/10</p>
              <button className='border-2 border-sky-600 hover:border-sky-400 px-4 py-2 rounded-lg'>
                <a
                  target='__blank'
                  href={`https://www.youtube.com/watch?v=${video}`}
                >
                  Watch Trailer
                </a>
              </button>
            </div>
          </div>

          <div className='flex justify-between items-center p-4 pr-12 gap-4'>
            <button
              className='border-2 border-sky-600 hover:border-sky-300 px-4 py-2 rounded-lg'
              onClick={() => navigate(comingFrom, { replace: true })}
            >
              Go back
            </button>
            <button
              className='border-2 border-sky-600 hover:border-sky-300 px-4 py-2 rounded-lg'
              onClick={() => navigate('/')}
            >
              Go to home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
