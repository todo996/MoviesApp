import { createContext, useState } from "react";
import PropTypes from "prop-types";
import Modal from 'react-modal';
import YouTube from 'react-youtube';

const MovieContext = createContext();

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 9999,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    marginRight: '0',
    padding: '16px',
    border: 'none',
    background: '#111',
  },
};

const opts = {
  height: '390',
  width: '640',
  playerVars: {
    autoplay: 1,
    rel: 0,
  },
};


const MovieProvider = ({children}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [trailerKey, setTrailerKey] = useState("");
    const [loadingTrailer, setLoadingTrailer] = useState(false);

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleTrailer = async (id) => {
        if (loadingTrailer) return;

        setLoadingTrailer(true);

        try {
        setModalIsOpen(false);
        setTrailerKey('');

        const url = `https://api.themoviedb.org/3/movie/${id}/videos`;
        const options = {
            method: 'GET',
            headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
            }
        };

        const response = await fetch(url, options);
        const result = await response.json();

        const trailer = result?.results?.find(
            (item) => item.site === 'YouTube' && item.type === 'Trailer'
        ) || result?.results?.[0];

        if (!trailer?.key) {
            alert('Phim này chưa có trailer.');
            return;
        }

        setTrailerKey(trailer.key);

        setTimeout(() => {
            setModalIsOpen(true);
        }, 100);
        } catch (error) {
        console.log(error);
        } finally {
        setLoadingTrailer(false);
        }
    };

    return (
        <MovieContext.Provider value={{handleTrailer}}>
            {children}
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            onAfterClose={() => setTrailerKey('')}
            style={customStyles}
            contentLabel="Trailer Modal"
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
            >
            {trailerKey && (
                <YouTube
                key={trailerKey}
                videoId={trailerKey}
                opts={opts}
                />
            )}
            </Modal>
        </MovieContext.Provider>
    )
}

MovieProvider.propTypes = {
    children: PropTypes.node,
}

export {MovieContext, MovieProvider}