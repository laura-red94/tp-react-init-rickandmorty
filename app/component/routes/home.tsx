import type { Route } from "./+types/home";

import MenuLink from "@/component/menu";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Page Home" },
    { name: "description", content: "Page d'accueil du TP" },
  ];
}

export default function Home() {
  return (
    <>
    <div>
      <h1>Page d’accueil</h1>
      <p>Bienvenue dans mon projet React (tp)</p>

    </div>
     <div className="homepage">
  <section className="universe-section">
    <h1 className="universe-title">L'Univers Rick et Morty</h1>
    <h2 className="universe-subtitle">"Wubba Lubba Dub Dub!"</h2>

    <p className="universe-text">
      *Rick et Morty* est une série d'animation créée par 
      <span className="highlight"> Justin Roiland </span> et 
      <span className="highlight"> Dan Harmon</span>. Elle suit les aventures 
      d’un scientifique excentrique, Rick Sanchez, et de son petit-fils, Morty.
    </p>

    <p className="universe-text">
      Grâce à son <span className="highlight">pistolet portail</span>, Rick peut voyager 
      entre des dimensions infinies, donnant lieu à des histoires imprévisibles mélangeant 
      humour noir et réflexions philosophiques.
    </p>

    <div className="quote-box">
      "Nobody exists on purpose. Nobody belongs anywhere. Everybody's gonna die. Come watch TV."
      <div className="quote-author">— Morty Smith</div>
    </div>

    <div className="concepts">
      <div className="concept-card">
        <div className="concept-icon">🌀</div>
        <h3 className="concept-title">Multivers</h3>
        <p className="concept-description">
          Des réalités parallèles offrant d’infinies variations de l’univers.
        </p>
      </div>

      <div className="concept-card">
        <div className="concept-icon">🧪</div>
        <h3 className="concept-title">Science-Fiction</h3>
        <p className="concept-description">
          Technologies absurdes, expériences loufoques et voyages impossibles.
        </p>
      </div>

      <div className="concept-card">
        <div className="concept-icon">😂</div>
        <h3 className="concept-title">Humour Noir</h3>
        <p className="concept-description">
          Satire, absurdité et cynisme au cœur du ton de la série.
        </p>
      </div>
    </div>
  </section>
</div>
</>
  );
}