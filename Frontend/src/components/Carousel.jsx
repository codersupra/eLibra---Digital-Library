import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const Carousel = () => {
    return (
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={120}
            totalSlides={3}
        >

            <Slider className='h-96 -z-10'>
                <Slide index={0}>
                    <div className="container-1 text-center flex flex-row text-3xl my-3 mx-auto w-2/3">
                        <span className='text-3xl'>"</span>Access to a vast repository of knowledge has always been the cornerstone of progress. eLibra has revolutionized the way we approach learning, making it possible to explore diverse subjects from anywhere in the world. Its user-friendly interface and extensive collection have been invaluable in my quest for knowledge. This digital library is a testament to how technology can break down barriers and bring information to our fingertips.<span className='text-5xl'>"</span>
                    </div>
                    <p className='text-center'>— Elon Musk</p></Slide>
                <Slide index={1}>
                    <div className="container-1 text-center flex flex-row text-3xl my-3 mx-auto w-2/3">
                        <span className='text-3xl'>"</span>eLibra has been a game-changer for me. Its vast and easily accessible collection has enriched my research and inspired new ideas. A remarkable tool for anyone dedicated to lifelong learning.
                        <span className='text-5xl'>"</span>
                    </div> <p className='text-center'>— Malala Yousafzai</p></Slide>
                <Slide index={2}>
                    <div className="container-1 text-center flex flex-row text-3xl my-3 mx-auto w-2/3">
                        <span className='text-3xl'>"</span>eLibra is an incredible resource. Its extensive and easily accessible collection has significantly enhanced my ability to research and learn. A must-have tool for anyone passionate about knowledge.
                        <span className='text-5xl'>"</span>
                    </div><p className='text-center'>— Bill Gates</p>
                </Slide>
            </Slider>

            <div className='flex flex-row justify-between mx-2'>
                <ButtonBack><GrFormPrevious /></ButtonBack>
                <ButtonNext><MdNavigateNext /></ButtonNext>
            </div>
        </CarouselProvider>
    );
};
export default Carousel;