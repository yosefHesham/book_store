import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import BookList from './bookList';

const RouteHanlder = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<BookList />} />
    </Routes>
  </Router>
);

export default RouteHanlder;