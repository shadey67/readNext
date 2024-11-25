import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import BookRecommendation from "./pages/bookRecommendation";
import FilmRecommendation from "./pages/filmRecommendation";
import EngineerRecommendation from "./components/recommendedEngineer";

export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/bookRecommendation" element={<BookRecommendation/>}/>
          <Route path="/filmRecommendation" element={<FilmRecommendation/>}/>
          <Route path="/engineerRecommendation" element={<EngineerRecommendation/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

