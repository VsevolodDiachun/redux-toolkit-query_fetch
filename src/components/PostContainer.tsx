/* eslint-disable no-empty-pattern */
import {useState} from 'react';
import {postAPI} from "../services/PostService";
import PostList from './posts/PostList';
import { handleCreate, handleRemove, handleUpdate } from './functions/fetchFunctions';

const PostContainer = () => {
    const [limit] = useState(100)
    const {data: posts, isError, isLoading } = postAPI.useFetchAllPostsQuery(limit)
    const [createPost, {}] = postAPI.useCreatePostMutation()
    const [updatePost, {}] = postAPI.useUpdatePostMutation()
    const [deletePost, {}] = postAPI.useDeletePostMutation()

    return (
        <div className="post__list">
            <button 
                onClick={() => handleCreate(createPost)} 
                className="button-33"
            >
                <p>Add new post</p>
            </button>
            <PostList 
                posts={posts} 
                isLoading={isLoading} 
                isError={isError} 
                handleRemove={(post) => handleRemove(deletePost, post)} 
                handleUpdate={(post) => handleUpdate(updatePost, post)} 
            />
        </div>
    );
};

export default PostContainer;