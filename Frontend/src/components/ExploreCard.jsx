import React from 'react'
// import './Genrecard.css';

const ExploreCard = (props) => {
    const cardStyle = {
        background: `linear-gradient(rgba(43,43,43,0.5), rgba(72, 72, 72, 0.5)),
        url(${props.img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // filter: brightness(50%)
    };
    return (
        <div>
            <div>
                <a href="/."><div className="card hover:bg-slate-100 duration-150 rounded-md shadow-md my-8 mx-6 text-white w-56 h-64 text-center text-2xl flex justify-center items-center" style={cardStyle}>{props.title}</div></a>
            </div>
        </div>
    )
}

export default ExploreCard