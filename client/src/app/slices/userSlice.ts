import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signin } from "@/services/user";


export const signinUser = createAsyncThunk(
    'user/signinUser',
    async (userCredential: { email: string, password: string }) => {
        const response = await signin(userCredential.email, userCredential.password);
        return response;
    }
)

export const signoutUser = createAsyncThunk(
    'user/signoutUser',
    async () => {
        localStorage.removeItem('user');
        return null;
    }
)

const userSlice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : null,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signinUser.pending, (state) => {
                state.loading = true;
                state.user = null;
                state.error = null;
            })
            .addCase(signinUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(signinUser.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                if (action.error.message === "Request failed with status code 401") {
                    console.log(action.error.message)
                }
            });
        builder
            .addCase(signoutUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(signoutUser.fulfilled, (state) => {
                state.loading = false;
                state.user = null;
            })
            .addCase(signoutUser.rejected, (state) => {
                state.loading = false;
            })
    }
})

export default userSlice.reducer;




