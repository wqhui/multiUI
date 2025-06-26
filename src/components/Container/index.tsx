import React from 'react'
import { View } from '@tarojs/components'
import './index.less'

export interface ContainerProps {
  /** 容器内容 */
  children?: React.ReactNode
  /** 自定义样式类名 */
  className?: string
  /** 内联样式 */
  style?: React.CSSProperties
  /** 背景色 */
  backgroundColor?: string
  /** 内边距 */
  padding?: string | number
  /** 外边距 */
  margin?: string | number
  /** 边框 */
  border?: string
  /** 圆角 */
  borderRadius?: string | number
  /** 宽度 */
  width?: string | number
  /** 高度 */
  height?: string | number
  /** 点击事件 */
  onClick?: () => void
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  style = {},
  onClick
}) => {
  const containerStyle = {
    ...style,
  }

  return (
    <View 
      className={`custom-container ${className}`}
      style={containerStyle}
      onClick={onClick}
    >
      {children}
    </View>
  )
}

export default Container