export const UPDATE_PROFILE_SUCCESS = "UPDATE_PROFILE_SUCCESS";
export const UPDATE_PROFILE_FAIL = "UPDATE_PROFILE_FAIL";
export const GET_HOMEWORK_SUCCESS = "GET_HOMEWORK_SUCCESS";
export const GET_HOMEWORK_FAIL = "GET_HOMEWORK_FAIL";
export const IS_LOGGED_OUT = "IS_LOGGED_OUT";

const BASE_URL = 'https://kate.nvinfobase.com/api';

export const isUserLoggedOut = (value) =>{
    return {
        type: IS_LOGGED_OUT,
        payload: value
    }
  }

export const updateProfile = (token, name, email, phoneNumber, image) => {
    return async dispatch => {
        var formdata = new FormData();
        formdata.append("name", name);
        formdata.append("email", email);
        formdata.append("phone_number", phoneNumber);

        if (image) {
            formdata.append("image", { uri: image?.uri, name: image?.fileName, type: image?.type });
        }
        const res = await fetch(`${BASE_URL}/update_profile`, {
            method: "POST",
            body: formdata,
            headers: {
                "Accept": "application/json",
                "Content-Type": 'multipart/form-data',
                "Authorization": "Bearer " + token
            }
        })
        let response = await res.json();
        console.log("response value ==update", response)
        if (response) {
            dispatch({
                type: UPDATE_PROFILE_SUCCESS,
                payload: response
            });
            // await AsyncStorage.setItem("Tokan",response.tokan)
        } else {
            dispatch({
                type: UPDATE_PROFILE_FAIL,
                payload: response.data
            });
        }
        return response;
    }
}
export const getUserHomeWork = (token) => {
    var result = [];
    return async dispatch => {
        const res = await fetch(`${BASE_URL}/homework`, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + token
            }
        })
        let response = await res.json();
        if (response.success == true) {
            dispatch({
                type: GET_HOMEWORK_SUCCESS,
                payload: response.data
            });
        } else {
            dispatch({
                type: GET_HOMEWORK_FAIL,
                payload: response.data
            });
        }
        return response;
    }
}
export const postUserNotificationData = (token, data) => {
    var result = [];
    // alert(token)
    return async dispatch => {

        const res = await fetch(`${BASE_URL}/notification`, {
            method: "POST",
            body: data,
            headers: {
                "Authorization": "Bearer " + token
            }
        })
        let response = await res.json();
        console.log("response value notification_by_date_time==>>>", response)
        return response;
    }
}
export const updatingTrackingRecords = (token, data, recordId) => {
    var result = [];
    // alert(token)
    return async dispatch => {

        const res = await fetch(`${BASE_URL}/tracking/${recordId}`, {
            method: "PATCH",
            body: data,
            headers: {
                "Authorization": "Bearer " + token,
                "Content-Type": "application/json"
            }
        })
        let response = await res.json();
        return response;
    }
}
export const deleteTrackingRecords = (token, recordId) => {
    var result = [];
    // alert(token)
    return async dispatch => {

        const res = await fetch(`${BASE_URL}/tracking/${recordId}`, {
            method: "DELETE",
            headers: {
                "Authorization": "Bearer " + token,
            }
        })
        let response = await res.json();
        return response;
    }
}
