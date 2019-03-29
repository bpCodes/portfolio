import React from 'react'
import gradient from './ardilla.jpg'

const dato = [{
  name: 'nombre',
  url: gradient,

},
{
  name: 'npmbre2',
  url: gradient,

},
]
const Principal = dato.map((data, index) => (
  <picture key={index}>
    <source srcSet={data.url}/>
    <img src={data.url} alt="" />
    <small>{data.name}</small>
  </picture>
))

export default function Work() {
  return (
    <section>
      {Principal}
    </section>
  )
}
