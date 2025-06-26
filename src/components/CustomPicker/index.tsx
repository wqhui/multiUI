import React, { useEffect, useState } from 'react'
import { Picker, View, Text } from '@tarojs/components'
import './index.less'

export interface PickerOption {
  label: string
  value: string | number
}

export interface CustomPickerProps {
  /** 选择器类型 */
  mode?: 'selector' | 'multiSelector' | 'time' | 'date' | 'region'
  /** 选择器数据 */
  range?: PickerOption[] | string[] | number[]
  /** 选择器数据的key */
  rangeKey?: string
  /** 当前选择的值 */
  value?: number | number[] | string
  /** 占位符文本 */
  placeholder?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 自定义样式类名 */
  className?: string
  /** 内联样式 */
  style?: React.CSSProperties
  /** 选择器值改变时触发 */
  onChange?: (event: any) => void
  /** 取消选择时触发 */
  onCancel?: (event: any) => void
}

const CustomPicker: React.FC<CustomPickerProps> = ({
  mode = 'selector',
  range = [],
  rangeKey,
  value,
  placeholder = '请选择',
  disabled = false,
  className = '',
  style = {},
  onChange,
  onCancel
}) => {
  const pickerStyle = {
    ...style,
  }

  const [selectValue, setSelectValue] = useState(value)

  useEffect(()=>{
    setSelectValue(value)
  },[value])

  // 获取显示文本
  const getDisplayText = () => {
    if (mode === 'selector' && range.length > 0) {
      let selectedIndex = Number(selectValue)
      selectedIndex = typeof selectedIndex === 'number' ? selectedIndex : 0
      const selectedItem = range[selectedIndex]
      if (typeof selectedItem === 'object' && rangeKey) {
        return selectedItem[rangeKey] || placeholder
      }
      return selectedItem || placeholder
    }
    return placeholder
  }

  const _onChange = (event)=>{
    onChange?.(event)
    setSelectValue(event.target.value)
  }

  return (
    <Picker
      mode={mode}
      range={range}
      rangeKey={rangeKey}
      value={selectValue}
      disabled={disabled}
      onChange={_onChange}
      onCancel={onCancel}
    >
      <View 
        className={`custom-picker ${disabled ? 'custom-picker--disabled' : ''} ${className}`}
        style={pickerStyle}
      >
        <Text className={`custom-picker__text ${!value && value !== 0 ? 'custom-picker__placeholder' : ''}`}>
          {getDisplayText()}
        </Text>
        <Text className="custom-picker__arrow">▼</Text>
      </View>
    </Picker>
  )
}

export default CustomPicker
