export const actionType = {
    AGREGARTITULAR: "AGREGARTITULAR",
    AGREGARSUPLENTE: "AGREGARSUPLENTE",
}

export const agregartitular = (jugador) => {
    return { 
        type: "AGREGARTITULAR", 
        payload: jugador,
    }
}

export const agregarsuplente = (jugador) => {
    return { 
        type: "AGREGARSUPLENTE", 
        payload: jugador,
    }
}

export const quitarjugador = (jugador) => {
    return { 
        type: "QUITARJUGADOR", 
        payload: jugador,
    }
}