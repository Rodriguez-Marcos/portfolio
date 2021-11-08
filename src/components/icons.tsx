import css from '../icons/css.svg'
import javascript from '../icons/javascript.svg'
import html from '../icons/html.svg'
import typescript from '../icons/typescript.svg'
import react from '../icons/react.svg'
import nodejs from '../icons/nodejs.svg'
import postgresql from '../icons/postgresql.svg'
import nextjs from '../icons/nextjs.svg'
import nestjs from '../icons/nestjs.svg'
import express from '../icons/express.png'

export default function Icons() {
    return (<div className="iconcontainer">
        <dfn data-info="Javascript ES6"><img src={javascript.src} alt="javascripticon" className="javascripticon"/></dfn>
        <dfn data-info="HTML 5"><img src={html.src} alt="htmlicon" className="htmlicon" /></dfn>
        <dfn data-info="CSS"><img src={css.src} alt="cssicon" className="cssicon" /></dfn>
        <dfn data-info="Nextjs"><img src={nextjs.src} alt="nextjicon" className="nextjicon" /></dfn>
        <dfn data-info="React"><img src={react.src} alt="reacticon" className="reacticon" /></dfn>
        <dfn data-info="Typescript"><img src={typescript.src} alt="typescripticon" className="typescripticon" /></dfn>
        <dfn data-info="Nodejs"><img src={nodejs.src} alt="nodejicon" className="nodejicon" /></dfn>
        <dfn data-info="Nestjs"><img src={nestjs.src} alt="nestjsicon" className="nestjs" /></dfn>
        <dfn data-info="Express"><img src={express.src} alt="expressicon" className="express" /></dfn>
        <dfn data-info="PostgresSQL"><img src={postgresql.src} alt="postgresqlicon" className="postgresqlicon" /></dfn>
    </div>)
}