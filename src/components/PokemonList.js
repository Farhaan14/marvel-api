import React from 'react'
import axios from 'axios'

export default function PokemonList({pokemonURL}) {
  return (
    <div>
        {
          pokemonURL.map(p => (
              <div key={p}>{p}</div>
          ))
        }        
    </div>
  )
}
