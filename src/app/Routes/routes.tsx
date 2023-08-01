import { Route, Routes } from 'react-router-dom';
import LayoutComponent from "../Components/layout.tsx";
import HomeComponent from "../Pages/Home/Home.tsx";
import DetailComponent from "../Pages/Detail/Detail.tsx";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutComponent/>}>
        <Route
          path="/"
          element={<HomeComponent/>}
        />
        <Route path="/detail" element={<DetailComponent/>}/>
      </Route>
    </Routes>
  );
};

export default RoutesApp;
