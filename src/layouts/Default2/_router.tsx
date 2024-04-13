import { Route, Routes } from "react-router-dom";

import Proposals from "@/layouts/Default2/Proposals";
import LayoutDefault2 from '@/layouts/Default2';

const LayoutDefaultRoutes2 = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutDefault2 />}>
        <Route path="proposals" element={<Proposals />} />
      </Route>
    </Routes>
  )
}

export default LayoutDefaultRoutes2