/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect} from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { addUser, deleteUsers, fetchUsers, putUsers } from '../store/reducers/ActionCreators';
import { handleCreate, handleRemove, handleUpdate } from './functions/fetchFunctions';
import PostList from './posts/PostList';

function PostContainer2() {
    const dispatch = useAppDispatch()
    const {isUsers, isLoading, isError} = useAppSelector(state => state.userReducer)
    
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

  return (
    <div className="post__list">
            <button onClick={() => handleCreate(addUser, dispatch)} className='button-33'>Add new post</button>
            <PostList 
                posts={isUsers} 
                isLoading={isLoading} 
                isError={isError} 
                handleRemove={(data) => handleRemove(deleteUsers, data, dispatch)} 
                handleUpdate={(data) => handleUpdate(putUsers, data, dispatch)} 
            />
        </div>
  )
}

export default PostContainer2