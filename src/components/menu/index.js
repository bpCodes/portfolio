import React from 'react'
import style from './style.sass'

const Navigation = () => (
  <header>
    <nav className={style.menu}>
      <div className={style.logo}>
        x
      </div>
      <ul>
        <li className="item">Work</li>
        <li className="item">About</li>
        <li className="item">Playground</li>
      </ul>
    </nav>
  </header>
)

export default function Menu() {
  return (
    <Navigation />
  )
}
