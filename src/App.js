import logo from './logo.svg';
import './App.css';
import AddProduct from './components/AddProduct';
import SearchProduct from './components/SearchProduct';
import DeleteProduct from './components/DeleteProduct';
import ViewAll from './components/ViewAll';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddProduct/>}/>
      <Route path="/search" element={<SearchProduct/>}/>
      <Route path="/delete" element={<DeleteProduct/>}/>
      <Route path="/View" element={<ViewAll/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
