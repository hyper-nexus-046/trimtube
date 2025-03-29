import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { Card, CardContent, CardFooter, CardHeader } from '~/components/ui/card'

export const BlogCard = ({
  article
}: {
  article: {
    id: number
    title: string
    description: string
    category: string
    date: string
    image: StaticImageData
    href: string
  }
}) => {
  return (
    <Link href={article.href}>
      <Card className='border-0 rounded-xl overflow-hidden text-sm h-full'>
        <CardHeader className='p-4'>
          <Image
            src={article.image}
            alt={article.title}
            className='h-48 rounded-md transition duration-300 hover:scale-105'
          />
        </CardHeader>
        <CardContent className='p-4 pt-0 space-y-1 text-muted-foreground'>
          <div className='space-x-2'>
            <span className='font-medium text-primary'>{article.category}</span>
            <span>{article.date}</span>
          </div>
          <h2 className='text-lg text-secondary-foreground font-semibold'>
            {article.title}
          </h2>
          <p className='line-clamp-2'>{article.description}</p>
        </CardContent>
        <CardFooter className='p-4 pt-0'>
          <Link
            href='#'
            className='flex items-center gap-1 font-medium text-primary'
          >
            Learn More <ArrowRight className='h-4 w-4' />
          </Link>
        </CardFooter>
      </Card>
    </Link>
  )
}
