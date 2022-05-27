import {authAPI} from "../API/API";


const SET_NEW_DONOR = 'SET/NEW/DONOR'
const SET_DONORS_ALL = 'SET/ALL/DONORS'
const SET_STATUS_DONOR = 'SET/STATUS/DONOR'


const initialState = {
    donors: [],
    isDonor: false
}

export const DonorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STATUS_DONOR:
            return {...state, isDonor: action.payload}
        case SET_DONORS_ALL:
            return {...state, donors: action.payload}
        case SET_NEW_DONOR:
            return {...state, status: action.payload}
        default:
            return state
    }
}

export const setAllDonorsAC = (data) => ({type: SET_DONORS_ALL, payload: data});
export const setStatusDonorAC = (status) => ({type: SET_STATUS_DONOR, payload: status});


export const createDonorsTH = (values) => async (dispatch) => {
    try {
        const hero = await authAPI.create(values);
        dispatch(setStatusDonorAC(true))
    } catch (e) {
        alert(e)
    }
}
export const setAllDonors = () => async (dispatch) => {
    try {
        const donor = await authAPI.getAll();
        const {data} = donor
        dispatch(setAllDonorsAC(data));
    } catch (e) {
        alert(e)
    }
}