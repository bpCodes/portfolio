import React from 'react'

import NameDescription from './NameDescription'
import style from './style.sass'

import Work from './work'

const Home = () => (
  <section className={style.container}>
    <div className={style.name}>
      <NameDescription />

    </div>
    <div className={style.work}>

      <Work />
    </div>
  </section>
)


export default Home
