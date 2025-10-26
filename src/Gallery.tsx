import React from "react";
import "./gallery.css"

// Definir la interfaz para los estilos de corte
interface HaircutStyle {
id: number;
name: string;
description: string;
imageUrl: string;
}

const Gallery: React.FC = () => {
  // Lista de estilos (sin funcionalidad de agregar/eliminar)
const styles: HaircutStyle[] = [
    {
    id: 1,
    name: "Corte Clásico",
    description: "Un corte de pelo clásico y elegante.",
    imageUrl: "/public/corte clasico.jpeg",
    },
    {
    id: 2,
    name: "Degradado",
    description: "Degradado moderno y definido.",
    imageUrl: "/public/2.jpeg",
    },
    {
    id: 3,
    name: "Undercut",
    description: "Estilo moderno con laterales rasurados.",
    imageUrl: "/public/3.jpeg",
    },
    {
    id: 4,
    name: "Texturizado",
    description: "Corte con textura para un look despeinado.",
    imageUrl: "/public/4.jpeg",
    },
    {
    id: 5,
    name: "Fade",
    description: "Fade bajo con tinte degradado.",
    imageUrl: "/public/5.jpeg",
    },
    {
    id: 6,
    name: "Mohawk",
    description: "Mohawk lateral con líneas definidas.",
    imageUrl: "/public/6.jpeg",
    },
    {
    id: 7,
    name: "Taper Fade",
    description: "Taper fade con corte superior texturizado.",
    imageUrl: "/public/7.jpeg",
    },
    {
    id: 8,
    name: "Caesar",
    description: "Corte corto en la parte superior con corte lateral.",
    imageUrl: "/public/8.jpeg",
    },
    {
    id: 9,
    name: "Buzz Cut",
    description: "Corte muy corto y uniforme.",
    imageUrl: "/public/9.jpeg",
    },
    {
    id: 10,
    name: "Spiky",
    description: "Corte con puntas para un look moderno.",
    imageUrl: "/public/10.jpeg",
    },
    {
    id: 11,
    name: "Side Part",
    description: "Parte lateral clásica con acabado pulido.",
    imageUrl: "/public/11.jpeg",
    },
    {
    id: 12,
    name: "Quiff",
    description: "Quiff con volumen en la parte superior.",
    imageUrl: "/public/12.jpeg",
    },
    {
    id: 13,
    name: "Slick Back",
    description: "Corte peinado hacia atrás con gel.",
    imageUrl: "/public/13.jpeg",
    },
    {
    id: 14,
    name: "Faux Hawk",
    description: "Estilo similar al mohawk sin rasurar.",
    imageUrl: "/public/14.jpeg",
    },
    {
    id: 15,
    name: "Textured Crop",
    description: "Corte corto con textura y volumen.",
    imageUrl: "/public/15.jpeg",
    },
    {
    id: 16,
    name: "Long Layers",
    description: "Capas largas para cabello más largo.",
    imageUrl: "/public/16.jpeg",
    },
    {
    id: 17,
    name: "Pompadour",
    description: "Pompadour con volumen en la parte superior.",
    imageUrl: "/public/17.jpeg",
    },
    {
    id: 18,
    name: "Slicked Back",
    description: "Corte peinado hacia atrás con volumen.",
    imageUrl: "/public/18.jpeg",
    },
    {
    id: 19,
    name: "Disconnected Fade",
    description: "Fade con contraste entre superior e inferior.",
    imageUrl: "/public/19.jpeg",
    },
    {
    id: 20,
    name: "Curly Fade",
    description: "Fade con cabello rizado en la parte superior.",
    imageUrl: "/public/19.jpeg",
    },
];

return (
    <div className="gallery-container">
      {/* Título de la galería */}
    <h2 className="gallery-title">Galería de Estilos</h2>
      {/* Subtítulo de la galería */}
    <p className="gallery-description">Explora nuestros estilos de corte de pelo disponibles</p>

      {/* Carrusel horizontal con efecto hover */}
    <section className="galeria">
        {styles.map((style) => (
          /* Contenedor de cada imagen */
        <div key={style.id} className="image-wrapper">
            {/* Imagen del estilo */}
            <img
            src={style.imageUrl}
            alt={style.name}
            className="style-image"
            />
            {/* Información del estilo (nombre y descripción) */}
            <div className="image-info">
              {/* Nombre del corte */}
            <h3>{style.name}</h3>
              {/* Descripción del corte */}
            <p>{style.description}</p>
            </div>
        </div>
        ))}
    </section>
    </div>
);
};

export default Gallery;