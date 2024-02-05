import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown, Popover, Whisper } from 'rsuite';


const Navbar = () => {
  return (
    <div>
      <header>  
        <div className="header1 d-flex p-1">
          <div className="left ">
            <nav className='navbar-items d-flex'>
              <img className="logo" src=" /logo.png" alt="logo" />
              <ul className='list-styled1 d-flex'>

                <NavLink className="nav-link" to='/howitwork'>how it works</NavLink>
                <NavLink className="nav-link" to='/browsejobs'>browse jobs</NavLink>
              </ul>
            </nav>
          </div>
          <div className="nav-item d-flex ">
            <ul className='list-styled1 d-flex'>
              <Whisper placement="bottom" followCursor speaker={<Popover>login</Popover>}>
                <NavLink className="nav-link" to="/login">log in </NavLink>

              </Whisper>
              <Whisper placement="bottom" followCursor speaker={<Popover>signup</Popover>}>
              

              <NavLink className="nav-link" to="/signup">sign up</NavLink>
              </Whisper>

            </ul>

          </div>
          <NavLink className="btn1 px-4" to="/jobform">add job</NavLink>
        </div>
        <div className="header2">
          <nav className='navbar-items d-flex'>
            <ul className='list-styled2 d-flex'>
              <Dropdown className='dropdown my-dropdown' title="Find Jobs" trigger="hover">
                <Dropdown.Item>by skill</Dropdown.Item>
                <Dropdown.Item>by language </Dropdown.Item>
                <Dropdown.Item>featured jobs </Dropdown.Item>
                <Dropdown.Item>find contents</Dropdown.Item>
              </Dropdown>
              <Dropdown className='dropdown' title="hire freelancer" trigger="hover">
                <Dropdown.Item>by skill</Dropdown.Item>
                <Dropdown.Item>by language </Dropdown.Item>
                <Dropdown.Item>featured jobs </Dropdown.Item>
              </Dropdown>

              <Dropdown className='dropdown' title="get ideals" trigger="hover">
                <Dropdown.Item>get web design ideas</Dropdown.Item>
                <Dropdown.Item>get 3-d model ideas </Dropdown.Item>
                <Dropdown.Item> get modile app  ideas</Dropdown.Item>
                <Dropdown.Item> get logo design ideas</Dropdown.Item>
                <Dropdown.Item> get branding ideas</Dropdown.Item>
                <Dropdown.Item> get Illustration Ideas</Dropdown.Item>
                <Dropdown.Item> get website ideas</Dropdown.Item>
              </Dropdown>

              <Dropdown className='dropdown' title="about" trigger="hover">
                <Dropdown.Item>enterprise</Dropdown.Item>
                <Dropdown.Item>membership</Dropdown.Item>
                <Dropdown.Item>get verified</Dropdown.Item>

              </Dropdown>

              <Dropdown className='dropdown' title="resource" trigger="hover">

                <Dropdown.Item>what is HTML</Dropdown.Item>
                <Dropdown.Item>what is PHP</Dropdown.Item>
                <Dropdown.Item>what is APP DESIGN  </Dropdown.Item>
                <Dropdown.Item>what is LOGO DESIGN </Dropdown.Item>
                <Dropdown.Item>what is WORDPRESS</Dropdown.Item>
                <Dropdown.Item>what is GRAPHIC DESIGN</Dropdown.Item>
                <Dropdown.Item>what is WEB DESIGN</Dropdown.Item>
                <Dropdown.Item>what is JAVASCRIPT</Dropdown.Item>
                <Dropdown.Item>what is DIGITAL MARKETING </Dropdown.Item>
                <Dropdown.Item>what is INTERNET MARKETING </Dropdown.Item>
              </Dropdown>
            </ul>
          </nav>
        </div>
      </header>
      {/* home */}

    </div>
  )
}

export default Navbar