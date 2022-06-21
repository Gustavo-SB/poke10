import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import NotFound from './../pages/notFound';
import Login from './../pages/login';
import Register from './../pages/register';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
      )
}