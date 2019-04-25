/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'

import uuidv4 from 'uuid/v4'

import style from './style.sass'
import DATA from '../data.json'

import perico from './perico.jpg'
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

const Projects = DATA.project.map(data => (
  <div className={style.items} id={data.link} key={uuidv4()}>
    <h2 className={style.title}>{data.title}</h2>
    <p className={style.description}>{data.description} </p>
    <figure className={style.image}>
      <img src={perico} alt="" />
    </figure>
  </div>
))

export default function Project() {
  return <div className={style.container}>{Projects}</div>
}
