import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
   {/* <div className='container-fluid newshead'>

   <ul class="nav nav-underline">
   <li class="nav-item ">
    <Link to={'/contents'} className='newslink'>
   <a class="nav-link" href="#">Navbar</a>  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    </Link>
  </li>
  <li class="nav-item ">
    <Link to={'/contents'} className='newslink'>
    <a class="nav-link" href="#">Home</a>
    </Link>
  </li>

  <li class="nav-item">
    <Link to={'/worlds'} className='newslink'>
    <a class="nav-link" href="#">World</a>
    </Link>
  </li>

  <li class="nav-item">
    <Link to={'/business'} className='newslink'>
    <a class="nav-link" href="#">Business</a>
    </Link>
  </li>

  <li class="nav-item">
    <Link to={'/technologys'} className='newslink'>
    <a class="nav-link" href="#">Technology</a>
    </Link>
  </li>

  <li class="nav-item">
  <Link to={'entertainments'} className='newslink'>
    <a class="nav-link" href="#">Entertainment</a>
    </Link>
  </li>

  <li class="nav-item">
    <Link to={'/sports'} className='newslink'>
    <a class="nav-link" href="#">Sports</a>
    </Link>
  </li>

  <li class="nav-item">
    <Link to={'/healths'} className='newslink'>
    <a class="nav-link" href="#">Health</a>
    </Link>
  </li>
  <form class="d-flex mt-2" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
</ul>


</div> */}











<nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand text-light fs-4 fw-bolder" href="#">News App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-underline fw-bold fs-6">
        <li class="nav-item">
    <Link to={'/contents'} className='newslink'>
          <a class="nav-link text-light opacity-75" aria-current="page" href="#">Home</a>
          </Link>
        </li>
        <li class="nav-item">
    <Link to={'/worlds'} className='newslink'>
          <a class="nav-link text-light opacity-75" href="#">World</a>
          </Link>
        </li>
        <li class="nav-item">
    <Link to={'/business'} className='newslink'>
          <a class="nav-link text-light opacity-75" href="#">Business</a>
          </Link>
        </li>
        <li class="nav-item">
    <Link to={'/technologys'} className='newslink'>
          <a class="nav-link text-light opacity-75" href="#">Technology</a>
          </Link>
        </li>
        <li class="nav-item">
    <Link to={'/entertainments'} className='newslink'>
          <a class="nav-link text-light opacity-75" href="#">Entertainment</a>
          </Link>
        </li>
        <li class="nav-item">
    <Link to={'/sports'} className='newslink'>
          <a class="nav-link text-light opacity-75" href="#">Sports</a>
          </Link>
        </li>
        <li class="nav-item">
    <Link to={'/healths'} className='newslink'>
          <a class="nav-link text-light opacity-75" href="#">Health</a>
          </Link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-dark " type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>



    </>
  )
}
