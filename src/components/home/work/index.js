import React from 'react'
import { Link } from 'react-router-dom'
import style from './style.sass'

// const Principal = dato.map((data, index) => (
//   <figure className={style.work} key={index}>
//     <img src={data.url} alt="" />
//     <small>{data.name}</small> <img className={style.image} src="https://ik.imagekit.io/bpdesigns/Portfolio/work/tr:w-auto-400,ar-1-1,fo-auto/venta_SydRTrLiV.jpg" alt="" sizes="100%"/>
//   </figure>  <img className={style.image} src="https://ik.imagekit.io/bpdesigns/Portfolio/work/tr:w-auto-400,ar-1-1,fo-auto/portfolio_S10ATHIj4.jpg" alt="" sizes="100%" />
// ))   <img className={style.image} src={portfolio} alt="" />

export default function Work() {
  return (
    <div className={style.container}>
      <div className={style.work1}>
        <Link to="/projects/portfolio">
          <figure className={style.fig}>
            <img
              className={style.image}
              src="https://ik.imagekit.io/bpdesigns/Portfolio/work/tr:dpr-auto,tr:w-auto-500,ar-1-1,c-at_max,pr-true/portfolio_S10ATHIj4.jpg"
              alt="Portada de Portfolio"
              sizes="13.188em"/>
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
            <img
              className={style.image}
              src="https://ik.imagekit.io/bpdesigns/Portfolio/work/tr:dpr-auto,tr:w-auto-500,ar-1-1,c-at_max,pr-true/venta_SydRTrLiV.jpg"
              alt="Portada de sistema de venta"
              sizes="13.188em"/>
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
