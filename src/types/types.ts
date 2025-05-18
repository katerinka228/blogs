export type Post = {
    id: string
    title: string
    content: string
    author: string
    createdAt: Date
}

export type Comment = {
    id: string
    postId: string
    text: string
    author: string
    createdAt: Date
}