import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import CharactersPage from "../pages/CharactersPage";
import EpisodesPage from "../pages/EpisodesPage";
import Header from "../components/Header";
import LocationsPage from "../pages/LocationsPage";
import NotFoundPage from "../pages/NotFoundPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/personajes" />} />
        <Route path="/personajes" element={<CharactersPage />} />
        <Route path="/episodios" element={<EpisodesPage />} />
        <Route path="/ubicaciones" element={<LocationsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
