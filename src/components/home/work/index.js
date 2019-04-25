import React from 'react'
import { Link } from 'react-router-dom'
import style from './style.sass'
import perico from './perico.jpg'

// const Principal = dato.map((data, index) => (
//   <figure className={style.work} key={index}>
//     <img src={data.url} alt="" />
//     <small>{data.name}</small>
//   </figure>
// ))

export default function Work() {
  return (
    <div className={style.container}>
      <div className={style.work1}>
        <Link to="/projects/portfolio">
          <figure className={style.fig}>
            <img className={style.image} src={perico} alt="" />
          </figure>
        </Link>
        <h2 className={style.description}>Portfolio</h2>
        <ul className={style.list}>
          <li>Diseño simple</li>
          <li>Interacciones</li>
          <li>Responsive Design</li>
          <li>React</li>
        </ul>
      </div>
      <div className={style.work2}>
        <Link className={style.link} to="/projects/sistema-venta">
          <figure className={style.fig}>
            <img className={style.image} src={perico} alt="" />
          </figure>
        </Link>
        <h2 className={style.description}>Sistema de ventas</h2>
        <ul className={style.list}>
          <li>Diseño simple</li>
          <li>Diseño Visual</li>
          <li>Performance</li>
          <li>Electron</li>
        </ul>
      </div>
    </div>
  )
}
