import React, { useRef } from 'react';
import Homesectioncard from '../Navigation/Homecard/Homesectioncard';
import AliceCarousel from 'react-alice-carousel';
import Button from '@mui/material/Button';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const Sectioncarousel = ({ data, sectionName }) => {
    const carouselRef = useRef(null);

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const slidePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.slidePrev();
        }
    };

    const slideNext = () => {
        if (carouselRef.current) {
            carouselRef.current.slideNext();
        }
    };

    const items = data.slice(0, 10).map((item) => <Homesectioncard key={item.id} product={item} />);

    return (
        <div className="border">
            <h2 className="text2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
            <div className="relative p-5">
                <AliceCarousel
                    ref={carouselRef}
                    items={items}
                    responsive={responsive}
                    disableDotsControls
                    disableButtonsControls
                />
                <Button
                    variant="contained"
                    className="z-50 bg-white"
                    onClick={slidePrev}
                    sx={{
                        position: 'absolute',
                        top: '8rem',
                        left: '0rem',
                        transform: 'translateX(-50%) rotate(90deg)',
                        bgcolor: 'white',
                    }}
                    aria-label="previous"
                >
                    <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
                </Button>
                <Button
                    variant="contained"
                    className="z-50 bg-white"
                    onClick={slideNext}
                    sx={{
                        position: 'absolute',
                        top: '8rem',
                        right: '0rem',
                        transform: 'translateX(50%) rotate(90deg)',
                        bgcolor: 'white',
                    }}
                    aria-label="next"
                >
                    <KeyboardArrowLeftIcon sx={{ transform: 'rotate(-90deg)', color: 'black' }} />
                </Button>
            </div>
        </div>
    );
};

export default Sectioncarousel;
