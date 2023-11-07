import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MovieList from '../components/MovieList';
import PageNotFound from '../utils/PageNotFound';
import { Routes, Route } from 'react-router-dom';
import MovieDetails from '../components/MovieDetails';

const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<MovieList />} />
        <Route path='/movies' element={<MovieList />} />
        <Route path='/trending' element={<MovieList />} />
        <Route path='/tv_series' element={<MovieList />} />
        <Route path='/movies:id' element={<MovieDetails />} />
        <Route path='/trending:id' element={<MovieDetails />} />
        <Route path='/tv_series:id' element={<MovieDetails />} />
        <Route path='/search:id' element={<MovieDetails />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AllRoutes;
