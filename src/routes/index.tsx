import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "./../pages/notFound";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
