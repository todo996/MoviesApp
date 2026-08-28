import { useContext, useRef } from 'react'
import PropTypes from 'prop-types'
import { MovieContext } from '../context/MovieProvide'

const MovieList = ({ title, data }) => {
  const carouselRef = useRef(null)
  const { handleTrailer } = useContext(MovieContext)

  const scroll = (direction) => {
    const container = carouselRef.current
    if (!container) return

    const distance = Math.max(container.clientWidth * 0.8, 280)
    container.scrollBy({
      left: direction === 'next' ? distance : -distance,
      behavior: 'smooth',
    })
  }

  return (
    <section className="px-4 pb-10 text-white sm:px-6 sm:pb-14 lg:px-10 lg:pb-20">
      <div className="relative rounded-2xl border border-white/10 bg-[#0b0b0b] px-4 pb-5 pt-8 sm:rounded-3xl sm:px-6 sm:pb-8 sm:pt-10 lg:px-10 lg:pb-10 lg:pt-10">
        <div className="absolute -top-4 left-4 sm:left-6 lg:left-10">
          <span className="rounded-xl bg-red-600 px-4 py-2 text-base font-medium text-white sm:px-5 sm:py-2.5 sm:text-lg lg:px-6 lg:py-3 lg:text-2xl">
            {title}
          </span>
        </div>

        <div className="mb-6 mt-4 flex items-center justify-end sm:mb-8 lg:mb-10">
          <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/80 px-2 py-2 sm:gap-3 sm:px-4 sm:py-3">
            <button
              type="button"
              onClick={() => scroll('previous')}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#111] transition hover:bg-[#1a1a1a] sm:h-11 sm:w-11 lg:h-12 lg:w-12"
              aria-label="Previous movies"
            >
              <i className="fa-solid fa-arrow-left text-sm sm:text-base"></i>
            </button>

            <button
              type="button"
              onClick={() => scroll('next')}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#111] transition hover:bg-[#1a1a1a] sm:h-11 sm:w-11 lg:h-12 lg:w-12"
              aria-label="Next movies"
            >
              <i className="fa-solid fa-arrow-right text-sm sm:text-base"></i>
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-2 sm:gap-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {data?.map((item) => (
            <div
              key={item.id}
              className="shrink-0 basis-[48%] snap-start sm:basis-[31.5%] lg:basis-[19%] 2xl:basis-[15.8%]"
            >
              <div
                className="group cursor-pointer rounded-2xl border border-white/5 bg-[#111] p-3 sm:p-4"
                onClick={() => handleTrailer(item.id)}
              >
                <div className="overflow-hidden rounded-xl">
                  <img
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-64 lg:h-72"
                    src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`}
                    alt={item.title}
                    loading="lazy"
                  />
                </div>

                <div className="mt-3 flex items-center justify-between gap-3 sm:mt-4">
                  <h3 className="line-clamp-1 text-sm font-medium sm:text-base lg:text-xl">
                    {item.title}
                  </h3>
                  <i className="fa-solid fa-arrow-right shrink-0 text-sm sm:text-base lg:text-xl"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

MovieList.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
}

export default MovieList
