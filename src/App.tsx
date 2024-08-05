import { Routes, Route } from "react-router-dom";
import "./App.css";
import Articles from "./pages/ArticlesPage/Articles";
import Article from "./pages/Article/Article";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/article" element={<Article />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
