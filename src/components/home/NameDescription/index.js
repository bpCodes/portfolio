import React from 'react'
import style from './style.sass'

const Name = () => <h1 >Alberto</h1>

const Skill = () => <h4 className={style.skill}>Front End & Designer</h4>

const Description = () => (
  <p className={style.description}>Lorem ipsum dolor s
  it amet orem ipsum dolor sit amet orem
  it amet orem ipsum dolor sit amet oremit amet orem ipsum dolor sit amet orem
  ipsum dolor sit amet consectetur adipisicing elit. Bl</p>
)

export default function index() {
  return (
    <main className={style.name} >
      <Name />
      <Skill />
      <Description />
    </main>
  )
}
