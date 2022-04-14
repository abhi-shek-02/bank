import React from 'react'
import './Bankdetails.css'

const Bankdetails = () => {
    return (
        <div className='Mainbank-details-cont2'>
            <div className='bank-details-cont2'>
                <span>IFSC</span>
                <span>BANK ID</span>
                <span>BRANCH</span>
                <span>ADDRESS</span>
                <span>CITY</span>
                <span>DISTRICT</span>
                <span>STATE</span>
                <span>BANK NAME</span>
            </div>
            <div className='data-table2'>
                <span>ABHY0065001</span>
                <span>60</span>
                <span>Kankurgachi</span>
                <span>ABHYUDAYA BANK BLDG., B.NO.71, NEHRU NAGAR, KURLA (E), MUMBAI-400024</span>
                <span>Kolkata</span>
                <span>RTGS-HO</span>
                <span>West bengal</span>
                <span>ABHYUDAYA COOPERATIVE BANK LIMITED</span>
            </div>
      <button className="button-6" role="button"> <span class="text">BACK TO HOME</span> </button>
            
        </div>

    )
}

export default Bankdetails;





