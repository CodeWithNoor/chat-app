// import {createApi, fetchBaseQuery, nanoid} from '@reduxjs/toolkit/query'
// import { Subscription } from "../../types/Subscription"
// import { nanoid } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
import { Subscription } from "../../types/Subscription"

// export type LanguageSupported = {

// }

const fetchId = createAsyncThunk("action", async (userId, getAPI) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await res.json()
    return data;
})

const initialState = {
    users: [],
    status: null,
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // reducers will go here
        addSubscriptionLanguage: (state, action) => {
            const subscriptionData = {
                id: nanoid(),
                language: action.payload
            }
            state.users.push(subscriptionData)
        }
    },
    extraReducers: (builder) => {
        builder.addCase()
    }
})

export const { } = userSlice.actions;
export default userSlice.reducer;