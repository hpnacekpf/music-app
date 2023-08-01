import RoutesApp from "./Routes/routes.tsx";
import { BrowserRouter } from 'react-router-dom';

function AppComponent() {
  return (
    <BrowserRouter>
      <RoutesApp/>
    </BrowserRouter>
  );
}

export default AppComponent;
