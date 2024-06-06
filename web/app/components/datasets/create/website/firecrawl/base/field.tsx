'use client'
import type { FC } from 'react'
import React from 'react'
import cn from 'classnames'
import Input from './input'

type Props = {
  className?: string
  label: string
  value: string | number
  onChange: (value: string | number) => void
  isRequired?: boolean
  placeholder?: string
  isNumber?: boolean
}

const Field: FC<Props> = ({
  className,
  label,
  value,
  onChange,
  isRequired = false,
  placeholder = '',
  isNumber = false,
}) => {
  return (
    <div className={cn(className)}>
      <div className='flex py-[7px]'>
        <div className='flex items-center h-[18px] text-[13px] font-medium text-gray-900'>{label} </div>
        {isRequired && <span className='ml-0.5 text-xs font-semibold text-[#D92D20]'>*</span>}
      </div>
      <Input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        isNumber={isNumber}
      />
    </div>
  )
}
export default React.memo(Field)