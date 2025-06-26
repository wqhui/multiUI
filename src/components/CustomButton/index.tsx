import React from 'react'
import { Button } from '@tarojs/components'
import './index.less'

export interface CustomButtonProps {
  /** 按钮文本 */
  children?: React.ReactNode
  /** 按钮类型 */
  type?: 'primary' | 'default' | 'warn'
  /** 按钮大小 */
  size?: 'default' | 'mini'
  /** 是否禁用 */
  disabled?: boolean
  /** 是否加载中 */
  loading?: boolean
  /** 是否朴素按钮 */
  plain?: boolean
  /** 自定义样式类名 */
  className?: string
  /** 内联样式 */
  style?: React.CSSProperties
  /** 点击事件 */
  onClick?: () => void
  /** 表单类型 */
  formType?: 'submit' | 'reset'
  /** 开放能力 */
  openType?: 'contact' | 'share' | 'getPhoneNumber' | 'getUserInfo' | 'launchApp' | 'openSetting' | 'feedback' | 'chooseAvatar'
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  type = 'default',
  size = 'default',
  disabled = false,
  loading = false,
  plain = false,
  className = '',
  style = {},
  onClick,
  formType,
  openType
}) => {
  const buttonStyle = {
    ...style,
  }

  return (
    <Button 
      className={`custom-button ${className}`}
      style={buttonStyle}
      type={type}
      size={size}
      disabled={disabled}
      loading={loading}
      plain={plain}
      onClick={onClick}
      formType={formType}
      openType={openType}
    >
      {children}
    </Button>
  )
}

export default CustomButton