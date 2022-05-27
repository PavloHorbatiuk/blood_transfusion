const SET_STATUS = 'APP/SET-STATUS'

const initialState = {
    status: ''
}

export const StatusReducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_STATUS:
            return {...state, status: action.payload}
        default:
            return state
    }
}
export const setStatusAC = (status) => ({type: SET_STATUS, payload: status})

