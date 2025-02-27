import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
interface User {
    accessToken?: string;
    refreshToken?: string;
    token?: string;
    user?: {
        address: string;
        email: string;
        name: string;
        phone: string;
        profileImage: string;

        role: string;
        status: string;
        _id: string;
    };
}

interface AuthState {
    user: User | null;
    token: string | null;


}


const initialState: AuthState = {
    user: null,
    token: null,

}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload!
            state.token = action.payload.accessToken!
        },


        logout: (state) => {
            state.user = null
            state.token = null

        },
    }
})


export const { setUser, logout } = authSlice.actions
export const selectCurrentUser = (state: RootState) => (state.auth as AuthState).user
export const selectCurrentToken = (state: RootState) => (state.auth as AuthState).token
export default authSlice.reducer
