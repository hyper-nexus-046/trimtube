'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, Check, Layers } from 'lucide-react'

import { Button } from '~/components/ui/button'
import { Card, CardContent } from '~/components/ui/card'
import { TitledWrapper } from '~/components/wrappers/title-wrapper'

import { pricingPlans } from './pricing-data'

export const Pricing = () => {
  const [isAnnualy, setIsAnnualy] = useState(true)

  return (
    <TitledWrapper
      title='Flexible plans for growth'
      para='Transparent pricing designed to fit your requirements.'
      sectionName='Plans'
      className='mb-content-lg'
      isMax
    >
      {/* Toggle Button */}
      <div className='flex justify-center pt-content-sm'>
        <div className='relative flex items-center  w-[190px] py-1 bg-card rounded-sm border border-border'>
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
            className='rounded-[30px] border-secondary text-muted-foreground'
            style={{
              background:
                'linear-gradient(149deg, rgba(81,47,235,0.15) 0%, rgba(255,255,255,0.06) 29%, rgba(255,255,255,0.06) 74%, rgba(81,47,235,0.15) 100%)'
            }}
          >
            <CardContent className='space-y-5 p-5 text-muted-foreground'>
              <div className='flex items-center text-foreground gap-2'>
                <span className='bg-border p-2 rounded-sm'>
                  <Layers size={14} />
                </span>
                <h3 className='text-[17px] text-muted-foreground'>
                  {plan.title}
                </h3>
              </div>
              <p className='text-heading-h6 text-foreground font-semibold'>
                {plan.custom
                  ? 'Custom'
                  : isAnnualy
                    ? plan.annualy
                    : plan.monthly}
                <span>{!plan.custom && '/month'}</span>
              </p>
              <p>{plan.description}</p>
              <div className='pt-4'>
                <Button asChild className='w-full'>
                  <Link
                    href='https://www.framer.com/?via=kanishkdubey'
                    className='flex items-center gap-2'
                  >
                    Go with this plan <ArrowUpRight size={12} />
                  </Link>
                </Button>
                <ul className='space-y-3 pt-10'>
                  {plan.features.map((feature, i) => (
                    <li key={i} className='flex items-center gap-2'>
                      <span className='bg-border p-1 rounded-sm'>
                        <Check size={15} />
                      </span>{' '}
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </TitledWrapper>
  )
}
