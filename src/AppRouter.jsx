import { Routes, Route } from "react-router-dom";
import App from "./App";
import MoviesPage from "./pages/MoviesPage";
import SupportPage from "./pages/SupportPage";
import SearchPage from "./pages/SearchPage";
import NotFoundPage from "./pages/NotFoundPage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRouter;