import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-hot-toast';

const initialState = {
    user: null,
    error: null,
    loading: false,
}

import { auth } from '../Firebase'


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

        // In case process Fails

        registerFail: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },
        loginFail: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },
        logoutFail: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },

        // Initializing process

        registerStart: (state) => {
            state.loading = true;
        },
        loginStart: (state) => {
            state.loading = true;
        },
        logoutStart: (state) => {
            state.loading = true;
        },

        // In case process is successful

        registerSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload

        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload

        },
        logoutSuccess: (state, action) => {
            state.loading = false;
            state.user = null;

        },

        // Determining User

        setUser: (state, action) => {
            state.user = action.payload
        },

    }
})

// Action creators are generated for each case reducer function
export const { registerFail, registerSuccess, registerStart, loginFail, loginSuccess, loginStart, logoutFail, logoutSuccess, logoutStart, setUser } = authSlice.actions


export const registerInitiate = (email, password) => {
    return function (dispatch) {
        dispatch(registerStart(user.user));
        auth.createUserWithEmailAndPassword(email, password).then((user) => {
            dispatch(registerSuccess(user.user))
            toast.success(`User Signed Up`);
        }).catch((error) => {
            toast.error(`User wasn't Registered. Please try again${error.message}`);
            dispatch(registerFail(error.message))
        });
    };
};

export const loginInitiate = (email, password) => {
    return function (dispatch) {
        dispatch(loginStart());
        auth.signInWithEmailAndPassword(email, password).then((user) => {
            dispatch(loginSuccess(user.user))
            toast.success(`User Signed In`);
        }).catch(error => {
            toast.error("Invalid User Credentials. Please Try Again.");
            dispatch(loginFail(error.message))
        })


    };
};

export const logoutInitiate = () => {
    return function (dispatch) {
        dispatch(logoutStart());
        auth.signOut().then((resp) => dispatch(logoutSuccess())).catch((error) => dispatch(logoutFail(error.message)));
    };
};

export const getUser = (state) => state.auth.user;

export const getLoading = (state) => state.auth.loading;

export default authSlice.reducer;