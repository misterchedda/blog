import { BlogPosts } from 'app/components/posts'
import { Navbar } from 'app/components/nav'

export const metadata = {
  title: 'Writeups',
  description: 'Dev notes, tutorials, and deep dives.',
}

export default function Page() {
  return (
    <div className="internal-page">
      <Navbar />
      <section className="content-section">
        <h1 className="page-title">Writeups</h1>
        <p className="page-subtitle">Dev notes and deep dives</p>
        <BlogPosts />
      </section>
    </div>
  )
}
