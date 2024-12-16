import containerProps from '@/types/types'
import React, { FC } from 'react'
import cn from 'classnames'

const Container : FC<containerProps> = ({children, className}) => {
  return (
    <div className={cn("container mx-auto px-4 sm:px-6 md:px-8 lg:px-10", className)}>
        { children }
    </div>
  )
}

export default Container