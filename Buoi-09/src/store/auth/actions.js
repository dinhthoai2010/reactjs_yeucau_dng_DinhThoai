import authService from "../../services/auth";

// Action Type
export const FORM_SUBMIT_LOGIN = 'FORM_SUBMIT_LOGIN'

// Action

export function asyncHandleSubmitForm(formData) {
    return async (dispatch) => {
        try {
            console.log(formData);
            let userData = {
                "username": formData.username.value,
                "password": formData.password.value
            }
            const response = await authService.login(userData);
            console.log(response);

            

            return response
            // dispatch(handleSubmitForm(response))
        } catch (error) {
            return error.response.data
        }
    }
}
// Action Async


export function handleSubmitForm(hashCategoryById) {
    return {
        type: FORM_SUBMIT_LOGIN,
        payload: {
            hashCategoryById
        }
    }
}
