import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const lnkBoxRef = useRef(null)
  const lnksRef = useRef(null)

  useEffect(() => {
    const linkHeight = lnksRef.current.getBoundingClientRect().height
    if (showLinks) lnkBoxRef.current.style.height = `${linkHeight}px`
    else lnkBoxRef.current.style.height = '0px'
  }, [showLinks])

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' />
          <button
            className='nav-toggle'
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={lnkBoxRef}>
          <div className='flex-box' ref={lnksRef}>
            <ul className='links'>
              {links.map((link) => {
                const { id, url, text } = link
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                )
              })}
            </ul>
            <ul className='social-icons'>
              {social.map((link) => {
                const { id, url, icon } = link
                return (
                  <li key={id}>
                    <a href={url} target='_target'>
                      {icon}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
