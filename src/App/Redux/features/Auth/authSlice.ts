import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../store"

const initialState = {
    user: null,
    token: null,
    isLoading: false,
    isError: false,
    isSuccess: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
            state.token = action.payload.token
        },
        logout: (state) => {
            state.user = null
            state.token = null
        },
    }
})

export const { setUser, logout } = authSlice.actions
export const selectCurrentUser = (state: RootState) => state.auth.user
export const selectCurrentToken = (state: RootState) => state.auth.token
export default authSlice.reducer
