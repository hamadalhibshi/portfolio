import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Contact, Home, NotFound, Projects } from './pages';
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
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
