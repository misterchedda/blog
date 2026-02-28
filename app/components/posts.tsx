import Link from 'next/link'
import { getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="post-list">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="post-list-item"
            href={`/blog/${post.slug}`}
          >
            <p className="post-list-title">{post.metadata.title}</p>
            {post.metadata.summary && (
              <p className="post-list-summary">{post.metadata.summary}</p>
            )}
          </Link>
        ))}
    </div>
  )
}
