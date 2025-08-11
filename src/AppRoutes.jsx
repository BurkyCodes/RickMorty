import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Episodes from "./components/Episodes/Episodes"
import Episode from "./components/Episodes/Episode"
import Character from "./components/AllCharacters/Character"
import SearchPage from "./components/SearchPage/SearchPage"

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episode/:id" element={<Episode />} />
        <Route path="/character/:id" element={<Character />} />
        <Route path="/search" element={<Episodes />} />
    </Routes>
  )
}

export default AppRoutes