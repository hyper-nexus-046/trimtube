'use client'

import { useState } from 'react'

import { Dialog, DialogContent, DialogTitle } from '~/components/ui/dialog'
import { Input } from '~/components/ui/input'
import { TitledWrapper } from '~/components/wrappers'

import { VideoInformation } from './VideoInformation'
import { VideoPreview } from './videoPreview'

function extractYouTubeId(link: string): string | null {
  const regex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/
  const match = regex.exec(link.trim())
  return match?.[1] ?? null
}
export const Hero = () => {
  const [url, setUrl] = useState('')
  const [videoId, setVideoId] = useState<string | null>(null)
  const [openDialog, setOpenDialog] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value.trim()
    setUrl(val)
    const extractedId = extractYouTubeId(val)
    console.log('Extracted ID:', extractedId)
    if (extractedId) {
      setVideoId(extractedId)
      setOpenDialog(true)
    }
  }

  function handleDialogOpenChange(isOpen: boolean) {
    console.log('Dialog open state changed to:', isOpen)
    setOpenDialog(isOpen)
    if (!isOpen) {
      setUrl('')
      setVideoId(null)
    }
  }

  return (
    <TitledWrapper
      title='The Fast and Modern way to download YouTube videos.'
      para='Elevate your Youtube video editing with the speed and precision of Trimtube'
      sectionName='Hero'
      className='mb-content-lg pt-content flex flex-col items-center'
      headingLevel='h1'
      isMax
    >
      {!openDialog && (
        <div className='w-3/4 lg:w-2/4 xl:w-2/5 rounded-md p-1 bg-[length:400%_400%] animate-[gradient-x_7s_ease_infinite] bg-[linear-gradient(90deg,#db8b46_0%,#5230e8_30%,#db8b46_50%,#5230e8_70%,#db8b46_100%)]'>
          <Input
            placeholder='Enter your Youtube video link here or just copy and paste it'
            className='bg-black/60 px-4 py-5 sm:py-[26px] rounded-md text-xs border-none text-white'
            value={url}
            onChange={handleChange}
          />
        </div>
      )}

      <Dialog open={openDialog} onOpenChange={handleDialogOpenChange}>
        <DialogContent className='sm:max-w-[1000px] h-[800px] lg:h-[480px] p-4 overflow-hidden lg:grid-cols-[1fr_1fr] border border-white lg:[&>button.absolute]:hidden'>
          <DialogTitle className='sr-only'>
            Video Preview and Download
          </DialogTitle>
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
        </DialogContent>
      </Dialog>
    </TitledWrapper>
  )
}
