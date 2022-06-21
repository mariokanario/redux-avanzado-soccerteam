import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quitarjugador } from '../reducers/action'

const Titulares = () => {

    const titulares = useSelector((reducer) => reducer)
    const dispatch = useDispatch()

    return (
        <div className='cont-game'>
            <h2>Titulares</h2>
            <div className="cont-jugadores">
                {
                    titulares.titulares.map(j => (
                        <article key={j.id}>
                            <p>{j.nombre}</p>
                            <img src={j.foto} alt="jugador" width="10%" />
                            <div>
                                <button onClick={() => dispatch(quitarjugador(j))}> x </button>
                            </div>
                        </article>

                    ))
                }
            </div>
        </div>
    )
}

export default Titulares