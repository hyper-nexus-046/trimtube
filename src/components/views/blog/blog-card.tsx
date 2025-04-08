import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { Button } from '~/components/ui/button'
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
  return (
    <Link href={href}>
      <Card className='border-0 rounded-2xl overflow-hidden text-sm h-full'>
        <CardHeader className='p-4'>
          <div className='h-48 overflow-hidden rounded-md'>
            <Image
              src={image}
              alt={title}
              className='w-full h-full transition duration-500 hover:scale-105'
            />
          </div>
        </CardHeader>
        <CardContent className='p-4 pt-0 space-y-2 text-muted-foreground'>
          <div className='space-x-2'>
            <span className='text-chart-3'>{category}</span>
            <span>{date}</span>
          </div>
          <h2 className='text-lg text-secondary-foreground font-semibold'>
            {title}
          </h2>
          <p className='line-clamp-2'>{description}</p>
        </CardContent>
        <CardFooter className='p-4 pt-0'>
          <Button variant='link' className='h-fit p-0 text-chart-3'>
            Learn More <ArrowRight className='w-4' />
          </Button>
        </CardFooter>
      </Card>
    </Link>
  )
}
