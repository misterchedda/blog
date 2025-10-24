import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'

export default function Page() {
  return (
    <section>
      {/* <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        MisterChedda
      </h1> */}
      {/* <Image src="/icons/cheese.png" alt="cheese" width={100} height={100} className="mb-8" /> */}
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
