import React from 'react'
// import {Link} from 'react-router-dom'

const NavBar = ({handlerChange, handlerSubmit}) =>(
<div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="#">Back To The Game</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item">
            <a className="nav-link" href="#">Ordenes</a>
        </li>
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Categorias
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Something else here</a>
            </div>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Entrar</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Registrarse</a>
        </li>
        </ul>
        <form className="form-inline my-2 my-lg-0" onSubmit={handlerSubmit}>
        <input 
        className="form-control mr-sm-2" 
        type="search" placeholder="Search" 
        aria-label="Search"
        onChange={handlerChange}/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
        </form>
    </div>
    </nav>
</div>
)

export default NavBar