import React from 'react'
import { Image } from '@tarojs/components'
import './index.less'

export interface CustomImageProps {
  /** 图片资源地址 */
  src: string
  /** 图片填充模式 */
  mode?: 'scaleToFill' | 'aspectFit' | 'aspectFill' | 'widthFix' | 'heightFix' | 'top' | 'bottom' | 'center' | 'left' | 'right' | 'top left' | 'top right' | 'bottom left' | 'bottom right'
  /** 自定义样式类名 */
  className?: string
  /** 内联样式 */
  style?: React.CSSProperties
  /** 是否懒加载 */
  lazyLoad?: boolean
  /** 默认图片 */
  defaultSource?: string
  /** 图片加载完成事件 */
  onLoad?: (event: any) => void
  /** 图片加载失败事件 */
  onError?: (event: any) => void
  /** 点击事件 */
  onClick?: () => void
}

const CustomImage: React.FC<CustomImageProps> = ({
  src,
  mode = 'aspectFit',
  className = '',
  style = {},
  lazyLoad = false,
  defaultSource,
  onLoad,
  onError,
  onClick
}) => {
  const imageStyle = {
    ...style,
  }

  const handleError = (event) => {
    if (defaultSource && event.target) {
      event.target.src = defaultSource
    }
    onError?.(event)
  }

  return (
    <Image 
      className={`custom-image ${className}`}
      style={imageStyle}
      src={src}
      mode={mode}
      lazyLoad={lazyLoad}
      onLoad={onLoad}
      onError={handleError}
      onClick={onClick}
    />
  )
}

export default CustomImage