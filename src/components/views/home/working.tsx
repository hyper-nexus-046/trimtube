import { Card, CardContent } from '~/components/ui/card'
import { TitledWrapper } from '~/components/wrappers/title-wrapper'

export const Working = () => {
  return (
    <TitledWrapper
      title='Your path to excellence'
      para='A simple, effective approach to deliver excellence.'
      sectionName='Process'
      className='mb-content-lg'
      isMax
    >
      <div className='grid gap-6 pt-content-sm md:grid-cols-2 lg:grid-cols-3'>
        {[
          {
            title: 'Discovery & Analysis',
            description:
              'We dive deep into your needs, exploring ideas and defining strategies for long-term success.'
          },
          {
            title: 'Development & Test',
            description:
              'We craft tailored solutions for your goals and rigorously test them for top-notch reliability.'
          },
          {
            title: 'Launch & Maintain',
            description:
              'We deploy your solution seamlessly and ensure its continued performance with ongoing care.'
          }
        ].map((feature, index) => (
          <Card key={index} className='rounded-[30px] text-muted-foreground'>
            <CardContent className='space-y-4 text-foreground p-5'>
              <div>
                <div className='flex gap-2 bg-input p-4 rounded-t-lg'>
                  <div className='w-3 h-3 bg-red-500 rounded-full'></div>
                  <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
                  <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                </div>
                <div className='h-36 relative'>
                  <div
                    className='absolute inset-0'
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.12)',
                      WebkitMask:
                        'linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.435) 27.4775%, rgb(0, 0, 0) 100%)',
                      mask: 'linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.435) 27.4775%, rgb(0, 0, 0) 100%)'
                    }}
                  />
                </div>
              </div>
              <h3 className='text-heading-h7 font-medium'>{feature.title}</h3>
              <p className='text-muted-foreground'>{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </TitledWrapper>
  )
}
