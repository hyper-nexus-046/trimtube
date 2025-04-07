import Link from 'next/link'
import { CircleArrowDown, Zap } from 'lucide-react'

import { Button } from '~/components/ui/button'
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
    <ScrollArea className='h-[340px] pr-4'>
      <div className='space-y-3'>
        <header className='flex items-center justify-between border-b pb-3'>
          <h2 className='text-lg font-bold'>Download</h2>
          <p className='text-sm'>MP3 / MP4</p>
        </header>

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
      </div>
    </ScrollArea>
  )
}
