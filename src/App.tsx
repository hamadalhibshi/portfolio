import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, NotFound } from "./pages";
import { Cursor, NavigationBar } from "./components";
import "./index.css";

const App = () => {
  return (
    <>
      <div
        className="fixed top-0 left-0 z-[-10] w-full min-h-screen
  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
      ></div>

      <BrowserRouter>
        <NavigationBar />
        <Cursor />
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
