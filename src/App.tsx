import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, NotFound } from './pages';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
