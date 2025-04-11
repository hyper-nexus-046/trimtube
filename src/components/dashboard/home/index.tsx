import data from '~/content/json-files/faq.json'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '~/components/ui/accordion'

export const HomeContent = () => {
  return (
    <div>
      <h1 className='text-heading-h5 font-semibold'>
        Getting Started with TrimTube
      </h1>

      <div className='grid gap-5 lg:grid-cols-[1.6fr_1fr] mt-5'>
        <div className='bg-muted p-5 pb-8'>
          <h3 className='text-heading-h6'>One Click Downloading</h3>
          <p className='pt-4 font-light leading-6 text-muted-foreground'>
            TrimTube is a web application that allows users to download videos
            from YouTube and other video streaming platforms in just one click.
            It supports a wide range of video formats, including MP4, AVI, and
            WebM. The application is easy to use and requires no technical
            knowledge. Simply copy the video link, select the desired video
            quality, and click the Download button. The application will do the
            rest and provide you with a downloadable video file in just a few
            seconds.
          </p>
        </div>
        <Accordion
          type='single'
          collapsible
          className='w-full bg-muted p-5 pb-14'
        >
          <h2 className='text-heading-h6 pb-6 font-semibold'>FAQ</h2>
          {data.slice(0, 4).map(item => (
            <AccordionItem
              className='rounded-none'
              key={String(item.id)}
              value={String(item.id)}
            >
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent className='text-muted-foreground'>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
