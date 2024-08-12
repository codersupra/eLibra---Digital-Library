import React from 'react'
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
import Carousel from './Carousel'


const Homepage = () => {
    return (
        <>
            <div className="home">
                <ul className='flex flex-col justify-center'>
                    <div className='my-3'><li className=' w-auto px-3 mx-3 text-2xl font-bold bg-gray-100'>Recomended</li>
                        <div className="des flex flex-row gap-2 bg-gray-100 justify-between mx-3">
                            <Bookcard img={BABQ} title="Brief Answers to Big Questions" />
                            {/* <a href="/."><div className="card hover:bg-slate-100 duration-150 rounded-md shadow-md my-8 mx-6  w-56 h-64 text-center"><img src={Atomic_Habits} alt="IMG" className='object-cover m-auto max-w-28 py-2' />Atomic Habits</div></a> */}
                            <a href="/."><div className="card hover:bg-slate-100 duration-150 rounded-md shadow-md my-8 mx-6  w-56 h-64 text-center"><img src={GrandDesign} alt="IMG" className='object-cover m-auto max-w-28 py-2' />Grand Design</div></a>
                            <a href="/."><div className="card hover:bg-slate-100 duration-150 rounded-md shadow-md my-8 mx-6  w-56 h-64 text-center"><img src={QM_Griffths} alt="IMG" className='object-cover m-auto max-w-28 py-2' />Introduction to Quantum Mechanics</div></a>
                            <a href="/."><div className="card hover:bg-slate-100 duration-150 rounded-md shadow-md my-8 mx-6  w-56 h-64 text-center"><img src={QM_Leonard_Susskind} alt="IMG" className='object-cover m-auto max-w-28 py-2' />Quantum Mechanics: The Theoretical Minimum</div></a>
                        </div>
                    </div>
                    <div className='my-3'><li className=' w-auto px-3 mx-3 text-2xl font-bold bg-gray-100'>Top Reads</li>
                        <div className="des flex flex-row gap-2 bg-gray-100 justify-between mx-3">
                            <a href="/."><div className="card hover:bg-slate-100 duration-150 rounded-md shadow-md my-8 mx-6  w-56 h-64 text-center"><img src={Pride_Prejudice} alt="IMG" className='object-cover m-auto max-w-28 py-2' />Pride and Prejudice</div></a>
                            {/* <a href="/."><div className="card hover:bg-slate-100 duration-150 rounded-md shadow-md my-8 mx-6  w-56 h-64 text-center"><img src={Atomic_Habits} alt="IMG" className='object-cover m-auto max-w-28 py-2' />Atomic Habits</div></a> */}
                            <a href="/."><div className="card hover:bg-slate-100 duration-150 rounded-md shadow-md my-8 mx-6  w-56 h-64 text-center"><img src={Mein_Kanpf} alt="IMG" className='object-cover m-auto max-w-28 py-2' />Mein Kamph</div></a>
                            <a href="/."><div className="card hover:bg-slate-100 duration-150 rounded-md shadow-md my-8 mx-6  w-56 h-64 text-center"><img src={OoS} alt="IMG" className='object-cover m-auto max-w-28 py-2' />The Origin of Species</div></a>
                            <a href="/."><div className="card hover:bg-slate-100 duration-150 rounded-md shadow-md my-8 mx-6  w-56 h-64 text-center"><img src={QM_Leonard_Susskind} alt="IMG" className='object-cover m-auto max-w-28 py-2' />Quantum Mechanics: The Theoretical Minimum</div></a>
                        </div>
                    </div>
                    <div className='my-3'><li className=' w-auto px-3 mx-3 text-2xl font-bold bg-gray-100'>Buy Now</li>
                        <div className="des flex flex-row gap-2 bg-gray-100 justify-between mx-3">
                            <a href="/."><div className="card hover:bg-slate-100 duration-150 rounded-md shadow-md my-8 mx-6  w-56 h-64 text-center"><img src={Selfish_Gene} alt="IMG" className='object-cover m-auto max-w-28 py-2' />The Selfish Gene</div></a>
                            {/* <a href="/."><div className="card hover:bg-slate-100 duration-150 rounded-md shadow-md my-8 mx-6  w-56 h-64 text-center"><img src={Atomic_Habits} alt="IMG" className='object-cover m-auto max-w-28 py-2' />Atomic Habits</div></a> */}
                            <a href="/."><div className="card hover:bg-slate-100 duration-150 rounded-md shadow-md my-8 mx-6  w-56 h-64 text-center"><img src={GrandDesign} alt="IMG" className='object-cover m-auto max-w-28 py-2' />Grand Design</div></a>
                            <a href="/."><div className="card hover:bg-slate-100 duration-150 rounded-md shadow-md my-8 mx-6  w-56 h-64 text-center"><img src={QM_Griffths} alt="IMG" className='object-cover m-auto max-w-28 py-2' />Introduction to Quantum Mechanics</div></a>
                            <a href="/."><div className="card hover:bg-slate-100 duration-150 rounded-md shadow-md my-8 mx-6  w-56 h-64 text-center"><img src={Kanthapura} alt="IMG" className='object-cover m-auto max-w-28 py-2' />Kanthapura</div></a>
                        </div>
                    </div>
                    <div className='my-3'><li className=' w-auto px-3 mx-3 text-2xl font-bold bg-gray-100'>Top Genres</li>
                        <div className="des flex flex-row gap-2 bg-gray-100 justify-between mx-3">
                            <Genrecard title='Science' img={QM_Leonard_Susskind} />
                            <Genrecard title='Literature' img={Pride_Prejudice} />
                            <Genrecard title='Journals' img={Journals} />
                        </div>
                    </div>
                    <div className='my-3'><li className=' w-auto px-3 mx-3 text-2xl font-bold bg-gray-100'>My Readings</li>
                        <div className="des flex flex-row gap-2 bg-gray-100 justify-between mx-3">
                            <Bookcard title='Grand Design' img={GrandDesign} />
                        </div>
                    </div>
                </ul>
            </div>
            <div className="testimonials text-4xl px-2  my-2 shadow-lg">
                <h2 className='text-5xl'>Testimonials</h2>
                <Carousel />
            </div>
            {/* <div>
                <Carousel />
            </div> */}
        </>
    )
}

export default Homepage