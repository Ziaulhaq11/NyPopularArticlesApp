import { Routes, Route } from "react-router-dom";
import "./App.css";
import Articles from "./pages/ArticlesPage/Articles";
import Article from "./pages/Article/Article";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/article" element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;
