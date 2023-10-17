import React, {FC}  from 'react'
import { IPost } from '../../models/IPost'
import PostItem from './PostItem'

interface PropsPost {
    posts: IPost[] | undefined;
    isLoading: boolean;
    isError: boolean | string;
    handleRemove: (post: IPost) => void;
    handleUpdate: (post: IPost) => void;
}


const PostList: FC<PropsPost> = ({posts, isLoading, isError, handleRemove, handleUpdate}) => {
  return (
    <div>
        {isLoading && <h1>Loading...</h1>}
        {isError && <h1>ERROR</h1>}
        {posts && posts.map((post: IPost, index:number) =>
            <PostItem key={post.id} post={post} taskCount={index} remove={handleRemove} update={handleUpdate}/>
        )}
    </div>
  )
}

export default PostList