import { Post, Comment } from "@/types/types"

export const posts: Post[] = [
    {
        id: "1",
        title: "Мой первый пост",
        content: "Этот пост рассказывает об основах Next.js...",
        author: "Иван Иванов",
        createdAt: new Date("2024-01-01"),
    },
    {
        id: "2",
        title: "Продвинутые техники",
        content: "В этом посте мы рассмотрим серверные действия...",
        author: "Петр Петров",
        createdAt: new Date("2024-01-02"),
    },
]

export const comments: Comment[] = [
    {
        id: "1",
        postId: "1",
        text: "Отличная статья!",
        author: "Аноним",
        createdAt: new Date("2024-01-01"),
    },
]