import { NavLink } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className='h-screen bg-cover bg-center bg-no-repeat bg-[url("https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75")] place-items-center bg-white px-6 py-16 lg:px-8'>
      <div>
        <p className='text-base font-semibold text-white'>404</p>
        <h1 className='mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl'>
          Page not found
        </h1>
        <p className='mt-6 text-base font-medium leading-7 text-white/60'>
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className='mt-6'>
          <NavLink
            to='/'
            className='text-md font-semibold text-white/50 hover:text-white/100'
          >
            <span aria-hidden='true'>&larr;</span> Go back home
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
