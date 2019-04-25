/* eslint-disable max-len */
import React from 'react'
import { Link } from 'react-router-dom'
import style from './style.sass'
import perico from './perico.jpg'

const Projects = () => (
  <React.Fragment>
    <article className={style.project}>
      <figure className={style.image}>
        <Link className={style.link} to="/projects/portfolio">
          <img src={perico} alt="" />
        </Link>
      </figure>
      <div className={style.description}>
        <h2>Portfolio</h2>
        <p>
          Lorem ipsum dolor sit eos assumenda asperiores repellat minus illum ea
          debitis! Voluptate, solu Lorem ipsum dolor sit eos assumenda
          asperiores repellat minus illum ea debitis! Voluptate, solu Lorem
          ipsum dolor sit eos assumenda asperiores repellat minus illum ea
          debitis! Voluptate, solu
        </p>
      </div>
    </article>
    <article className={style.project}>
      <figure className={style.image}>
        <Link className={style.link} to="/projects/sistema-venta">
          <img src={perico} alt="" />
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
