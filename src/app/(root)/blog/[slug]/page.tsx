import Link from 'next/link'
import { Blogs } from '~/content/ts-files/blogs'
import { ChevronLeft, Dot } from 'lucide-react'

import { Button } from '~/components/ui/button'
import { PageWrapper, Wrapper } from '~/components/wrappers'

export default async function Page({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const matchedBlog = Blogs.find(article => article.href === `/blog/${slug}`)
  return (
    <PageWrapper>
      <Wrapper className='space-y-6 mb-content-lg text-muted-foreground'>
        <div className='flex py-7 items-center gap-10 border-b border-muted-foreground'>
          <Button
            size='sm'
            variant='outline'
            asChild
            className='rounded-none hover:bg-muted'
          >
            <Link href='/blog'>
              <ChevronLeft className='text-foreground' />
              <p className='text-foreground'>All Posts</p>
            </Link>
          </Button>
          <div className='flex gap-2'>
            <p>14.10.24</p>
            <Dot />
            <p>10 min read</p>
          </div>
        </div>
        <h1 className='text-heading-h4 font-medium text-foreground'>
          {matchedBlog?.title}
        </h1>
        <div className="h-[450px] bg-[url('/blog/blogImg.png')] bg-cover bg-center" />
        <p>{matchedBlog?.description}</p>
      </Wrapper>
    </PageWrapper>
  )
}
