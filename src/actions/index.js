import { actionTypes as types, urls } from '../constants'
import { getToken, post } from '../helpers'

export const signup = ({ email, password }) => (dispatch) => {
  dispatch({ type: types.SIGNUP_REQUEST })
  post({
    url: urls.SIGNUP,
    body: { email, password },
    success: types.SIGNUP_SUCCESS,
    failure: types.SIGNUP_FAILURE,
    dispatch,
  })
}

export const login = ({ email, password }) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST })
  post({
    url: urls.LOGIN,
    body: { email, password },
    success: types.LOGIN_SUCCESS,
    failure: types.LOGIN_FAILURE,
    dispatch,
  })
}

export const loginWithToken = () => (dispatch) => {
  const token = getToken()
  if (!token) {
    dispatch({ type: types.LOGIN_FAILURE })
    return
  }

  dispatch({ type: types.LOGIN_REQUEST })
  post({
    url: urls.LOGIN_WITH_TOKEN,
    body: { token },
    success: types.LOGIN_SUCCESS,
    failure: types.LOGIN_FAILURE,
    dispatch,
  })
}
