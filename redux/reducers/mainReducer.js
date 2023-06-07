import {
    GET_HOMEWORK_SUCCESS,
    GET_HOMEWORK_FAIL,
    IS_LOGGED_OUT,
    UPDATE_PROFILE_FAIL,
    UPDATE_PROFILE_SUCCESS
} from '../actions/mainAction'

const intialState = {
    accessToken: "yes",
    homeWorkList: [],
    userAction: "",
    error: {},
    profile: {}
}

export default function (state = intialState, action) {
    switch (action.type) {
        case UPDATE_PROFILE_SUCCESS:
            return {
                ...state, profile: action.payload
            }

        case UPDATE_PROFILE_FAIL:
            return {
                ...state, error: action.payload
            }

        case GET_HOMEWORK_SUCCESS:
            return {
                ...state, homeWorkList: action.payload
            }
        case GET_HOMEWORK_FAIL:
            return {
                ...state, error: action.payload
            }

        case IS_LOGGED_OUT:
            return {
                ...state, userAction: action.payload
            }

    }
    return state;
}