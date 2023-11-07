import React from 'react';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageNotFound from '../utils/PageNotFound';
import { Routes, Route } from 'react-router-dom';

const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<MovieList />} />
        <Route path='/tv' element={<MovieList />} />
        <Route path='/movie' element={<MovieList />} />
        <Route path='/search/tv' element={<MovieList />} />
        <Route path='/search/movie' element={<MovieList />} />
        <Route path='/trending/:id' element={<MovieDetails />} />
        <Route path='/movie/:id' element={<MovieDetails />} />
        <Route path='/tv/:id' element={<MovieDetails />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AllRoutes;
