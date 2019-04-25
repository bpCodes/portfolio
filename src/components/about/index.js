import React from 'react'
import style from './style.sass'

const Name = () => <h2 className={style.name}>Alberto</h2>
const Description = () => (
  <React.Fragment>
    <p className={style.description}>
      Hola, soy un desarrollador y diseñador apasionado de la tecnología y
      seguridad informática, he llegado a desarrollar proyectos en los cuales
      los clientes buscan una manera más eficaz de utilizar sus sistemas y de
      una manera más simple y elegante.
    </p>
    <p className={style.area}>Areas en las que tengo experiencia:</p>
  </React.Fragment>
)
const Skills = () => (
  <ul className={style.skill}>
    <li className={style.item}>Javascript</li>
    <li className={style.item}>React</li>
    <li className={style.item}>Adobe XD</li>
    <li className={style.item}>UI/UX</li>
    <li className={style.item}>Diseño</li>
    <li className={style.item}>Photoshop</li>
  </ul>
)

export default function about() {
  return (
    <div className={style.container}>
      <Name />
      <Description />
      <Skills />
    </div>
  )
}
