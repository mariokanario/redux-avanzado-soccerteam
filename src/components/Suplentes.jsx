import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quitarjugador } from '../reducers/action'

const Suplentes = () => {

    const suplentes = useSelector((reducer) => reducer)
    const dispatch = useDispatch()

    return (
        <div className='cont-game'>
            <h2>Suplentes</h2>
            <div className="cont-jugadores">
                {
                    suplentes.suplentes.map(j => (
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


export default Suplentes