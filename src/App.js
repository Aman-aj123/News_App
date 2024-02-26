import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from "./components/News.js"
import { BrowserRouter, Route, Routes } from "react-router-dom";





export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route key="Farming" exact path='/' element={<News category="Farming" />} />
            <Route key="Finance" exact path='/Finance' element={<News category="Finance" />} />
            <Route key="Business" exact path='/Business' element={<News category="Business" />} />
            <Route key="Politics" exact path='/Politics' element={<News category="Politics" />} />
            <Route key="Study" exact path='/Study' element={<News category="Study" />} />
            <Route key="Science" exact path='/Science' element={<News category="Science" />} />
            <Route key="Education" exact path='/Education' element={<News category="Education" />} />
            <Route key="Sports" exact path='/Sports' element={<News category="Sports" />} />
          </Routes>
        </BrowserRouter>
      </>
    )
  }

}
