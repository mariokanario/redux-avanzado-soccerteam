import { actionType } from "./action";

const globalState = {
    jugadores: [
        {
            id: 1,
            nombre: "Pedro",
            foto: "/img/001-ethiopia.png"
        },
        {
            id: 2,
            nombre: "Juan",
            foto: "/img/002-oman.png"
        },
        {
            id: 3,
            nombre: "Maria",
            foto: "/img/003-tanzania.png"
        },
        {
            id: 4,
            nombre: "Ramon",
            foto: "/img/004-slovenia.png"
        }
    ],
    titulares: [],
    suplentes: []
}

const reducerEntrenador = (state = globalState, action) => {

    console.log(state)

    switch (action.type) {
        case "AGREGARTITULAR":
            return {
                ...state,
                titulares: state.titulares.concat(action.payload),
                jugadores: state.jugadores.filter(j => j.id !== action.payload.id),
                //1. Agrega el estado actual
                //2. En titulares con el state.titulares agrega el contenido del estado actual y luego le concatena el nuevo
                //3. Si agego solo titulares: action.payload agrega solo uno
            }

        case "AGREGARSUPLENTE":
            return {
                ...state,
                suplentes: state.suplentes.concat(action.payload),
                jugadores: state.jugadores.filter(j => j.id !== action.payload.id),
            }

        case "QUITARJUGADOR":
            return {
                ...state,
                jugadores: state.jugadores.concat(action.payload),
                titulares: state.titulares.filter(j=> j.id !== action.payload.id),
                suplentes: state.suplentes.filter(j=> j.id !== action.payload.id)
            }

        default:
            return state

    }

}

export default reducerEntrenador;