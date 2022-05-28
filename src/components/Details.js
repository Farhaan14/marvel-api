import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Details() {
    const location = useLocation()
    const { pokemon } = location.state
  return (
    <>
        <h1>Details Component</h1>
        <div>{pokemon.name}</div>
    </>
  )
}
