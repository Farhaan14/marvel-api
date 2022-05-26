import React from 'react'
import axios from 'axios'

export default function PokemonList({pokemonURL}) {
  let pokemon = []

  return (
    <>
      {
        pokemonURL.forEach(url => {
          axios.get(url).then(res => {
            pokemon.push(res.data)
          })
        })
      }

      {console.log(pokemon)}

    </>
  )
}
