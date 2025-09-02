import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, NotFound } from './pages';
import { NavigationBar } from "./components";
import './index.css'

const App = () => {
  return (
    <div className="absolute top-0 z-[-2] min-h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <BrowserRouter>
      <NavigationBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
