import React, { Component } from 'react'
import {FaUser} from "react-icons/fa"
import {BsFillCreditCardFill} from "react-icons/bs"
import checkIconMobile from "../../assets/mobile/checkIconMobile.svg"
export default class Content extends Component {
  render() {
    return (
      <section className=''>
        <div className='ml-[70px] mr-[54px] text-bold bg-purple-500 flex flex-col items-center bg-gradient-to-b shadow-sm from-white/40 to-transparent rounded-xl'>
            <div className='mt-16 gap-8 flex items-start'>
                <FaUser size={"30px"} className="mt-[12px]"/>
                <div className='flex flex-col'>
                <p className='text-26'>
                10234
                </p>
                <p className="text-13 font-semibold mb-[36px]"> Customers</p>
                </div>
            </div>
            <div className=' gap-8 flex items-start mb-16'>
                <BsFillCreditCardFill size={'30px'} className='mt-[12px]' />
                <div className='flex flex-col'>
                <p className='text-26'>
                13234
                </p>
                <p className="text-13 font-semibold mb-[36px]"> 
                Cards issued
                </p>
                </div>
            </div>
        </div>
        <div className='text-13 flex flex-col w-[100%] mt-[90px] font-semibold'>
            <p className='check-content'>
                <img src={checkIconMobile} alt="check icon"/>
                <p> Send to your phone every weeks</p>
            </p>
            <p className='check-content'>
                <img src={checkIconMobile} alt="check icon"/>
                <p> No external fees</p>
            </p>
            <p className='check-content'>
                <img src={checkIconMobile} alt="check icon"/>
                <p> Set pending limits and restriction</p>
            </p>
        </div>

      </section>
    )
  }
}
