import Atropos from "atropos/react"
import styles from "../styles/Nave.module.css"
import nave from "../images/nave.png"
import fondoNave from "../images/fondo-nave.png"
import planeta from "../images/planeta-nave.png"
import planeta1 from "../images/planeta-nave1.png"
import planeta2 from "../images/planeta-nave2.png"
import {motion} from "framer-motion"
import {Props} from "../interfaces/interfaces"


export default function Nave(props:Props): JSX.Element {
    let isVisibleEl = props.isVisible || false
    return (
        <div className={isVisibleEl? styles.divnave + ' ' + styles.venir : styles.divnave + ' ' + styles.irse}>
            <Atropos
                className={styles.atropos}
                alwaysActive={true}
            >
                <div data-atropos-offset="2" className={styles.divnave1}>
                    <img data-atropos-offset="-10" src={fondoNave.src} alt="nave" className={styles.imgFondoNave} />
                    <img data-atropos-offset="-10" src={planeta.src} alt="planeta" className={styles.planeta} />
                    <img data-atropos-offset="-10" src={planeta1.src} alt="planeta1" className={styles.planeta1} />
                    <img data-atropos-offset="-10" src={planeta2.src} alt="planeta2" className={styles.planeta2} />
                    <img data-atropos-offset="3" src={nave.src} alt="nave" className={styles.imgNave} />
                    <h1 data-atropos-offset="-7" className={styles.title}>Hola</h1>
                </div>
            </Atropos>
        </div>
    )
}