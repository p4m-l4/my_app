//import logo from './logo.svg';
import { BrowserRouter, Routes, Route }  from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar';
import QuestionAnswer from './components/questionAnswer';
import Ruffle1 from './components/ruffle1';
import Ruffle2 from './components/ruffle2';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/navbar' element={<NavBar/>}></Route>
        <Route path='/question-answer' element={<QuestionAnswer/>}></Route>
        <Route path='/ruffle1' element={<Ruffle1/>}></Route>
        <Route path='/ruffle2' element={<Ruffle2/>}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
