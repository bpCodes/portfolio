/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react'

import uuidv4 from 'uuid/v4'

import style from './style.sass'

const MockUp = () => (
  <div className={style.items} id="mockup" key={uuidv4()}>
    <h2 className={style.subtitle}>MockUp</h2>
    <p className={style.description}>
      Bocetos finales para la elaboración de la aplicación, los bocetos
      presentan solo la versión horizontal ya que de acuerdo a los
      requerimientos se utilizará únicamente en pantalla de escritorio para
      mayor comodidad de uso de la aplicación.
    </p>
    <figure className={style.image}>
      {/* <img className={style.mock1} src={Venta} alt="" /> */}
      {/* <img src={Productos} alt="" /> */}
      <img
        src="https://ik.imagekit.io/bpdesigns/Portfolio/project2/tr:w-auto,ar-1-1,fo-auto/Venta_SyvWCrLiN.png"
        alt="MockUP del sistema"
        sizes="100%"/>
      <img
        src="https://ik.imagekit.io/bpdesigns/Portfolio/project2/tr:w-auto,ar-1-1,fo-auto/Factura_ByWPWRBUjE.png"
        alt="MockUP del sistema"
        sizes="100%"/>
      <img
        src="https://ik.imagekit.io/bpdesigns/Portfolio/project2/tr:w-auto,ar-1-1,fo-auto/Productos_SyMMAH8sE.png"
        alt="MockUP del sistema"
        sizes="100%"/>
      <img
        src="https://ik.imagekit.io/bpdesigns/Portfolio/project2/tr:w-auto,ar-1-1,fo-auto/Dashboard_S1Jf0rUoE.png"
        alt="MockUP del sistema"
        sizes="100%"/>
    </figure>
  </div>
)
const Color = () => (
  <div className={style.items} id="color" key={uuidv4()}>
    <h2 className={style.subtitle}>Color</h2>
    <p className={style.description}>
      Se eligió un color rojo ya que es parte de los colores que utiliza la
      empresa y se utilizó un color semi blanco de fondo para darle comodidad,
      no se agregaron muchos detalles en color ya que se quería mantener lo más
      simple posible.
    </p>
    <p>Colores principales</p>
    <div className={style.circle}>
      <span className={style.bg1} />
      <p className={style.bg}>#D83D3D</p>
      <span className={style.letter1} />
      <p className={style.letter}>#707070</p>
      <span className={style.principal1} />
      <p className={style.principal}>#D83D3D 80%</p>
    </div>
  </div>
)
const Tipografia = () => (
  <div className={style.items} id="tipografia" key={uuidv4()}>
    <h2 className={style.subtitle}>Tipografia</h2>
    <p className={style.description}>
      Se utilizó únicamente una tipografía sin serifa para darle un toque
      elegante y claro a la lectura para un fácil reconocimiento de todos los
      elementos en la aplicación.
    </p>
    <div className={style.typo}>
      <p className={style.sans1}>
        Source Sans Pro Regular ABCDEFGHIJKLMNOPQRSTUVWXYZ
      </p>
      <p className={style.sans2}>
        Source Sans Pro Bold ABCDEFGHIJKLMNOPQRSTUVWXYZ
      </p>
    </div>
  </div>
)
const Screen = () => (
  <div className={[style.items, style.screen]} id="screen" key={uuidv4()}>
    <h2 className={style.subtitle}>Screen</h2>
    <figure className={style.image}>
      {/* <img src={web1} alt="" /> */}
      <img
        src="https://ik.imagekit.io/bpdesigns/Portfolio/project2/tr:w-auto,ar-1-1,fo-auto/web1_HJdf0H8sE.png"
        alt="Screens del proyecto ya terminado"
        sizes="100%"/>
      <img
        src="https://ik.imagekit.io/bpdesigns/Portfolio/project2/tr:w-auto,ar-1-1,fo-auto/web2_S1xtG0HUsN.png"
        alt="Screens del proyecto ya terminado"
        sizes="100%"/>
      <img
        src="https://ik.imagekit.io/bpdesigns/Portfolio/project2/tr:w-auto,ar-1-1,fo-auto/web3_SkIGRBIj4.png"
        alt="Screens del proyecto ya terminado"
        sizes="100%"/>
      <img
        src="https://ik.imagekit.io/bpdesigns/Portfolio/project2/tr:w-auto,ar-1-1,fo-auto/web4_SJYfABUsE.png"
        alt="Screens del proyecto ya terminado"
        sizes="100%"/>
      {/* <img src={web2} alt="" /> */}
      {/* <img src={web3} alt="" /> */}
    </figure>
  </div>
)
const Header = () => (
  <React.Fragment>
    <figure className={style.image}>
      <img
        className={style.image}
        src="https://ik.imagekit.io/bpdesigns/Portfolio/work/tr:w-auto,ar-1-1,fo-auto/venta_SydRTrLiV.jpg"
        alt="Portada de sistema de venta"
        sizes="100%"/>
    </figure>
    <ul className={style.list}>
      <li className={style.item}>Rol: Developer</li>
      <li className={style.item}>
        Programacion: React, Javascript, NodeJS, Electron
      </li>
      <li className={style.item}>
        Tools: Adobe XD, Illustrator, Trello para gestionar el proyecto
      </li>
    </ul>
  </React.Fragment>
)
export default function Project() {
  return (
    <div className={style.container}>
      <Header />
      <MockUp />
      <Color />
      <Tipografia />
      <Screen />
    </div>
  )
}
