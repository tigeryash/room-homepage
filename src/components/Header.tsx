import React, { useState } from 'react'
import logo from "../assets/logo.svg"
import menu from "../assets/icon-hamburger.svg"
import close from "../assets/icon-close.svg"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <>
        <header>
            <div className='logo'>
                <img src={logo} />
            </div>
            
            <div className={`${isOpen ? 'black' : 'gone'}`}>
                <nav className={`${isOpen ? 'open' : 'close'}`}>
                    <ul>
                        <li>
                            <button>
                            home
                            </button>
                        </li>
                        <li>
                            <button>
                                shop
                            </button>
                        </li>
                        <li>
                            <button>
                            about
                            </button>
                        </li>
                        <li>
                            <button>
                                contact
                            </button>
                        </li>

                    </ul>
                </nav>

            </div>

            <div className='hamburger'>
                {isOpen ? 
                    <button onClick={() => setIsOpen(false)}>
                        <img src={close} alt='' />
                    </button>
                    : 
                    <button onClick={() => setIsOpen(true)}>
                        <img src={menu} alt='' />
                    </button>
                }
            </div>
        </header>
    </>
  )
}
