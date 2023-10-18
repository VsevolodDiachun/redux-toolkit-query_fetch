import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import { IPost } from "../../models/IPost";

export const fetchUsers = createAsyncThunk<IPost[], undefined>(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IPost[]>('  http://localhost:5004/posts')
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('ERROR FETCH')
        }
    }
)

export const addUser = createAsyncThunk<IPost[], IPost>(
    'user/createPost',
    async (data, thunkAPI) => {
        try {
            const {title, body} = data
            await axios.post<IPost[]>('http://localhost:5004/posts', {title, body})
            const response = await axios.get<IPost[]>('  http://localhost:5004/posts')
            console.log(response)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('ERROR CREATE')
        }
    }
)

export const deleteUsers = createAsyncThunk<IPost[], IPost>(
    'user/deletePost',
    async (data, thunkAPI) => {
        try {
            const {id} = data
            await axios.delete<number>('http://localhost:5004/posts/' + id)
            const response = await axios.get<IPost[]>('  http://localhost:5004/posts')
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('ERROR DELETE')
        }
    }
)

export const putUsers = createAsyncThunk<IPost[], IPost>(
    'user/deletePost',
    async (data, thunkAPI) => {
        try {
            const {id} = data
            await axios.put<number>('http://localhost:5004/posts/' + id, data)
            const response = await axios.get<IPost[]>('  http://localhost:5004/posts')
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('ERROR DELETE')
        }
    }
)