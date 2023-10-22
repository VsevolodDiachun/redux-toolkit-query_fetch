import { IPost } from "../../models/IPost"

export const handleCreate = (createPost: (value: IPost) => any) =>  {
    const title = prompt()
    if (title) return createPost({title, body: title} as IPost)
}

export const handleRemove = (deletePost: (value: IPost) => any, data: IPost) => {
        return deletePost(data)
}

export const handleUpdate = (updatePost: (value: IPost) => any, data: IPost) => {
        return updatePost(data)
}