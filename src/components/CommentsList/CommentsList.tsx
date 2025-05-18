'use client'

import { useEffect, useState } from "react"
import { Comment } from "@/types/types"
import styles from "./CommentsList.module.css"

export default function CommentsList({ postId }: { postId: string }) {
    const [comments, setComments] = useState<Comment[]>([])
    const [page] = useState(1)

    useEffect(() => {
        fetch(`/api/posts/${postId}/comments?page=${page}`)
            .then(res => res.json())
            .then(data => {
                setComments(data.comments)
                // Если total не используется, просто удалите эту строку
            })
    }, [postId, page])

    return (
        <div className={styles.comments}>
            {comments.map(comment => (
                <div key={comment.id} className={styles.comment}>
                    <p className={styles.author}>{comment.author}</p>
                    <p className={styles.text}>{comment.text}</p>
                    <time className={styles.date}>
                        {new Date(comment.createdAt).toLocaleDateString()}
                    </time>
                </div>
            ))}
        </div>
    )
}