'use client'

import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'

import { Card, CardContent, CardFooter, CardHeader } from '~/components/ui/card'

export const BlogCard = ({
  title,
  description,
  category,
  date,
  image,
  href
}: {
  title: string
  description: string
  category: string
  date: string
  image: StaticImageData
  href: string
}) => {
  const router = useRouter()

  return (
    <div className='cursor-pointer' onClick={() => router.push(href)}>
      <Card className='border-0 rounded-2xl overflow-hidden text-sm h-full'>
        <CardHeader className='p-4'>
          <Image
            src={image}
            alt={title}
            className='h-48 rounded-md transition duration-500 hover:scale-105'
          />
        </CardHeader>
        <CardContent className='p-4 pt-0 space-y-2 text-muted-foreground'>
          <div className='space-x-2'>
            <span className='font-medium text-chart-3'>{category}</span>
            <span>{date}</span>
          </div>
          <h2 className='text-lg text-secondary-foreground font-semibold'>
            {title}
          </h2>
          <p className='line-clamp-2'>{description}</p>
        </CardContent>
        <CardFooter className='p-4 pt-0'>
          <Link
            href='#'
            className='flex items-center gap-1 font-medium text-chart-3'
          >
            Learn More <ArrowRight className='w-4' />
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
