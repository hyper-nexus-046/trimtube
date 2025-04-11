'use client'

import { useState } from 'react'
import { toast } from 'sonner'

import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '~/components/ui/dialog'
import { Input } from '~/components/ui/input'
import { VideoInformation } from '~/components/common/cards/video-information'

import { VideoPreview } from './video-preview'

function extractYouTubeId(link: string): string | null {
  const regex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/
  const match = regex.exec(link.trim())
  return match?.[1] ?? null
}

export const HeroInput = () => {
  const [url, setUrl] = useState('')
  const [videoId, setVideoId] = useState<string | null>(null)
  const [openDialog, setOpenDialog] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value.trim()
    setUrl(val)
    const extractedId = extractYouTubeId(val)
    if (extractedId) {
      setVideoId(extractedId)
      setOpenDialog(true)
    } else {
      toast.error('Invalid YouTube URL', {
        description: 'Please enter a valid YouTube video URL',
        duration: 3000
      })
    }
  }

  function handleDialogOpenChange(isOpen: boolean) {
    setOpenDialog(isOpen)
    if (!isOpen) {
      setUrl('')
      setVideoId(null)
    }
  }
  return (
    <>
      <div className='w-3/4 lg:w-2/4 xl:w-2/5 rounded-md p-1 bg-[length:400%_400%] animate-[gradient-x_7s_ease_infinite] bg-[linear-gradient(90deg,#db8b46_0%,#5230e8_30%,#db8b46_50%,#5230e8_70%,#db8b46_100%)]'>
        <Input
          placeholder='Enter your Youtube video link here or just copy and paste it'
          className='bg-black/60 px-4 py-5 sm:py-[26px] rounded-md text-xs border-none text-white'
          value={url}
          onChange={handleChange}
        />
      </div>
      <Dialog open={openDialog} onOpenChange={handleDialogOpenChange}>
        <DialogContent className='sm:max-w-[1000px] h-[800px] lg:h-[480px] overflow-hidden [&>button.absolute]:border [&>button.absolute]:p-2'>
          <DialogHeader className='flex-row gap-3 items-center'>
            <Avatar>
              <AvatarImage
                src='https://github.com/shadcn.png'
                alt='Youtube Channel'
              />
              <AvatarFallback>Profile</AvatarFallback>
            </Avatar>
            <div>
              <DialogTitle className='text-base'>J.Studio</DialogTitle>
              <DialogDescription className='text-sm'>
                02:30:00
              </DialogDescription>
            </div>
          </DialogHeader>
          <div className='grid lg:grid-cols-[1fr_1fr] items-stretch gap-8'>
            <div>
              {videoId ? (
                <VideoPreview videoId={videoId} />
              ) : (
                <p className='text-center text-sm text-red-500'>
                  Invalid or missing video ID
                </p>
              )}
            </div>
            <VideoInformation />
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
