import React from 'react'
import propTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <>
      <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <a className={`navbar-brand ml-2 text-${props.mode === 'light' ? 'dark' : 'light'}`} href="/home" >{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className={`nav-link text-${props.mode === 'light' ? 'dark' : 'light'}`} href="/home">Home<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className={`nav-link text-${props.mode === 'light' ? 'dark' : 'light'}`} href="/about">{props.AboutText}</a>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={props.RedMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label mr-3" htmlFor="flexSwitchCheckDefault">{props.buttontext}</label>
            </div>
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label mr-3" htmlFor="flexSwitchCheckDefault">{props.btntext}</label>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

//   propTypes
Navbar.propTypes = {
  title: propTypes.string.isRequired,
  AboutText: propTypes.string.isRequired
}

Navbar.defaultProps = {
  title: 'Company Name',
  AboutText: 'About My Company'
}