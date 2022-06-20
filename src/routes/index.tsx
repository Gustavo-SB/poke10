import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import NotFound from './../pages/notFound';
import Login from './../pages/login';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
    </Routes>
      )
}