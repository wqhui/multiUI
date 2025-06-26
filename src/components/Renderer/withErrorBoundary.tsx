import { View } from '@tarojs/components'
import React from 'react'

function ErrorFallback({
  text = '出错了，请稍后再试。'
}: {text?: string}){
  return <View className='error-callback'>{text}</View>
}

export function withErrorBoundary(WrappedComponent, fallback?: React.ReactNode) {
  return class ErrorBoundary extends React.Component {
    state = { hasError: false }

    static getDerivedStateFromError() {
      return { hasError: true }
    }

    componentDidCatch(error, info) {
      // 可以在这里上报错误，比如调用 Sentry、日志系统等
      console.error('组件错误捕获:', error, info)
    }

    render() {
      if (this.state.hasError) {
        return fallback ?? <ErrorFallback text={`[type=${this.props.type}]， [id=${this.props.id}] 组件渲染失败`}/>
      }
      return <WrappedComponent {...this.props} />
    }
  }
}