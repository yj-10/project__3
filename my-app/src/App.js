import React from 'react'
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"

// import { Routes, Route } from "react-router-dom";
import Review from './components/review/Review';
import Shop from './components/shop/Shop';
import Info from './components/info/Info';
import Trending from './components/trending/Trending';
import Mission from "./components/mission/Mission"
import Magazine from './components/magazine/Magazine';
import Footer from './components/footer/Footer';
import SignupForm from './components/forms/SignupForm';
import SigninForm from './components/forms/SigninForm';

const App = () => {
  return (
    
    <div>
<Header/>
{/* <SignupForm/> */}
<SigninForm/>
{/* <Hero/>
<Review/>
<Shop/>
<Info/>
<Trending/>
<Mission/>
<Magazine/>
<Footer/> */}

    </div>
  )
}

export default App
