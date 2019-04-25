import React from 'react'
import style from './style.sass'

const Name = () => <h1>Alberto</h1>

const Skill = () => <h4 className={style.skill}>Front End & Designer</h4>

const Description = () => (
  <p className={style.description}>
    Soy un desarrollador web y diseñador de interfaces con pasión por la
    tecnología creando una experiencia de usuario interactiva, simple, elegante
    y con un alto rendimiento
  </p>
)

export default function index() {
  return (
    <main className={style.name}>
      <Name />
      <Skill />
      <Description />
    </main>
  )
}
