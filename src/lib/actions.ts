'use server'

export const createComment = async (postId: string, text: string) => {
    await fetch(`/api/posts/${postId}/comments`, {
        method: 'POST',
        body: JSON.stringify({ text }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
}