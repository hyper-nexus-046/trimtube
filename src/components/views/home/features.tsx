import { Card, CardContent, CardHeader } from '~/components/ui/card'
import { Skeleton } from '~/components/ui/skeleton'
import { TitledWrapper } from '~/components/wrappers'

export const Features = () => {
  return (
    <TitledWrapper
      title='Innovative services for growth'
      para='Tailored solutions to streamline, innovate, and grow.'
      sectionName='Services'
      className='mb-content-lg'
      isMax
    >
      <div className='grid gap-6 pt-content-sm md:grid-cols-2 lg:grid-cols-3'>
        {[
          {
            title: 'Business Chatbot',
            description:
              'Enhance customer interactions by automating responses with intelligent chatbots, providing seamless service.'
          },
          {
            title: 'Content Creation',
            description:
              'Effortlessly generate high-quality, engaging content tailored to your audience using AI-powered tools.'
          },
          {
            title: 'Lead Generation',
            description:
              'Strengthen your sales pipeline by identifying, targeting, and attracting high-quality prospects with precision.'
          }
        ].map((feature, index) => (
          <Card key={index} className='rounded-2xl text-muted-foreground'>
            <CardHeader>
              <div className='flex gap-4 rounded-lg bg-zinc-900 p-4'>
                <Skeleton className='h-10 w-10 rounded-md bg-zinc-800' />
                <div className='flex-1 space-y-3'>
                  <Skeleton className='h-3 w-3/4 rounded bg-zinc-800' />
                  <Skeleton className='h-3 w-full rounded bg-zinc-800' />
                  <Skeleton className='h-3 w-4/5 rounded bg-zinc-800' />
                </div>
              </div>
              <div className='flex justify-between rounded-lg bg-zinc-900 p-4'>
                <div className='flex-1 space-y-3 pr-4'>
                  <div className='flex justify-between'>
                    <div className='w-3/4'>
                      <Skeleton className='h-3 w-1/3 rounded bg-zinc-800' />
                    </div>
                  </div>
                  <Skeleton className='h-3 w-full rounded bg-zinc-800' />
                  <Skeleton className='h-3 w-full rounded bg-zinc-800' />
                </div>
                <Skeleton className='h-10 w-10 rounded-md bg-zinc-800' />
              </div>
            </CardHeader>
            <CardContent className=''>
              <h3 className='text-heading-h7 font-medium'>{feature.title}</h3>
              <p className='text-muted-foreground pt-2 text-[15px]'>
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className='grid gap-6 md:grid-cols-2'>
        {[
          {
            title: 'Data Insights',
            description:
              'Extract actionable insights from complex data sets to drive informed decisions and accelerate business growth.'
          },
          {
            title: 'AI Consulting',
            description:
              'Work with our experts to develop personalized AI strategies that streamline operations and deliver impactful results.'
          }
        ].map((feature, index) => (
          <Card key={index} className='rounded-2xl text-muted-foreground'>
            <CardContent className='relative space-y-4 text-foreground p-5'>
              <div className='flex gap-4 rounded-lg bg-zinc-900 p-4'>
                <Skeleton className='h-10 w-10 rounded-md bg-zinc-800' />
                <div className='flex-1 space-y-3'>
                  <Skeleton className='h-3 w-3/4 rounded bg-zinc-800' />
                  <Skeleton className='h-3 w-full rounded bg-zinc-800' />
                  <Skeleton className='h-3 w-4/5 rounded bg-zinc-800' />
                </div>
              </div>
              <div className='flex justify-between rounded-lg bg-zinc-900 p-4'>
                <div className='flex-1 space-y-3 pr-4'>
                  <div className='flex justify-between'>
                    <div className='w-3/4'>
                      <Skeleton className='h-3 w-1/3 rounded bg-zinc-800' />
                    </div>
                  </div>
                  <Skeleton className='h-3 w-full rounded bg-zinc-800' />
                  <Skeleton className='h-3 w-full rounded bg-zinc-800' />
                </div>
                <Skeleton className='h-10 w-10 rounded-md bg-zinc-800' />
              </div>
              <div>
                <h3 className='text-heading-h7 font-medium'>{feature.title}</h3>
                <p className='text-muted-foreground pt-2'>
                  {feature.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </TitledWrapper>
  )
}
