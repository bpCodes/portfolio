/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'

import uuidv4 from 'uuid/v4'

import style from './style.sass'
import DATA from '../data.json'

import perico from './perico.jpg'
import mock1 from './mock1.png'
import mock2 from './mock2.png'

// Component that attaches scroll to top hanler on router change
// renders nothing, just attaches side effects
export const ScrollToTopControlller = () => {
  // this assumes that current router state is accessed via hook
  // but it does not matter, pathname and search (or that ever) may come from props, context, etc.

  // just run the effect on pathname and/or search change
  useEffect(() => {
    try {
      // trying to use new API - https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    } catch (error) {
      // just a fallback for older browsers
      window.scrollTo(0, 0)
    }
  })

  // renders nothing, since nothing is needed
  return null
}

const MockUp = () => (
  <div className={style.items} id="mockup" key={uuidv4()}>
    <h2 className={style.subtitle}>MockUp</h2>
    <p className={style.description}>
      Se elaboraron algunos bocetos para observar el posicionamiento de los
      objetos y ver si se debía utilizar un formato vertical u horizontal, se
      elaboró una encuesta a personas cercanas y la mayoría eligió el formato
      horizontal ya que les hace ver todo el contenido con más facilidad ya que
      no se debe hacer scroll y te invita a investigar más la página.
    </p>
    <figure className={style.image}>
      <img className={style.mock1} src={mock1} alt="" />
      <img src={mock2} alt="" />
    </figure>
  </div>
)
const Color = () => (
  <div className={style.items} id="color" key={uuidv4()}>
    <h2 className={style.subtitle}>Color</h2>
    <p className={style.description}>
      Se eligió un color verde para darle un toque de armonía y frescura a la
      pagina. Y los colores cercanos al negro para no cansar la vista así como
      un tono grisáceo para que la lectura sea mas cómoda
    </p>
    <p>Colores principales</p>
    <div className={style.circle}>
      <span className={style.bg1} />
      <p className={style.bg}>#E2FFEC</p>
      <span className={style.letter1} />
      <p className={style.letter}>#707070</p>
      <span className={style.principal1} />
      <p className={style.principal}>#333333</p>
    </div>
  </div>
)
const Tipografia = () => (
  <div className={style.items} id="tipografia" key={uuidv4()}>
    <h2 className={style.subtitle}>Tipografia</h2>
    <p className={style.description}>
      Se utilizaron dos tipos de tipografías Bodoni y Montserrat en el diseño de
      esta pagina.
    </p>
    <p className={style.description}>
      La tipografía Bodoni se utilizó para darle elegancia al texto ya que con
      su anchura uniforme de cada uno de sus caracteres y con sus remates rectos
      y delgados dotan a esta tipografía de un aspecto claro expresivo y
      elegante.
    </p>
    <p className={style.description}>
      La tipografía Montserrat se utilizó en los títulos y menú ya que como lo
      dice la historia esta tipografía se utilizaba en los carteles, rótulos y
      letreros. Y es que tiene un estilo geométrico con cuerpo que la hace
      perfectamente combinable entre sí para darle un resaltado a esas partes
      importantes.
    </p>
    <div className={style.typo}>
      <p className={style.bodoni}>Bodoni Book ABCDEFGHIJKLMNOPQRSTUVWXYZ </p>
      <p className={style.montse1}>
        Montserrat Medium ABCDEFGHIJKLMNOPQRSTUVWXYZ{' '}
      </p>
      <p className={style.montse2}>
        Montserrat ExtraBold ABCDEFGHIJKLMNOPQRSTUVWXYZ{' '}
      </p>
    </div>
  </div>
)
const Screen = () => (
  <div className={[style.items, style.screen]} id="screen" key={uuidv4()}>
    <h2 className={style.subtitle}>Screen</h2>
    <figure className={style.image}>
      <img src={perico} alt="" />
      <img src={perico} alt="" />
      <img src={perico} alt="" />
    </figure>
  </div>
)
const Header = () => (
  <React.Fragment>
    <figure>
      <img className={style.title} src={perico} alt="" />
    </figure>
    <ul className={style.list}>
      <li className={style.item}>Rol: Developer</li>
      <li className={style.item}>
        Programacion: React, Javascript, NodeJS, Deploy AWS
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
