import React from 'react'
import style from './style.sass'

const Name = () => (
  <React.Fragment>
    <h2 className={style.name}>Alberto</h2>
    <div className={style.social}>
      <a href="https://github.com/bpCodes">
        <svg
          className={style.icon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24">
          <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z" />
        </svg>
      </a>
      <a href="https://www.instagram.com/bp.codes/">
        <svg
          className={style.icon}
          data-name="Layer 1"
          id="Layer_1"
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg">
          <title />
          <path
            className={style.cls1}
            d="M83,23a22,22,0,0,1,22,22V83a22,22,0,0,1-22,22H45A22,22,0,0,1,23,83V45A22,22,0,0,1,45,23H83m0-8H45A30.09,30.09,0,0,0,15,45V83a30.09,30.09,0,0,0,30,30H83a30.09,30.09,0,0,0,30-30V45A30.09,30.09,0,0,0,83,15Z"/>
          <path
            className={style.cls1}
            d="M90.14,32a5.73,5.73,0,1,0,5.73,5.73A5.73,5.73,0,0,0,90.14,32Z"/>
          <path
            className={style.cls1}
            d="M64.27,46.47A17.68,17.68,0,1,1,46.6,64.14,17.7,17.7,0,0,1,64.27,46.47m0-8A25.68,25.68,0,1,0,90,64.14,25.68,25.68,0,0,0,64.27,38.47Z"/>
        </svg>
      </a>
      <a href="https://www.linkedin.com/in/bpcodes/">
        <svg
          className={style.icon}
          data-name="Layer 1"
          id="Layer_1"
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg">
          <title />
          <path
            className={style.cls1}
            d="M106.09,20.5a1.41,1.41,0,0,1,1.41,1.41v84.19a1.41,1.41,0,0,1-1.41,1.41H21.91a1.41,1.41,0,0,1-1.41-1.41V21.91a1.41,1.41,0,0,1,1.41-1.41h84.19m0-6.5H21.91A7.91,7.91,0,0,0,14,21.91v84.19A7.91,7.91,0,0,0,21.91,114h84.19a7.91,7.91,0,0,0,7.91-7.91V21.91A7.91,7.91,0,0,0,106.09,14Z"/>
          <rect
            className={style.cls1}
            height="41.73"
            width="11.73"
            x="37.27"
            y="50.4"/>
          <path
            className={style.cls1}
            d="M77.23,50.4C67.18,50.4,67,56.21,67,56.61V50.4H55V92.13H67V68.31c0-1.86.55-5.86,6.23-5.86s5.63,5.73,5.63,5.73v24H90.73v-26C90.73,53.85,84,50.4,77.23,50.4Z"/>
          <circle className={style.cls1} cx="43.13" cy="41.73" r="5.86" />
        </svg>
      </a>
    </div>
  </React.Fragment>
)
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
