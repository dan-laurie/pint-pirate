import React from 'react'
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './component/Home'
import Navbar from './component/Navbar'
import CityList from './component/CityList'
import Login from './component/auth/login'
import Register from './component/auth/register'
import CityCard from './component/CityCard'
import ReviewForm from './component/ReviewForm'
import About from './component/About'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/beers'>
          <CityList />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/register'>
          <Register />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/beers/:id'>
          <CityCard />
        </Route>
        <Route exact path='/beers/:id/reviews'>
          <ReviewForm />
        </Route>
        
      </Switch>
    </BrowserRouter>
  )
}

export default App
