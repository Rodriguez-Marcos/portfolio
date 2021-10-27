import css from '../icons/css.svg'
import javascript from '../icons/javascript.svg'
import html from '../icons/html.svg'
import typescript from '../icons/typescript.svg'
import react from '../icons/react.svg'
import nodejs from '../icons/nodejs.svg'
import postgresql from '../icons/postgresql.svg'
import nextjs from '../icons/nextjs.svg'

export default function Icons() {
    return (<div className="iconcontainer">
        <img src={javascript.src} alt="javascripticon" className="javascripticon"/>
        <img src={html.src} alt="htmlicon" className="htmlicon" />
        <img src={css.src} alt="cssicon" className="cssicon" />
        <img src={nextjs.src} alt="nextjicon" className="nextjicon" />
        <img src={react.src} alt="reacticon" className="reacticon" />
        <img src={typescript.src} alt="typescripticon" className="typescripticon" />
        <img src={nodejs.src} alt="nodejicon" className="nodejicon" />
        <img src={postgresql.src} alt="postgresqlicon" className="postgresqlicon" />
    </div>)
}