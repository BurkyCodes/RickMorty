import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import Home from "./pages/Home";
import Episodes from "./components/Episodes/Episodes";

const Episode = lazy(() => import("./components/Episodes/Episode"));
const Character = lazy(() => import("./components/AllCharacters/Character"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episode/:id" element={<Episode />} />
        <Route path="/character/:id" element={<Character />} />
        <Route path="/search" element={<Episodes />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
