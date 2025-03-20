'use client'

import { useState } from 'react'

import { cn } from '~/lib/utils'
import { Input } from '~/components/ui/input'
import { TitledWrapper } from '~/components/wrappers'

export const Typography = ({
  fontSizes = [
    {
      name: 'heading-h1',
      text: 'text-heading-h1'
    },
    {
      name: 'heading-h2',
      text: 'text-heading-h2'
    },
    {
      name: 'heading-h3',
      text: 'text-heading-h3'
    },
    {
      name: 'heading-h4',
      text: 'text-heading-h4'
    },
    {
      name: 'heading-h5',
      text: 'text-heading-h5'
    },
    {
      name: 'heading-h6',
      text: 'text-heading-h6'
    },
    {
      name: 'heading-h7',
      text: 'text-heading-h7'
    },
    {
      name: 'paragraph-sm',
      text: 'text-paragraph-sm'
    },
    {
      name: 'paragraph',
      text: 'text-paragraph'
    },
    {
      name: 'paragraph-section',
      text: 'text-paragraph-section'
    }
  ]
}: {
  fontSizes?: {
    name: string
    text: string
  }[]
}) => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <TitledWrapper
      title='Typography'
      className='py-content-sm'
      para='Explore various font sizes to enhance your design. Use the input field to search for specific sizes.'
    >
      <Input
        type='text'
        placeholder='Try font sizes...'
        className='mb-4 w-full rounded border p-2'
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <div className='flex flex-col gap-4'>
        {fontSizes.map(text => (
          <div key={text.name} className='mb-3 grid gap-4 p-2'>
            <span className='text-muted-forground w-fit -rotate-2 text-ellipsis rounded-full bg-muted px-4 py-2 text-base'>
              {' '}
              {text.name}
            </span>
            <p className={cn('text-left', text.text)}>
              {searchTerm.trim() ? searchTerm : text.name}
            </p>
          </div>
        ))}
      </div>
    </TitledWrapper>
  )
}
