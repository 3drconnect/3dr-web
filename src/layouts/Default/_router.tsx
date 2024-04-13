import { Route, Routes } from "react-router-dom";

import Home from '@/layouts/Default/Home';
import LayoutDefault from '@/layouts/Default';

const LayoutDefaultRoutes = () => {
  return (

    <Routes>
      <Route path="/" element={<LayoutDefault />}>
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default LayoutDefaultRoutes