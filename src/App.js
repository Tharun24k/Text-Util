import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import TextTransform from './Components/TextTransform';
import TextTransformClass from './Components/TextTransformClass';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header title={"Tharun's Page"} />
        <Routes>
          <Route path='/FunctionMethod' element={<TextTransform name={"Text Transform Area Function Method"} />}></Route>
          <Route path='/ClassMethod' element={<TextTransformClass name={"Text Transform Area Class Method"} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
