import React, { useState } from "react";

function Sugestoes() {
  const suggestions = [
    {
      imgSrc: "assets/img/bad.vibes.memes.svg",
      alt: "bad.vibes.memes.svg",
      nome: "bad.vibes.memes",
      razao: "Segue você"
    },
    {
      imgSrc: "assets/img/chibirdart.svg",
      alt: "chibirdart",
      nome: "chibirdart",
      razao: "Segue você"
    },
    {
      imgSrc: "assets/img/razoesparaacreditar.svg",
      alt: "razoesparaacreditar",
      nome: "razoesparaacreditar",
      razao: "Novo no Instagram"
    },
    {
      imgSrc: "assets/img/adorable_animals.svg",
      alt: "adorable_animals",
      nome: "adorable_animals",
      razao: "Segue você"
    },
    {
      imgSrc: "assets/img/smallcutecats.svg",
      alt: "smallcutecats",
      nome: "smallcutecats",
      razao: "Segue você"
    }
  ];

  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {suggestions.map((suggestion, index) => (
        <div className="sugestao" key={index}>
          <div className="usuario">
            <img src={suggestion.imgSrc} alt={suggestion.alt} />
            <div className="texto">
              <div className="nome">{suggestion.nome}</div>
              <div className="razao">{suggestion.razao}</div>
            </div>
          </div>
          <div className="seguir">Seguir</div>
        </div>
      ))}
    </div>
  );
}

export default function SideBar() {
  const [user, setUser] = useState("");
  const [photo, setPhoto] = useState("assets/img/catanacomics.svg");

  return (
    <div className="sidebar">
      <div className="usuario">
        <img
          onClick={() => {
            const newPhoto = prompt("Insira o URL da imagem: ");
            if (newPhoto) setPhoto(newPhoto);
          }}
          src={photo || "assets/img/catanacomics.svg"}
          alt="imagem de perfil"
        />
        <div className="texto">
          <span>
            <strong>{user || "Nome do usuário"}</strong>{" "}
            <ion-icon
              onClick={() => {
                const newUser = prompt("Digite seu nome: ");
                if (newUser) setUser(newUser);
              }}
              name="pencil"
            ></ion-icon>
          </span>
        </div>
      </div>

      <Sugestoes />

      <div className="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div className="copyright">
        © 2021 INSTAGRAM DO FACEBOOK
      </div>
    </div>
  );
}
