import { Dispatch } from "react"
import { IPost } from "../../models/IPost"

export const handleCreate = (createPost: (value: IPost) => any, dispatch?: Dispatch<IPost>) =>  {
    const title = prompt()
    
    if (title) if (!dispatch) {
        createPost({title, body: title} as IPost)
    } else {
        dispatch(createPost({title, body: title} as IPost))
    }
}

export const handleRemove = (deletePost: (value: IPost) => any, data: IPost, dispatch?: Dispatch<IPost>) => {
    if (!dispatch) {
        deletePost(data)
    } else {
        dispatch(deletePost(data))
    }
}

export const handleUpdate = (updatePost: (value: IPost) => any, data: IPost, dispatch?: Dispatch<IPost>) => {
    updatePost(data)
    if (!dispatch) {
        updatePost(data)
    } else {
        dispatch(updatePost(data))
    }
}