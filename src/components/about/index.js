import React from 'react'

const Name = () => <h2>Alberto</h2>
const Description = () => <p >Lorem  fugiat, aliquid asperiores facere?</p>
const Skills = () => (
  <ul className="skill-list">
    <li className="item">JAvascript</li>
    <li className="item">React</li>
    <li className="item">Adobe XD</li>
    <li className="item">UI/UX</li>
    <li className="item">Design</li>
    <li className="item">Photoshop</li>
  </ul>
)

export default function about() {
  return (
    <React.Fragment>
      <Name />
      <Description />
      <Skills />
    </React.Fragment>
  )
}
