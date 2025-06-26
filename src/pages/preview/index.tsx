import React, { useState, useEffect } from 'react'
import { View, Text, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.less'
import { useSelector } from 'react-redux'
import Renderer from '../../components/Renderer'
import type { MetaSchema } from '../../components/Renderer'

const Preview = () => {
  const [currentSchema, setCurrentSchema] = useState<MetaSchema | null>(null)
  const [error, setError] = useState('')
  const [viewMode, setViewMode] = useState<'content' | 'json'>('content') // 视图模式：内容或JSON
  
  // 从Redux store获取保存的JSON数据
  const savedJsonData = useSelector(state => state.designer.data)
  
  useEffect(() => {
    if (savedJsonData) {
      try {
        // const parsedSchema = JSON.parse(savedJsonData)
        if(typeof savedJsonData !== 'object'){
          throw new Error('格式错误' + savedJsonData )
        }
        setCurrentSchema(savedJsonData)
        setError('')
      } catch (e) {
        console.error(e)
        setError('JSON格式错误，无法解析'+savedJsonData)
        setCurrentSchema(null)
      }
    } else {

    }
  }, [savedJsonData])
  
  // 事件处理器
  const eventHandlers = {
    // 按钮点击事件
    submit_button_onClick: (data) => {
      Taro.showToast({
        title: '提交成功！',
        icon: 'success'
      })
    },
    register_btn_onClick: (data) => {
      Taro.showToast({
        title: '注册成功！',
        icon: 'success'
      })
    },
    reset_btn_onClick: (data) => {
      Taro.showToast({
        title: '重置成功！',
        icon: 'success'
      })
    },
    // 输入框事件
    name_input_onInput: (e) => {
      console.log('姓名输入:', e.detail.value)
    },
    username_onInput: (e) => {
      console.log('用户名输入:', e.detail.value)
    },
    email_onInput: (e) => {
      console.log('邮箱输入:', e.detail.value)
    },
    // 选择器事件
    gender_picker_onChange: (e) => {
      console.log('性别选择:', e.detail.value)
    },
    city_onChange: (e) => {
      console.log('城市选择:', e.detail.value)
    }
  }

  
  return (
    <View className='json-preview'>
      {/* 视图切换按钮 */}
      {currentSchema && !error && (
        <View className='view-toggle'>
          <Button 
            className={`toggle-btn ${viewMode === 'content' ? 'active' : ''}`}
            onClick={() => setViewMode('content')}
          >
            内容视图
          </Button>
          <Button 
            className={`toggle-btn ${viewMode === 'json' ? 'active' : ''}`}
            onClick={() => setViewMode('json')}
          >
            JSON视图
          </Button>
        </View>
      )}
      
      {/* 错误提示 */}
      {error && (
        <View className='error-message'>
          <Text>{error}</Text>
        </View>
      )}
      
      {/* 渲染器预览 */}
      {currentSchema && !error && viewMode === 'content' && (
        <View className='renderer-wrapper'>
          <Renderer 
            schema={currentSchema} 
            eventHandlers={eventHandlers}
          />
        </View>
      )}
      
      {/* JSON数据视图 */}
      {currentSchema && !error && viewMode === 'json' && (
        <View className='json-wrapper'>
          <View className='json-content'>
            <Text className='json-text'>{JSON.stringify(currentSchema, null, 2)}</Text>
          </View>
        </View>
      )}
      
      {/* 无数据提示 */}
      {!currentSchema && !error && (
        <View className='no-data'>
          <Text>暂无数据，请在JSON编辑器中输入Schema</Text>
        </View>
      )}
    </View>
  )
}

export default Preview