/* eslint-disable react/prop-types */
import React from 'react'
import style from './style.sass'
import DATA from '../data.json'

import caballo from './caballo.jpg'

const Projects = DATA.project.map((data, index) => (
  <figure id={data.link} key={index} className={style.item}>
    <h2>{data.title}</h2>
    <img src={caballo} alt=""/>
    <figcaption>{data.description} </figcaption>
  </figure>
))

export default function Project() {
  return (
    <div>
      {Projects}
    </div>
  )
}
