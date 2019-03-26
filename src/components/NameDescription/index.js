import React from 'react'
import style from './style.sass'

const Name = () => <h1 className={style.name} >My name is </h1>

const Description = () => <h2>Front End & Designer</h2>

export default function index() {
  return (
    <div>
      <Name />
      <Description />
    </div>
  )
}
