import React from 'react'

const Storecard = (props) => {
    return (
        <div>
            <a href="/."><div className="card hover:bg-slate-100 duration-150 rounded-md shadow-md my-8 mx-6  w-56 h-64 text-center"><img src={props.img} alt="IMG" className='object-cover m-auto max-w-28 py-2' /><div>{props.title}</div>{props.price}</div></a>
        </div>
    )
}

export default Storecard