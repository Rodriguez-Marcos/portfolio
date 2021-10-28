import Atropos from "atropos/react";
import styles from "../styles/Nave.module.css";
import nave from "../images/nave.png";
import fondoNave from "../images/fondo-nave.png";
import planeta from "../images/planeta-nave.png";
import planeta1 from "../images/planeta-nave1.png";
import planeta2 from "../images/planeta-nave2.png";
import { Props } from "../interfaces/interfaces";
import gmail from "../icons/gmail.svg";
import linkedin from "../icons/linkedin.svg";
import github from "../icons/github.svg";

export default function Nave(props: Props): JSX.Element {
  let isVisibleEl = props.isVisible || false;
  return (
    <div
      className={
        isVisibleEl
          ? styles.divnave + " " + styles.venir
          : styles.divnave + " " + styles.irse
      }
    >
      <Atropos className={styles.atropos} alwaysActive={true}>
        <div data-atropos-offset="2" className={styles.divnave1}>
          <img
            data-atropos-offset="-10"
            src={fondoNave.src}
            alt="nave"
            className={styles.imgFondoNave}
          />
          <img
            data-atropos-offset="-1"
            src={planeta.src}
            alt="planeta"
            className={styles.planeta}
          />
          <img
            data-atropos-offset="-7"
            src={planeta1.src}
            alt="planeta1"
            className={styles.planeta1}
          />
          <img
            data-atropos-offset="-7"
            src={planeta2.src}
            alt="planeta2"
            className={styles.planeta2}
          />
          <img
            data-atropos-offset="3"
            src={nave.src}
            alt="nave"
            className={styles.imgNave}
          />
          <h1 data-atropos-offset="7" className={styles.title}>
            Informacion de contacto
          </h1>
           <div data-atropos-offset="7" className={styles.iconcontainer}>
            <a target="_blank" href="mailto:rodriguezzmarcos99@gmail.com">
                <img  src={gmail.src} className={styles.gmail} alt="gmail" />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/marcos--rodriguez/">
                <img  src={linkedin.src} alt="linkedin" className={styles.linkedin}/>
            </a>
            <a href="https://github.com/Rodriguez-Marcos" target="_blank">
                <img  src={github.src} alt="github" className={styles.github}/>
            </a>
            </div>
        </div>
      </Atropos>
    </div>
  );
}
