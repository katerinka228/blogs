
'use client'

import { useForm } from "react-hook-form"
import { createComment } from "@/lib/actions"
import styles from "./CommentForm.module.css"

type FormData = {
    text: string
}

export default function CommentForm({ postId }: { postId: string }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>()

    const onSubmit = async (data: FormData) => {
        await createComment(postId, data.text)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <textarea
          {...register('text', {
              required: 'Обязательное поле',
              minLength: {
                  value: 3,
                  message: 'Минимум 3 символа',
              },
          })}
          className={styles.textarea}
          placeholder="Напишите комментарий..."
      />
            {errors.text && (
                <p className={styles.error}>{errors.text.message}</p>
            )}
            <button type="submit" className={styles.button}>
                Отправить
            </button>
        </form>
    )
}