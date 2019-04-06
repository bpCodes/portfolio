/* eslint-disable react/prop-types */
import React from 'react'
import uuidv4 from 'uuid/v4'

import style from './style.sass'
import DATA from '../data.json'

import perico from './perico.jpg'

class ScrollToTopOnMount extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return null
  }
}

const Projects = DATA.project.map(data => (
  <div className={style.items} id={data.link} key={uuidv4()} >
    <h2 className={style.title}>{data.title}</h2>
    <p className={style.description}>{data.description} </p>
    <figure className={style.image}>
      <img src={perico} alt=""/>
    </figure>
    
  </div>
))

export default function Project() {
  return (
    <div className={style.container}>
      <ScrollToTopOnMount />
      {Projects}
    </div>
  )
}
