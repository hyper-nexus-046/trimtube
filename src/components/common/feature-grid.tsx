import { Check, TrendingDown, TrendingUp } from 'lucide-react'

import { Card, CardContent } from '~/components/ui/card'
import { TitledWrapper } from '~/components/wrappers'

export const FeatureGrid = ({
  className = 'grid gap-6 pt-content-sm md:grid-cols-2 lg:grid-cols-3',
  title,
  para,
  sectionName,
  isMax = false,
  features = [
    {
      icon: TrendingDown,
      title: 'Cost reduction',
      description:
        'Optimize business processes and streamline operations to significantly minimize costs and maximize overall efficiency.'
    },
    {
      icon: Check,
      title: 'Improved outcomes',
      description:
        'Leverage powerful data-driven insights and innovative strategies to enhance business performance and achieve superior outcomes.'
    },
    {
      icon: TrendingUp,
      title: 'Increased productivity',
      description:
        'Enhance group performance and output by automating redundant tasks, refining processes, and speeding up business functions.'
    }
  ]
}: {
  className?: string
  title?: string
  para?: string
  sectionName?: string
  isMax?: boolean
  features?: {
    icon: React.ElementType
    title: string
    description: string
  }[]
}) => {
  return (
    <TitledWrapper
      title={title ?? 'Maximize efficiency and impact'}
      para={para ?? 'Discover the key benefits of partnering with us.'}
      sectionName={sectionName ?? 'Benefits'}
      className='mb-content-lg !px-0'
      isMax={isMax}
    >
      <div className={className}>
        {features?.map((feature, index) => (
          <Card
            key={index}
            className='relative overflow-hidden rounded-[30px] border-secondary'
          >
            <CardContent className='flex h-full flex-col text-foreground p-6'>
              <span className='bg-border p-[6px] w-fit lg-p-2 rounded-sm'>
                <feature.icon size={18} />
              </span>
              <h3 className='text-heading-h7 font-medium pb-3 pt-6'>
                {feature.title}
              </h3>
              <p className='text-muted-foreground'>{feature.description}</p>
            </CardContent>
            <div className='absolute -right-3 top-0 h-2/5 w-1/4 bg-[rgba(81,47,235,0.5)] blur-[50px]' />
          </Card>
        ))}
      </div>
    </TitledWrapper>
  )
}
