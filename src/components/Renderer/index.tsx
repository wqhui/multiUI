import React from 'react'
import {
  Container,
  CustomText,
  CustomImage,
  CustomButton,
  CustomInput,
  CustomPicker
} from '../index'
import { View } from '@tarojs/components'
import './index.less'
import { withErrorBoundary } from './withErrorBoundary'

// 组件Schema接口定义
export interface MetaSchema {
  /** 组件类型 */
  type: 'container' | 'text' | 'image' | 'button' | 'input' | 'picker'
  /** 组件唯一标识 */
  id?: string
  /** 组件属性 */
  props?: any
  /** 子组件 */
  children?: MetaSchema[]
  /** 组件内容（用于文本、按钮等） */
  content?: string
}



// 渲染器Props
export interface RendererProps {
  /** 页面Schema 或 单个组件Schema */
  schema: MetaSchema
  /** 事件处理器映射 */
  eventHandlers?: Record<string, (data?: any) => void>
}

// 组件映射表
const COMPONENT_MAP = {
  container: Container,
  text: CustomText,
  image: CustomImage,
  button: CustomButton,
  input: CustomInput,
  picker: CustomPicker
}

// 渲染单个组件
const renderComponent = (
  componentSchema: MetaSchema,
  eventHandlers?: Record<string, (data?: any) => void>
): React.ReactElement | null => {
  const { type, id, props = {}, children = [], content } = componentSchema
  
  // 获取对应的组件
  const Component = COMPONENT_MAP[type]
  if (!Component) {
    console.warn(`未知的组件类型: ${type}`)
    return <View className='unknow-component-wrapper'><CustomText>未知的组件类型: {type}</CustomText></View>
  }

  // 处理事件绑定
  const processedProps = { ...props }
  if (id && eventHandlers) {
    // 绑定点击事件
    if (eventHandlers[`${id}_onClick`]) {
      processedProps.onClick = () => eventHandlers[`${id}_onClick`](componentSchema)
    }
    // 绑定输入事件
    if (eventHandlers[`${id}_onInput`]) {
      processedProps.onInput = (e) => eventHandlers[`${id}_onInput`](e)
    }
    // 绑定选择事件
    if (eventHandlers[`${id}_onChange`]) {
      processedProps.onChange = (e) => eventHandlers[`${id}_onChange`](e)
    }
  }

  // 渲染子组件
  const childElements = children.map((child, index) => 
    renderComponent(child, eventHandlers)
  ).filter(Boolean)

  // 处理组件内容
  const componentContent = content || (childElements.length > 0 ? childElements : undefined)

  return React.createElement(
    withErrorBoundary(Component),
    { key: id || `${type}_${Math.random()}`, id, ...processedProps },
    componentContent
  )
  // <React.createElement(
  //   Component,
  //   { key: id || `${type}_${Math.random()}`, ...processedProps },
  //   componentContent
  // )
}


// 主渲染器组件
const Renderer: React.FC<RendererProps> = ({ schema, eventHandlers }) => {
  // 如果是单个组件Schema，直接渲染组件
  return (
    <View className='render-page'>
      {renderComponent(schema, eventHandlers)}
    </View>
  )
}

export default Renderer