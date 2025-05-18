import Link from "next/link"
import { posts } from "@/lib/data"
// import styles from "./globals.css"

export default function Home() {
  return (
      <div className="posts-list">
        {posts.map(post => (
            <article key={post.id} className="post-card">
              <h2>
                <Link href={`/posts/${post.id}`}>{post.title}</Link>
              </h2>
              <p className="author">Автор: {post.author}</p>
              <p className="date">
                {new Date(post.createdAt).toLocaleDateString()}
              </p>
            </article>
        ))}
      </div>
  )
}