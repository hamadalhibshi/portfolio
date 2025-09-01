import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, NotFound } from './pages';
import { NavigationBar } from "./components";
import './index.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <NavigationBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
