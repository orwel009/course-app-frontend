import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddCourse from './components/AddCourse';
import ViewCourse from './components/ViewCourse';
import Search from './components/Search';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/add' element={<AddCourse/>} />
          <Route path='/' element={<ViewCourse/>} />
          <Route path='/search' element={<Search/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
