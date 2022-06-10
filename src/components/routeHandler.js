import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import BookList from './bookList';
import Categories from './categories';

const RouteHanlder = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<BookList />} />
      <Route path="/categories" element={<Categories/>} />
    </Routes>
  </Router>
);

export default RouteHanlder;