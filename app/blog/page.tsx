import { BlogPosts } from 'app/components/posts'
import { Navbar } from 'app/components/nav'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <div className="internal-page">
      <Navbar />
      <section>
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
        <BlogPosts />
      </section>
    </div>
  )
}
