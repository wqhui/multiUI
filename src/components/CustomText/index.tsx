import React from 'react'
import { Text } from '@tarojs/components'
import './index.less'

export interface CustomTextProps {
  /** 文本内容 */
  children?: React.ReactNode
  /** 自定义样式类名 */
  className?: string
  /** 内联样式 */
  style?: React.CSSProperties

  /** 是否可选择 */
  selectable?: boolean
  /** 最大行数 */
  maxLines?: number
  /** 点击事件 */
  onClick?: () => void
}

const CustomText: React.FC<CustomTextProps> = ({
  children,
  className = '',
  style = {},
  selectable = false,
  maxLines,
  onClick
}) => {
  const textStyle = {
    ...style,
    ...(maxLines && {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitLineClamp: maxLines,
      WebkitBoxOrient: 'vertical'
    })
  }

  return (
    <Text 
      className={`custom-text ${className}`}
      style={textStyle}
      selectable={selectable}
      onClick={onClick}
    >
      {children}
    </Text>
  )
}

export default CustomText