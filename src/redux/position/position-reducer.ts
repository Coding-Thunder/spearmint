import Types from "./position-types";


const INITIAL__STATE = { x: 950, y: 500, isLeft: false,speed:3 }



const positionReducer = (state=INITIAL__STATE,action:Record<string,any>) => {
    switch (action.type) {
        case Types.SET_COORDINATES :
            return {...state,...action.payload}
    
        default:
            return state
    }
}

export default positionReducer