import {
  Brain,
  Download,
  FileText,
  Languages,
  Lightbulb,
  ShieldCheck,
  Shuffle,
  Timer
} from 'lucide-react'

import { Card, CardContent } from '~/components/ui/card'
import { TitledWrapper, Wrapper } from '~/components/wrappers'

export const Hero = () => {
  return (
    <Wrapper>
      <TitledWrapper
        title={
          <>
            Why <span className='text-primary'>Trimtube</span>?
          </>
        }
        para='The complete YouTube to insights platform where you can get the TLDR of any video in seconds'
        sectionName='Hero'
        headingLevel='h1'
        className='mb-content pt-content'
      >
        <div className='sm:w-4/5 lg:w-3/5 mx-auto text-center space-y-7 pt-10'>
          <h3 className='text-heading-h5 font-medium leading-tight'>
            Everything you need to extract value from YouTube videos
          </h3>
          <p className='text-paragraph-sm text-secondary-foreground'>
            Stop wasting time watching lengthy videos. Get instant insights,
            summaries, and actionable information with just one click.
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-6 pt-20'>
          {[
            {
              icon: <FileText />,
              title: 'Instant Transcripts',
              description:
                'Fetch YouTube transcripts in your native language with a single click. Access content without watching videos.'
            },
            {
              icon: <Languages />,
              title: '125+ Languages Support',
              description:
                'Get transcripts and summaries in over 125 languages. No language barriers, just pure content in your preferred tongue.'
            },
            {
              icon: <Brain />,
              title: 'AI Summarization',
              description:
                'Extract key insights from any YouTube content instantly. Our AI identifies and highlights what matters most.'
            },
            {
              icon: <Lightbulb />,
              title: 'Highlights Generator',
              description:
                'Automatically identify and extract the most important moments and insights from videos.'
            },
            {
              icon: <ShieldCheck />,
              title: 'Fact Checker',
              description:
                'Verify claims made in videos with our integrated fact-checking system to ensure accuracy.'
            },
            {
              icon: <Shuffle />,
              title: 'Content Conversion',
              description:
                'Convert transcripts to blogs and social media posts for better engagement and reach.'
            },
            {
              icon: <Download />,
              title: 'Download Options',
              description:
                'Save transcripts, summaries, and insights for offline access and future reference.'
            },
            {
              icon: <Timer />,
              title: 'Time Efficiency',
              description:
                'Get the TLDR of any video in seconds instead of watching hour-long content.'
            }
          ].map((feature, index) => (
            <Card key={index} className='flex items-start p-4'>
              <div className='bg-border p-2 rounded-xl'>{feature.icon}</div>
              <CardContent className='space-y-3'>
                <h3 className='text-base font-medium'>{feature.title}</h3>
                <p className='text-muted-foreground text-[15px]'>
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </TitledWrapper>
    </Wrapper>
  )
}
