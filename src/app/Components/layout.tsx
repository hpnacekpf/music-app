import { NavbarComponent } from "./Partials/Navbar.tsx";
import { HeaderComponent } from "./Partials/Header.tsx";

function LayoutComponent() {
  const  links= [
    {
      "link": "/about",
      "label": "Features"
    },
    {
      "link": "/pricing",
      "label": "Pricing"
    },
    {
      "link": "/learn",
      "label": "Learn"
    },
    {
      "link": "/community",
      "label": "Community"
    }
  ];

  return (
    <div>
      <HeaderComponent links={links}/>
      <NavbarComponent/>
    </div>
  );
}

export default LayoutComponent;
