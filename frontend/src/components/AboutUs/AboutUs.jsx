import AboutUsCard from "../AboutUsCard/AboutUsCard";
import styles from "./AboutUs.module.css";

export default function AboutUs() {
  /* const arrayOfUs = [
    {
      name: "Romain Constant",
      Title: "The Commander",
      imgSrc: "ici",
      email: "romain.constant59@gmail.com",
      linkedin: "",
      Github: "",
    },

    {
      name: "Tessa Fondeur",
      Title: "First Pokemon in the Space",
      imgSrc: "ici",
      email: "tessafondeur97@gmail.com",
      linkedin: "https://www.linkedin.com/in/tessa-fondeur/",
      Github: "https://github.com/TessaFondeur",
    },
    {
      name: "Marie Vangrevelynghe",
      Title: "Spacedata",
      imgSrc: "ici",
      email: "keiiskyx@gmail.com",
      linkedin: "",
      Github: "",
    },

    {
      name: "Hugo Hanocq",
      Title: "",
      imgSrc: "ici",
      email: "hhanocq@gmail.com",
      linkedin: "",
      Github: "",
    },

    {
      name: "Alexandre Rohde Ferreira",
      Title: "",
      imgSrc: "ici",
      email: "a.rohde.ferreira@gmail.com",
      linkedin: "www.linkedin.com/in/AlexRohdeF",
      Github: "https://github.com/KriZpAlex",
    },

    {
      name: "Jocelyn Deloose",
      Title: "",
      imgSrc: "ici",
      email: "jocelyn.deloose59@gmail.com",
      linkedin: "https://www.linkedin.com/in/jocelyn-deloose/",
      Github: "https://github.com/JocelynDeloose",
    },
  ]; */
  return (
    <div className={styles.abUsContainer}>
      <AboutUsCard />
    </div>
  );
}
