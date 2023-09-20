import { Route, Routes } from 'react-router-dom';
import LayoutComponent from "../Components/layout.tsx";
import HomeComponent from "../Pages/Home/Home.tsx";
import DetailPlaylist from "../Pages/Detail/DetailPlaylist.tsx";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutComponent/>}>
        <Route
          path="/"
          element={<HomeComponent/>}
        />
        {/*<Route path="/top100" element={<Top100 />} />*/}
        {/*<Route path="/zingchart" element={<ChartHome />} />*/}
        {/*<Route path="/search" element={<Search />}>*/}
        {/*  <Route path=":keyword" element={<Search />} />*/}
        {/*</ Route>*/}
        <Route path="/playlist" element={<DetailPlaylist />}>
          <Route path=":playlistId" element={<DetailPlaylist />} />
        </Route>
        {/*<Route path="/artist" element={<Artist />}>*/}
        {/*  <Route path=":name" element={<Artist />} />*/}
        {/*</Route>*/}
        {/*<Route path="/mv" element={<MV />} />*/}
        {/*<Route path="/mv/:id" element={<DetailMV />} />*/}
      </Route>
    </Routes>
  );
};

export default RoutesApp;
