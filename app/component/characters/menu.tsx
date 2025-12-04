import { NavLink } from "react-router";

type MenuLinkT = {
  to: string;
  children: React.ReactNode;
};

export default function MenuLink() {
  return (
    <>
    <NavLink
      to="/"
      style={{
        marginRight: "1rem",
        textDecoration: "none",
        color: "blue",
        fontWeight: "bold"
      }}
    >
      Accueil
    </NavLink>
       <NavLink
      to="/contenu"
      style={{
        marginRight: "1rem",
        textDecoration: "none",
        color: "blue",
        fontWeight: "bold"
      }}
    >
      Rick & Morty 
   
    </NavLink>
    </>
  );
}