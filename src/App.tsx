import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, NotFound, PdfViewer } from "./pages";
import { Cursor } from "./components";
import "./index.css";

const App = () => {
  return (
    <>
      <div
        className="fixed top-0 left-0 w-full min-h-screen
  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] z-[-10]"
      ></div>
      <BrowserRouter>
        <Cursor />
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/pdf" element={<PdfViewer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
