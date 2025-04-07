export function VideoPreview({ videoId }: { videoId: string }) {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`

  return (
    <div className='w-full h-80 lg:h-[340px]'>
      <iframe
        src={embedUrl}
        allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        className='w-full h-full rounded-md'
      />
    </div>
  )
}
