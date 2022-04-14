import React from 'react'
import './Data.css'
const Data = (props) => {
// const 

    return (
            <div className='data-table'>
                <button key={props.ifsc}>O</button>
                <span>{props.bank_name}</span>
                <span>{props.ifsc}</span>
                <span>{props.branch}</span>
                <span>{props.bank_id}</span>
                <span>{props.address}</span>
                {/* <span>{props.city}</span> */}
            </div>
    )
}

export default Data;