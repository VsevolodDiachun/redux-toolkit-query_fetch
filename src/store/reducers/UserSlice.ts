import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { IPost } from "../../models/IPost";
import {addUser, deleteUsers, fetchUsers} from "./ActionCreators";


interface UserState {
    isUsers: IPost[];
    isLoading: boolean;
    isError: string;
}

const initialState: UserState = {
    isUsers: [],
    isLoading: false,
    isError: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IPost[]>) => {
            state.isLoading = false
            state.isError = ''
            state.isUsers = action.payload
        },
        [fetchUsers.pending.type]: (state, action) => {
            state.isLoading = true
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.isError = action.payload
        },
        [addUser.fulfilled.type]: (state, action: PayloadAction<IPost[]>) => {
            state.isUsers = action.payload
        },
        [deleteUsers.fulfilled.type]: (state, action: PayloadAction<IPost[]>) => {
            state.isUsers = action.payload
        }
    }
})

export default userSlice.reducer