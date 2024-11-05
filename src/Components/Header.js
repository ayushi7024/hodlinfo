import React from 'react'
import logo from "../assets/logo.png"
import telegramicon from "../assets/telegramicon.png"
import './Header.css'


const Header = () => {
    return (
        <div className="header">
            <div className='header-logo'>
                <div className='logo'>
                    <img src={logo} alt="Logo" className="logo" />
                </div>
            </div>

            <div className='btn'>
                <button>
                    <select>
                        <option>BTC</option>
                        <option>ETH</option>
                        <option>USDT</option>
                        <option>XRP</option>
                        <option>TRX</option>
                        <option>DASH</option>
                        <option>ZEC</option>
                        <option>XEM</option>
                        <option>IOST</option>
                    </select>
                </button>

                <button>
                    <select>
                        <option>NRI</option>
                    </select>
                </button>

                <button>BUY BTC</button>
            </div>

            <div className='telegram-btn'> 
                <button className='tele-btn'>
                    <img src={telegramicon} alt="telegramicon" className="telegramicon"/> 
                    Connect to the telegrame
                </button>
            </div>
        </div>

    )
}

export default Header
