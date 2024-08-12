import React from 'react'
import ExploreCard from './ExploreCard'
import StarTalk from './Books/StarTalk.jpg'
import Indian from './Books/Indian.jpg'
import WAISI from './Books/WAISI.jpg'
import Pride_Prejudice from './Books/Pride_Prejudice.jpg'
import AI from './Books/AI.jpg'
import Book_of_Life from './Books/Book_of_Life.jpg'
import Science_not_Arta from './Books/Science_not_Arta.jpg'

const Explore = () => {
  return (
    <>
        <div className="container grid col-span-4 grid-cols-4 border-2 border-red-600">
            <div className='border-2 border-black'>
                <ExploreCard img={Pride_Prejudice} title='20 Best Novels of all Time'/>
                {/* <h2 className='text-center text-lg font-bold'>20 Best Novels of all Time</h2> */}
                <p className='text-center mx-3 text-orientation: sideways;'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, provident quod. Facilis nisi dicta quae, ea nulla eaque incidunt laborum labore natus fugiat.</p>
            </div>
            <div>
                <ExploreCard img = {AI} />
                <h2>A.I.</h2>
            </div>
            <div className=''>
                <ExploreCard img = {Indian} title = "History of Literature" />
                <h2>History of Literatue</h2>
            </div>
            <div>
            <ExploreCard img = {StarTalk} title = 'Up in the Sky...'/>
                <h2 className='text-center'>Up in the Sky...</h2></div>
            {/* <div><h2></h2></div> */}
            <div>
                <ExploreCard img ={WAISI} title ="Best Scientific Journals of the Month"/>
                <h2>Best Scientific Journals of the Month</h2></div>
            <div>
                <ExploreCard img={Book_of_Life} title ='Philosophy' />
                <h2>Philosophy</h2></div>
            <div>
                <ExploreCard img = {Science_not_Arta} title ='Scientific Minds' />
                <h2>Scientific Minds</h2></div>
        </div>
    </>
  )
}

export default Explore