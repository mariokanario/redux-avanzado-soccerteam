import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { agregartitular, agregarsuplente } from '../reducers/action'


const Jugadores = () => {

    const equipo = useSelector((reducer) => reducer)
    const dispatch = useDispatch()


    return (
        <div className='cont-game'>
            <h2>Jugadores</h2>
            <div className="cont-jugadores">
                {
                    equipo.jugadores.map(j => (
                        <article key={j.id}>
                            <p>{j.nombre}</p>
                            <img src={j.foto} alt="jugador" width="10%" />
                            <div>
                                <button onClick={() => dispatch(agregartitular(j))}>Titular</button>
                                <button onClick={() => dispatch(agregarsuplente(j))}>Suplente</button>
                            </div>
                        </article>

                    ))
                }


            </div>

            
        </div>
    )
}

export default Jugadores