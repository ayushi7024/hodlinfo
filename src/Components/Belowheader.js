import React from 'react'
import './Belowheader.css'

const Belowheader = () => {
  return (
    <div className='belowheader'>
        <div className='number1'>
            <div  className='topheader '>
                <h2>0.1%</h2> 
            </div>
            <div className='subheading1 '> 
                <h3>5 Mins</h3>
            </div>
        </div>

        <div className='number2'>
            <div  className='topheader2 '>
                <h2>0.96%</h2> 
            </div>
            <div className='subheading2 '> 
                <h3>1 hour</h3>
            </div>
        </div>

        <div className='number3'>
            <div className='upperheading'>
                <h4>Best price to trade</h4>
            </div>
            <div  className='topheader3 '>
                <h2>₹ 26,56,110</h2> 
            </div>
            <div className='subheading3 '> 
                <h5>Average BTC/INR net price including commission</h5>
            </div>
        </div>

        <div className='number4'>
            <div  className='topheader4 '>
                <h1>2.73%</h1> 
            </div>
            <div className='subheading4 '> 
                <h3>1 Day</h3>
            </div>
        </div>

        <div className='number2'>
            <div  className='topheader2 '>
                <h2>7.51%</h2> 
            </div>
            <div className='subheading5 '> 
                <h3>7 Days</h3>
            </div>
        </div>
      
    </div>
  )
}

export default Belowheader
