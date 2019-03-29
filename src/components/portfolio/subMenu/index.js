import React from 'react'
import { NavHashLink } from 'react-router-hash-link'

import style from './style.sass'

const SubMenu = () => (
  
  <ul className={style.list}>
    <li className={style.item}>
      <NavHashLink smooth to="/portfolio#design" activeClassName="selected">
        Design
      </NavHashLink>
    </li>
    <li className={style.item}>
      <NavHashLink smooth to="/portfolio#color" activeClassName="selected">
        Color
      </NavHashLink>
    </li>
    <li className={style.item}>
      <NavHashLink smooth to="/portfolio#screen" activeClassName="selected">
        Screen
      </NavHashLink>
    </li>
  </ul>
    
)

export default function Menu() {
  return (
    <SubMenu />
  )
}
