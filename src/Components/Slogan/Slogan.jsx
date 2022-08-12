import React, { Component } from 'react';
import Cards from "../../assets/desktop/isocard.svg"
class Slogan extends Component {
    render() {
        return (
            <section className='text-32 my-14 font-extrabold'>
                <div className='text-center'>
                    <p className=''> Earn <span className='text-purple-300'> More</span></p>
                    <p className=""> Pay Less </p>
                    <button className='text-20 px-6 py-[6px] font-semibold mt-[27px] bg-purple-500 rounded-md hover:bg-pink-600 transition-all duration-300'> Start</button>
                </div>
                <div className='mt-[70px]'>
                    <img src={Cards} alt="credit card"/>
                </div>
            </section>
        );
    }
}

export default Slogan;