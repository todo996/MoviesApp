import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import CarouselModule from 'react-multi-carousel';
const Carousel = CarouselModule.default;
import 'react-multi-carousel/lib/styles.css'
import { MovieContext } from '../context/MovieProvide';


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MovieSearch = ({ title, data }) => {
  const {handleTrailer} = useContext(MovieContext);

  return (
    <section className='px-24 pb-20 text-white'>
      <div className='relative rounded-3xl border border-white/10 bg-[#0b0b0b] px-10 pt-10 pb-10'>
        <div className='absolute -top-4 left-10'>
          <span className='bg-red-600 text-white text-2xl font-medium px-6 py-3 rounded-xl'>
            {title}
          </span>
        </div>

        <div className='flex items-center justify-end mb-10'>
          <div className='flex items-center gap-3 bg-black/80 border border-white/10 rounded-2xl px-4 py-3'>
            <button
              type='button'
              className='w-12 h-12 rounded-xl bg-[#111] flex items-center justify-center hover:bg-[#1a1a1a] transition'
            >
              <i className='fa-solid fa-arrow-left'></i>
            </button>

            <button
              type='button'
              className='w-12 h-12 rounded-xl bg-[#111] flex items-center justify-center hover:bg-[#1a1a1a] transition'
            >
              <i className='fa-solid fa-arrow-right'></i>
            </button>
          </div>
        </div>

        <Carousel
          responsive={responsive}
          arrows={false}
          infinite={false}
        >
          {data?.map((item) => (
            <div className='px-2' key={item.id}>
              <div
                className='rounded-2xl bg-[#111] border border-white/5 p-4 group cursor-pointer'
                onClick={() => handleTrailer(item.id)}
              >
                <div className='overflow-hidden rounded-xl'>
                  <img
                    className='w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500'
                    src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`}
                    alt={item.title}
                  />
                </div>

                <div className='flex items-center justify-between mt-4 gap-3'>
                  <h3 className='text-xl font-medium truncate'>{item.title}</h3>
                  <i className='fa-solid fa-arrow-right text-xl shrink-0'></i>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  )
}


MovieSearch.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array
}

export default MovieSearch