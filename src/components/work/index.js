/* eslint-disable max-len */
import React from 'react'
import { Link } from 'react-router-dom'
import style from './style.sass'
import portfolio from './portfolio.jpg'
import venta from './venta.jpg'

const Projects = () => (
  <React.Fragment>
    <article className={style.project}>
      <figure className={style.image}>
        <Link className={style.link} to="/projects/portfolio">
          <img src={portfolio} alt="" />
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
          <img src={venta} alt="" />
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
