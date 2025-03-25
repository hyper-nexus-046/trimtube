'use client'

import { useState } from 'react'
import Link from 'next/link'
import { pricingPlans } from '~/content/ts-files/home'
import { motion } from 'framer-motion'
import { ArrowUpRight, Check, Layers } from 'lucide-react'

import { cn } from '~/lib/utils'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardHeader } from '~/components/ui/card'
import { TitledWrapper } from '~/components/wrappers'

export const Pricing = ({
  title,
  description,
  headingLevel,
  className
}: {
  title?: string
  description?: string
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  className?: string
}) => {
  const [isAnnualy, setIsAnnualy] = useState(true)

  return (
    <TitledWrapper
      title={title ?? 'Flexible plans for growth'}
      para={
        description ?? 'Transparent pricing designed to fit your requirements.'
      }
      sectionName='Plans'
      headingLevel={headingLevel}
      className={cn('mb-content-lg', className)}
    >
      {/* Toggle Button */}
      <div className='flex justify-center pt-content-sm'>
        <div className='relative flex items-center w-[190px] py-1 bg-card rounded-sm border border-border'>
          <motion.div
            className='absolute top-1 bottom-1 left-0 w-20 bg-primary rounded-sm'
            animate={{ x: isAnnualy ? 7 : 102 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          />
          <Button
            variant='outline'
            className='relative z-10 flex-1 bg-transparent hover:bg-transparent border-none'
            onClick={() => setIsAnnualy(true)}
          >
            Annually
          </Button>
          <Button
            variant='outline'
            className='relative z-10 flex-1 bg-transparent hover:bg-transparent border-none'
            onClick={() => setIsAnnualy(false)}
          >
            Monthly
          </Button>
        </div>
      </div>
      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {pricingPlans.map((plan, index) => (
          <Card
            key={index}
            className='rounded-[30px]'
            style={{
              background:
                'linear-gradient(149deg, rgba(81,47,235,0.15) 0%, rgba(255,255,255,0.06) 29%, rgba(255,255,255,0.06) 74%, rgba(81,47,235,0.15) 100%)'
            }}
          >
            <CardHeader className='space-y-5'>
              <div className='flex items-center text-foreground gap-2'>
                <span className='bg-border p-2 rounded-sm'>
                  <Layers size={14} />
                </span>
                <h3 className='text-[17px]'>{plan.title}</h3>
              </div>
              <p className='text-heading-h6 text-foreground font-semibold'>
                {plan.custom
                  ? 'Custom'
                  : isAnnualy
                    ? plan.annualy
                    : plan.monthly}
                <span className='text-sm tracking-wider font-normal'>
                  {!plan.custom && '/month'}
                </span>
              </p>
              <p className='pb-4'>{plan.description}</p>
              <Button asChild className='w-full'>
                <Link
                  href='https://www.framer.com/?via=kanishkdubey'
                  className='flex items-center gap-2'
                >
                  Go with this plan <ArrowUpRight size={12} />
                </Link>
              </Button>
            </CardHeader>
            <CardContent className='text-muted-foreground pt-4'>
              <ul className='space-y-3'>
                {plan.features.map((feature, i) => (
                  <li key={i} className='flex items-center gap-2'>
                    <span className='bg-border p-1 rounded-sm'>
                      <Check size={15} />
                    </span>{' '}
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </TitledWrapper>
  )
}
