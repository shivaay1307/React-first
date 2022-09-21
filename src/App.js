import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./components/Movies";
import NotFound from "./components/notFound";
import Rentals from "./components/rentals";
import Customers from "./components/customer";
import MovieForm from './components/movieForm';
import Navbar from './components/common/navbar';
import LoginForm from "./components/common/loginForm";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes className="conatiner">
          <Route path="/movies/:id" element={<MovieForm />} />
          <Route path="/Login" element={<LoginForm />} />
          <Route path="/" element={<Movies />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/notFound" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;