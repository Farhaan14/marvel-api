import React from 'react';
import { getPokemonTypeColor } from '../helper';

function pad(n, length) {
    var len = length - (''+n).length;
    return (len > 0 ? new Array(++len).join('0') : '') + n
  }

function Card({ pokemon }) {

    return (
        <>
        <div className="Card" style={{backgroundColor: getPokemonTypeColor(pokemon.types[0].type.name) + '80'}}>
            <div className="Card__img">
                <img src={pokemon.sprites.front_default} alt="" />
            </div>
            <div className="Card__order">
                {pad(pokemon.order, 3)}
            </div>
            <div className="Card__name">
                {pokemon.name}
            </div>
            <div className="Card__types">
                {
                    pokemon.types.map(type => {
                        let color = getPokemonTypeColor(type.type.name);
                        return (
                            <div className="Card__type" key={type.type.name} style={{backgroundColor: color}}>
                                <img src={'assets/types/' + type.type.name + '.png'} alt=''/>
                            </div>
                        )
                    })
                }
            </div> 
            
        </div>
        </>
    );
}

export default Card;