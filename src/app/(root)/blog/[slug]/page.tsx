import Link from 'next/link'
import { Blogs } from '~/content/ts-files/blogs'
import { ChevronLeft, Dot } from 'lucide-react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
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
      <Wrapper className='mb-content-lg text-muted-foreground pt-content grid gap-8 md:grid-cols-[1fr,2fr]'>
        <div className='space-y-6 text-foreground'>
          <div className='flex h-[72px] items-center border-b border-foreground'>
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
          </div>
          <div className='text-muted-foreground text-sm'>
            <h2 className='mb-2 text-base tracking-wider'>WRITTEN BY</h2>
            <p className='text-foreground'>Christopher Hayden</p>
            <p>Head of marketing</p>
          </div>
          <div>
            <h2 className='mb-2 text-muted-foreground'>SHARE THIS POST</h2>
            <div className='flex gap-3 py-2'>
              <FaLinkedin className='h-5 w-5 cursor-pointer' />
              <FaTwitter className='h-5 w-5 cursor-pointer' />
              <FaGithub className='h-5 w-5 cursor-pointer' />
            </div>
          </div>
          <div>
            <h3>SUBSCRIBE</h3>
            <form className='mt-2 flex items-center gap-2'>
              <Input
                id='email'
                type='email'
                placeholder='Enter your email'
                className='rounded-none border text-sm tracking-wider text-foreground'
                required
              />
              <Button
                type='submit'
                variant='outline'
                className='rounded-none hover:bg-muted text-muted-foreground'
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        {/* right side */}
        <div className='space-y-6'>
          <div className='flex h-[72px] items-center gap-3 border-b border-foreground'>
            <p>14.10.24</p>
            <Dot />
            <p>10 min read</p>
          </div>
          <h1 className='text-heading-h4 font-medium text-foreground'>
            {matchedBlog?.title}
          </h1>
          <div className="h-[450px] bg-[url('/blog/blog-img.png')] bg-cover bg-center" />
          <p>{matchedBlog?.description}</p>
        </div>
      </Wrapper>
    </PageWrapper>
  )
}
