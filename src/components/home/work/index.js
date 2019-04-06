import React from 'react'
import style from './style.sass'
import gradient from './ardilla.jpg'

// const Principal = dato.map((data, index) => (
//   <figure className={style.work} key={index}>
//     <img src={data.url} alt="" />
//     <small>{data.name}</small>
//   </figure>
// ))

export default function Work() {
  return (
    <div className={style.container}>
      <div className={style.work1}>
        <figure >
          <img src={gradient} alt="" />
        </figure>
        <p className={style.description}>
          Lorem ipsum dolor s
          it amet orem ipsum dolor sit amet orem
          it amet orem ipsum dolor sit amet oremit amet orem ipsum dolor sit amet orem
          ipsum dolor sit amet consectetur adipisicing elit.B
        </p>
      </div>
      <div className={style.work2}>

        <figure >
          <img src={gradient} alt="" />
        </figure>
        <p className={style.description}>
          Lorem ipsum dolor s
          it amet orem ipsum dolor sit amet orem
          it amet orem ipsum dolor sit amet oremit amet orem ipsum dolor sit amet orem
          ipsum dolor sit amet consectetur adipisicing elit.B
        </p>
      </div>
    </div>
  )
}
