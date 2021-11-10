import Atropos from "atropos/react";
import styles from "../styles/Nave.module.css";
import styles2 from "../styles/ProyectoIndividual.module.css";
import nave from "../images/nave.png";
import { Props } from "../interfaces/interfaces";
import github from "../icons/github.svg";

export default function ProtectoIndividual(props: Props): JSX.Element {
  let isVisibleEl = props.isVisible || false;
  return (
    <a
      target="_blank"
      rel="noopener noreferrer" href="https://pi-food-main.vercel.app/"
    >
      <div
        className={
          isVisibleEl
            ? styles.divnave + " " + styles2.venir
            : styles.divnave + " " + styles2.irse
        }
      >
        <Atropos className={styles.atropos} alwaysActive={true}>
          <div data-atropos-offset="2" className={styles.divnave1}>
            <img
              data-atropos-offset="-15"
              src={
                "https://raw.githubusercontent.com/Rodriguez-Marcos/PI-Food-main/master/imagenes/home.jpg"
              }
              alt="nave"
              className={styles2.imgFondoNave}
            />
            <img
              data-atropos-offset="3"
              src={nave.src}
              alt="nave"
              className={styles2.imgNave}
            />
            <h1 data-atropos-offset="-7" className={styles2.title}>
              PI FoodMan
            </h1>
            <a
              target="_blank"
              rel="noopener noreferrer" href="https://github.com/Rodriguez-Marcos/PI-Food-main"
            >
              <img
                src={github.src}
                alt="github"
                className={styles2.imgGithub}
              />
            </a>
          </div>
        </Atropos>
      </div>
    </a>
  );
}
