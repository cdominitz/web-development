
import { React, useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import products from './data/products.js';

import Nav from './components/Nav.js';
import HomePage from './pages/HomePage.js';
import GalleryPage from './pages/GalleryPage.js';
import StaffPage from './pages/StaffPage.js';
import OrderPage from './pages/OrderPage.js';
import ContactPage from './pages/ContactPage.js';
import LogPage from './pages/LogPage.js';
import CreatePage from './pages/CreatePage.js';
import EditPage from './pages/EditPage.js';
import TopicsPage from './pages/TopicsPage.js';

import logo from './logo.svg';
import './App.css';

function App() {
  const [expense, setExpense] = useState([])
  return (
    <>
    <BrowserRouter>

      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <h1>Calista Dominitz</h1>
      </header>

      <Nav />
      <main>
        <section className="App-article">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/topics" element={<TopicsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/ordering" element={<OrderPage myProducts={products} />} />
            <Route path="/staff" element={<StaffPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/log" element={<LogPage setExpense={setExpense}/>} />
            <Route path="/create" element={<CreatePage/>} />
            <Route path="/edit" element={<EditPage expense={expense}/>} />
          </Routes>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Calista Dominitz</p>
      </footer>

    </BrowserRouter>
    </>
  );
}

export default App;
