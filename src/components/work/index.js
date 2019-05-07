/* eslint-disable max-len */
import React from 'react'
import { Link } from 'react-router-dom'
import style from './style.sass'

const Projects = () => (
  <React.Fragment>
    <article className={style.project}>
      <figure className={style.image}>
        <Link className={style.link} to="/projects/portfolio">
          {/* <img src={portfolio} alt="" /> */}
          <img
            className={style.image}
            src="https://ik.imagekit.io/bpdesigns/Portfolio/work/tr:w-auto,ar-1-1,fo-auto/portfolio_S10ATHIj4.jpg"
            alt="Portada de Portfolio"
            sizes="100%"/>
        </Link>
      </figure>
      <div className={style.description}>
        <h2>Portfolio</h2>
        <p>
          Diseño de página web con un diseño simple y un performance alto para
          mostrar de una manera eficiente y clara mis conocimientos y trabajos
          tratando temas como interacciones y algún framework como React.
        </p>
      </div>
    </article>
    <article className={style.project}>
      <figure className={style.image}>
        <Link className={style.link} to="/projects/sistema-venta">
          {/* <img src={venta} alt="" /> */}
          <img
            className={style.image}
            src="https://ik.imagekit.io/bpdesigns/Portfolio/work/tr:w-auto,ar-1-1,fo-auto/venta_SydRTrLiV.jpg"
            alt="Portada de sistema de venta"
            sizes="100%"/>
        </Link>
      </figure>
      <div className={style.description}>
        <h2>Sistema de inventario</h2>
        <p>
          Diseño e implementacion de un sistema de inventario para facilitar el
          manejo de datos asi como las ventas con un diseño simple y facil para
          dar rapidez en las operacion con el sistema
        </p>
      </div>
    </article>
  </React.Fragment>
)

export default function Work() {
  return (
    <section className={style.container}>
      <Projects />
    </section>
  )
}
