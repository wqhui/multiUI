import React from 'react'
import { Input } from '@tarojs/components'
import './index.less'

export interface CustomInputProps {
  /** 输入框的初始内容 */
  value?: string
  /** 输入框类型 */
  type?: 'text' | 'number' | 'idcard' | 'digit' | 'safe-password' | 'nickname'
  /** 输入框为空时占位符 */
  placeholder?: string
  /** 指定placeholder的样式 */
  placeholderStyle?: string
  /** 指定placeholder的样式类 */
  placeholderClass?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 最大输入长度 */
  maxlength?: number
  /** 自定义样式类名 */
  className?: string
  /** 内联样式 */
  style?: React.CSSProperties
  /** 是否自动聚焦 */
  focus?: boolean
  /** 设置键盘右下角按钮的文字 */
  confirmType?: 'send' | 'search' | 'next' | 'go' | 'done'
  /** 输入框聚焦时触发 */
  onFocus?: (event: any) => void
  /** 输入框失去焦点时触发 */
  onBlur?: (event: any) => void
  /** 输入框内容变化时触发 */
  onInput?: (event: any) => void
  /** 点击完成按钮时触发 */
  onConfirm?: (event: any) => void
}

const CustomInput: React.FC<CustomInputProps> = ({
  value,
  type = 'text',
  placeholder,
  placeholderStyle,
  placeholderClass,
  disabled = false,
  maxlength = 140,
  className = '',
  style = {},
  focus = false,
  confirmType = 'done',
  onFocus,
  onBlur,
  onInput,
  onConfirm
}) => {
  const inputStyle = {
    ...style,
  }

  return (
    <Input 
      className={`custom-input ${className}`}
      style={inputStyle}
      value={value}
      type={type}
      placeholder={placeholder}
      placeholderStyle={placeholderStyle}
      placeholderClass={placeholderClass}
      disabled={disabled}
      maxlength={maxlength}
      focus={focus}
      confirmType={confirmType}
      onFocus={onFocus}
      onBlur={onBlur}
      onInput={onInput}
      onConfirm={onConfirm}
    />
  )
}

export default CustomInput