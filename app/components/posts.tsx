import Link from 'next/link'
import Image from 'next/image'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts({ showIcon = false }: { showIcon?: boolean }) {
  let allBlogs = getBlogPosts()

  return (
    <div>
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
            className="post-outline block mb-4 hover:opacity-95 transition-opacity"
            href={`/blog/${post.slug}`}
          >
            <div className="flex flex-col space-y-1 px-3 py-3 sm:ml-6 sm:px-0 sm:py-2 min-w-0 relative z-10">
              <div className="flex items-center gap-2 sm:gap-4">
                {showIcon && (
                  <Image
                    src="/images/exclamation.svg"
                    alt=""
                    width={18}
                    height={18}
                    className="flex-shrink-0"
                    style={{
                      filter:
                        'sepia(400%) saturate(999%) hue-rotate(9deg) brightness(102%) contrast(120%)',
                    }}
                  />
                )}
                <div className="flex flex-col flex-1 min-w-0">
                  <p className="text-sm sm:text-base text-neutral-900 dark:text-neutral-100 tracking-tight break-words">
                    {post.metadata.title}
                  </p>
                  {post.metadata.summary && (
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 break-words">
                      {post.metadata.summary}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  )
}
