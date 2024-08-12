import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Navbar from './Navbar';
import Storecard from './Storecard';
import Footer from './Footer';
import ad_1 from './Store/ad_1.jpg'
import ad_2 from './Store/ad_2.jpg'
import ad_3 from './Store/ad_3.png'
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import BABQ from './Books/BABQ.jpg'
import Atomic_Habits from './Books/Atomic_Habits.jpg'
import GrandDesign from './Books/GrandDesign.jpg'
import QM_Griffths from './Books/QM_Griffths.jpg'
import QM_Leonard_Susskind from './Books/QM_Leonard_Susskind.jpg'
import Pride_Prejudice from './Books/Pride_Prejudice.jpg'
import OoS from './Books/OoS.jpg'
import Mein_Kanpf from './Books/Mein_Kanpf.jpg'
import Selfish_Gene from './Books/Selfish_Gene.jpg'
import Kanthapura from './Books/Kanthapura.jpg'
import Journals from './Books/Journals.jpg'
import Bookcard from './Bookcard'
import Genrecard from './Genrecard'

const Store = () => {
    return (
        <div>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={120}
                totalSlides={3}
            >

                <Slider className='h-96 -z-10'>
                    <Slide index={0}>
                        <div className="container-1 text-center flex flex-row text-3xl my-3 mx-auto w-2/3">
                            <img src={ad_1} alt="" />
                        </div></Slide>
                    <Slide index={1}>
                        <div className="container-1 text-center flex flex-row text-3xl my-3 mx-auto w-2/3">
                            <img src={ad_2} alt="" />
                        </div></Slide>
                    <Slide index={2}>
                        <div className="container-1 text-center flex flex-row text-3xl my-3 mx-auto w-2/3">
                            <img src={ad_3} alt="" height={32} />
                        </div>
                    </Slide>
                </Slider>

                <div className='flex flex-row justify-between mx-2'>
                    <ButtonBack><GrFormPrevious /></ButtonBack>
                    <ButtonNext><MdNavigateNext /></ButtonNext>
                </div>
            </CarouselProvider>

            <div className="home">
                <ul className='flex flex-col justify-center'>
                    <div className='my-3'><li className=' w-auto px-3 mx-3 text-2xl font-bold bg-gray-100'>Recomended</li>
                        <div className="des flex flex-row gap-2 bg-gray-100 justify-between mx-3">
                            <Storecard img={BABQ} title="Brief Answers to Big Questions" price='$10.12' />
                            <Storecard img={GrandDesign} title="The Grand Design" price="$8.97" />
                            <Storecard img={QM_Griffths} title="Introduction to Quantum Mechanics" price="$12.12" />
                            <Storecard img={QM_Leonard_Susskind} title="Quantum Mechanics: The Theoretical Minimum" price="$14.11" />
                        </div>
                    </div>
                    <div className='my-3'><li className=' w-auto px-3 mx-3 text-2xl font-bold bg-gray-100'>Top Reads</li>
                        <div className="des flex flex-row gap-2 bg-gray-100 justify-between mx-3">
                            <Storecard img={Pride_Prejudice} title="Pride and Prejudice" price="$9.10" />
                            <Storecard img={Mein_Kanpf} title="Mein Kamph" price="$6.57" />
                            <Storecard img={OoS} title="The Origin of Species" price="$3.12" />
                            <Storecard img={QM_Leonard_Susskind} title="Quantum Mechanics: The Theoretical Minimum" price="$14.11" />
                        </div>
                    </div>
                    <div className='my-3'><li className=' w-auto px-3 mx-3 text-2xl font-bold bg-gray-100'>Buy Now</li>
                        <div className="des flex flex-row gap-2 bg-gray-100 justify-between mx-3">
                            <Storecard img={Selfish_Gene} title="The Selfish Gene" price="$5.67" />
                            <Storecard img={GrandDesign} title="The Grand Design" price="$8.97" />
                            <Storecard img={QM_Griffths} title="Introduction to Quantum Mechanics" price="$12.12" />
                            <Storecard img={Kanthapura} title="Kanthapura" price="$7.98" />
                        </div>
                    </div>
                    <div className='my-3'><li className=' w-auto px-3 mx-3 text-2xl font-bold bg-gray-100'>Top Genres</li>
                        <div className="des flex flex-row gap-2 bg-gray-100 justify-between mx-3">
                            <Genrecard title='Science' img={QM_Leonard_Susskind} />
                            <Genrecard title='Literature' img={Pride_Prejudice} />
                            <Genrecard title='Journals' img={Journals} />
                        </div>
                    </div>
                    {/* <div className='my-3'><li className=' w-auto px-3 mx-3 text-2xl font-bold bg-gray-100'>My Readings</li>
                        <div className="des flex flex-row gap-2 bg-gray-100 justify-between mx-3">
                            <Bookcard title='Grand Design' img={GrandDesign} />
                        </div>
                    </div> */}
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default Store