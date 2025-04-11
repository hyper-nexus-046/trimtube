import Link from 'next/link'
import { CircleArrowDown, Zap } from 'lucide-react'

import { Button } from '~/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '~/components/ui/card'
import { ScrollArea } from '~/components/ui/scroll-area'

const formats = [
  { label: 'Audio / MP3', size: '512 KB', isPaid: false },
  { label: 'Video / 240p', resolution: '240p', size: '1.2 MB', isPaid: false },
  { label: 'Video / 360p', resolution: '360p', size: '2.4 MB', isPaid: false },
  { label: 'Video / 480p', resolution: '480p', size: '3.5 MB', isPaid: false },
  { label: 'Video / 720p', resolution: '720p', size: '5.8 MB', isPaid: false },
  { label: 'Video / 1080p', resolution: '1080p', size: '9.7 MB', isPaid: true },
  {
    label: 'Video / 1440p',
    resolution: '1440p',
    size: '12.5 MB',
    isPaid: true
  },
  { label: 'Video / 2160p', resolution: '2160p', size: '18.3 MB', isPaid: true }
]

export const VideoInformation = () => {
  return (
    <Card className='bg-background h-[337px] overflow-hidden border-none'>
      <CardHeader className='flex-row items-center justify-between border-b !pb-4 p-0'>
        <CardTitle>Download</CardTitle>
        <CardDescription>MP3 / MP4</CardDescription>
      </CardHeader>
      <ScrollArea className='h-[282px] pr-4 mt-5'>
        <CardContent className='space-y-4 p-0 pb-2'>
          {formats.map((item, i) => (
            <div
              key={i}
              className='border py-2 px-4 rounded-md flex items-center justify-between'
            >
              <span className='text-base'>
                {item.label}
                {item.resolution && (
                  <span className='text-muted-foreground text-sm ml-3'>
                    {item.resolution}
                  </span>
                )}
              </span>
              <span className='text-muted-foreground'>{item.size}</span>
              {item.isPaid ? (
                <div className='relative w-fit'>
                  <Button
                    variant='outline'
                    className='h-12 font-normal bg-muted hover:bg-card'
                  >
                    <CircleArrowDown />
                  </Button>
                  <div className='absolute lg:-left-2 top-0 bg-chart-4 hover:bg-chart-4/80 rounded-full p-1'>
                    <Link href='/signup'>
                      <Zap className='w-3 h-3' />
                    </Link>
                  </div>
                </div>
              ) : (
                <Button
                  variant='outline'
                  className='h-12 font-normal hover:bg-muted'
                >
                  <CircleArrowDown />
                </Button>
              )}
            </div>
          ))}
        </CardContent>
      </ScrollArea>
    </Card>
  )
}
