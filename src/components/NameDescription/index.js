import React from 'react'

const Name = () => <h1 className="name" >My name is </h1>

const Description = () => <h2>Front End & Designer</h2>

export default function index() {
  return (
    <div>
      <Name />
      <Description />
    </div>
  )
}
