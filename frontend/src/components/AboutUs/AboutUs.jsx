import React from "react";
import AboutUsCard from "../AboutUsCard/AboutUsCard";
import photoRomain from "../../assets/images/romaincosmo1.jpg";
import photoTessa from "../../assets/images/tessacosmo1.jpg";
import photoMarie from "../../assets/images/mariecosmo1.jpg";
import photoHugo from "../../assets/images/hugocosmo1.jpg";
import photoAlexandre from "../../assets/images/alexcosmo1.jpg";
import photoJocelyn from "../../assets/images/jocelyncosmo1.jpg";
import styles from "./AboutUs.module.css";

const arrayOfUs = [
  {
    name: "🇫🇷 Romain Constant 🇫🇷",
    title: '"The Commander"',
    imgSrc: `${photoRomain}`,
    email: "romain.constant59@gmail.com",
    linkedin: "https://www.linkedin.com/in/romainconstant/",
    github: "https://github.com/Romain-Constant",
  },

  {
    name: "🇧🇪 Tessa Fondeur 🇧🇪",
    title: '"First Pokemon in the Space"',
    imgSrc: `${photoTessa}`,
    email: "tessafondeur97@gmail.com",
    linkedin: "https://www.linkedin.com/in/tessa-fondeur/",
    github: "https://github.com/TessaFondeur",
  },
  {
    name: "🇫🇷 Marie Vangrevelynghe 🇫🇷",
    title: '"Spacedata"',
    imgSrc: `${photoMarie}`,
    email: "keiiskyx@gmail.com",
    linkedin: "https://www.linkedin.com/in/marie-vangrevelynghe/",
    github: "https://github.com/MarieVanGreves",
  },

  {
    name: "🇫🇷 Hugo Hanocq 🇫🇷",
    title: '"Sorry to be late"',
    imgSrc: `${photoHugo}`,
    email: "hhanocq@gmail.com",
    linkedin: "https://www.linkedin.com/in/hugo-hanocq-891342183/",
    github: "https://github.com/hugocoding21",
  },

  {
    name: "🇬🇷 Alexandre Rohde Ferreira 🇬🇷",
    title: '"Space Smog"',
    imgSrc: `${photoAlexandre}`,
    email: "a.rohde.ferreira@gmail.com",
    linkedin: "https://www.linkedin.com/in/AlexRohdeF/",
    github: "https://github.com/KriZpAlex",
  },

  {
    name: "🇫🇷 Jocelyn Deloose 🇫🇷",
    title: '"Usain Bald"',
    imgSrc: `${photoJocelyn}`,
    email: "jocelyn.deloose59@gmail.com",
    linkedin: "https://www.linkedin.com/in/jocelyn-deloose/",
    github: "https://github.com/JocelynDeloose",
  },
];

export default function AboutUs() {
  return (
    <div className={styles.abUsContainer}>
      {arrayOfUs.map((item) => (
        <AboutUsCard
          key={item.name}
          name={item.name}
          title={item.title}
          imgSrc={item.imgSrc}
          email={item.email}
          github={item.github}
          linkedin={item.linkedin}
        />
      ))}
    </div>
  );
}
