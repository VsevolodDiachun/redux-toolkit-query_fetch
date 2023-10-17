import React, {FC} from 'react';
import {IPost} from "../../models/IPost";

interface PostItemProps {
    post: IPost;
    taskCount: number;
    remove: (post: IPost) => void;
    update: (post: IPost) => void;
}

const PostItem: FC<PostItemProps> = ({post, remove, taskCount, update}) => {
    const handleRemove = (event: React.MouseEvent) => {
        event.stopPropagation()
        remove(post)
    }

    const handleUpdate = () => {
        const title = prompt() || ''
        if (title) update({...post, title})

    }

    return (
        <div className="post" onClick={handleUpdate}>
            <div style={{margin: 'auto 0'}}>{taskCount + 1}. {post.title}</div>
            <button onClick={handleRemove} className='button-33'>Delete</button>
        </div>
    );
};

export default PostItem;