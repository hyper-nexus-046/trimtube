import { Blogs } from '~/content/ts-files/blogs'

import { BlogCard } from '~/components/views/blog/blog-card'
import { PageWrapper, TitledWrapper, Wrapper } from '~/components/wrappers'

export default function Page() {
  return (
    <PageWrapper>
      <TitledWrapper
        className='mb-content-lg py-content-lg md:pb-36 bg-card !max-w-full'
        title='Insight and Updates'
        para='A collection of hand-picked articles for freelancers, by freelancers, Deep dives, insights, and honest advice to navigate the freelance landscape.'
        sectionName='Blog'
        headingLevel='h1'
      />
      <Wrapper className='mb-content-lg'>
        <h2 className='text-heading-h6 font-semibold'>All Articles</h2>
        <p className='sm:w-4/5 lg:w-3/5 pt-2'>
          Find all the tools that will help designers build to last. Simplify
          design with our comprehensive and carefully written library from the
          start.
        </p>
        <div className='pt-content-sm space-y-6'>
          <div className='grid gap-6 md:grid-cols-2 items-stretch'>
            {Blogs.slice(0, 2).map(article => (
              <BlogCard key={article.id} {...article} />
            ))}
          </div>
          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {Blogs.slice(2, 5).map(article => (
              <BlogCard key={article.id} {...article} />
            ))}
          </div>
        </div>
      </Wrapper>
    </PageWrapper>
  )
}
