import React from 'react'
import { NavHashLink as NavLink } from 'react-router-hash-link'
// import { NavLink } from 'react-router-dom'

import style from './style.sass'

const SubMenu = () => (
  <ul className={style.list}>
    <li className={style.item}>
      <NavLink
        activeClassName={style.active}
        location={{
          pathname: document.location.pathname + document.location.hash,
        }}
        smooth
        to="/projects/sistema-venta#mockup">
        Mockup
      </NavLink>
    </li>
    <li className={style.item}>
      <NavLink
        activeClassName={style.active}
        location={{
          pathname: document.location.pathname + document.location.hash,
        }}
        smooth
        to="/projects/sistema-venta#color">
        Color
      </NavLink>
    </li>
    <li className={style.item}>
      <NavLink
        activeClassName={style.active}
        location={{
          pathname: document.location.pathname + document.location.hash,
        }}
        smooth
        to="/projects/sistema-venta#tipografia">
        Tipografia
      </NavLink>
    </li>
    <li className={style.item}>
      <NavLink
        activeClassName={style.active}
        location={{
          pathname: document.location.pathname + document.location.hash,
        }}
        smooth
        to="/projects/sistema-venta#screen">
        Pantallas
      </NavLink>
    </li>
  </ul>
)

export default function Menu() {
  return <SubMenu />
}
