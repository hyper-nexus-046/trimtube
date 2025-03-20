export function TailwindIndicator() {
  if (process.env.NODE_ENV === 'development')
    return (
      <aside className='border-base-300 fixed bottom-5 right-5 z-50 flex size-6 items-center justify-center rounded-full border-2 bg-red-500 p-3 font-mono text-xs'>
        <div className='block sm:hidden'>xs</div>
        <div className='hidden sm:block md:hidden'>sm</div>
        <div className='hidden md:block lg:hidden'>md</div>
        <div className='hidden lg:block xl:hidden'>lg</div>
        <div className='hidden xl:block 2xl:hidden'>xl</div>
        <div className='hidden 2xl:block'>2xl</div>
      </aside>
    )

  return null
}
