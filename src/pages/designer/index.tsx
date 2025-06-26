import React, { useState } from 'react'
import { View, Textarea, Button, Text, ScrollView } from '@tarojs/components'
import { useDispatch, useSelector } from 'react-redux'
import Taro from '@tarojs/taro'
import { saveJsonData, clearJsonData } from '../../actions/designer'
import { pageSchemaExample, formPageExample, basicComponentExamples } from '../../utils/schemaExamples'
import './index.less'

const Designer = () => {
  const [jsonInput, setJsonInput] = useState('')
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  
  // 从Redux store获取保存的JSON数据
  const savedJsonData = useSelector(state => state.designer.data)
  const savedJsonList = useSelector(state => state.designer.list)

  // 验证JSON格式
  const validateJson = (jsonString) => {
    try {
      JSON.parse(jsonString)
      return true
    } catch (e) {
      return false
    }
  }

  // 处理输入变化
  const handleInputChange = (e) => {
    const value = e.detail.value
    setJsonInput(value)
    
    // 清除之前的错误信息
    if (error) {
      setError('')
    }
  }

  // 保存JSON数据
  const handleSave = () => {
    if (!jsonInput.trim()) {
      setError('请输入JSON数据')
      return
    }

    if (!validateJson(jsonInput)) {
      setError('JSON格式不正确，请检查语法')
      return
    }

    try {
      const parsedJson = JSON.parse(jsonInput)
      dispatch(saveJsonData(parsedJson))
      
      Taro.showToast({
        title: '保存成功',
        icon: 'success',
        duration: 2000
      })
      
      // 清空输入框
      setJsonInput('')
      setError('')
    } catch (e) {
      setError('保存失败，请重试')
    }
  }

  // 清空所有数据
  const handleClear = () => {
    Taro.showModal({
      title: '确认清空',
      content: '确定要清空所有保存的JSON数据吗？',
      success: (res) => {
        if (res.confirm) {
          dispatch(clearJsonData())
          setJsonInput('')
          setError('')
          Taro.showToast({
            title: '已清空',
            icon: 'success'
          })
        }
      }
    })
  }

  // 格式化JSON显示
  const formatJson = (json) => {
    try {
      return JSON.stringify(json, null, 2)
    } catch (e) {
      return '无效的JSON数据'
    }
  }

  // 加载示例Schema
  const loadExample = (example) => {
    const formattedJson = JSON.stringify(example, null, 2)
    setJsonInput(formattedJson)
    setError('')
  }

  // 加载基础组件示例
  const loadComponentExample = (componentType) => {
    const example = basicComponentExamples[componentType]
    if (example) {
      const formattedJson = JSON.stringify(example, null, 2)
      setJsonInput(formattedJson)
      setError('')
    }
  }

  return (
    <View className='json-editor'>
      <View className='input-section'>
        <Text className='section-title'>输入 JSON Schema:</Text>
        
        {/* 示例按钮区域 */}
        <View className='examples-section'>
          <Text className='examples-title'>快速加载示例:</Text>    
          <View className='component-buttons'>
              <Button 
                className='example-button'
                size='mini' 
                type='default'
                onClick={() => loadExample(pageSchemaExample)}
              >
                完整页面
              </Button>
              <Button 
                className='example-button'
                size='mini' 
                type='default'
                onClick={() => loadExample(formPageExample)}
              >
                表单页面
            </Button>
            <Button 
              className='example-button'
              size='mini' 
              onClick={() => loadComponentExample('container')}
            >
              容器
            </Button>
            <Button 
              className='example-button'
              size='mini' 
              onClick={() => loadComponentExample('text')}
            >
              文本
            </Button>
            <Button 
              className='example-button'
              size='mini' 
              onClick={() => loadComponentExample('image')}
            >
              图片
            </Button>
            <Button 
              className='example-button'
              size='mini' 
              onClick={() => loadComponentExample('button')}
            >
              按钮
            </Button>
            <Button 
              className='example-button'
              size='mini' 
              onClick={() => loadComponentExample('input')}
            >
              输入框
            </Button>
            <Button 
              className='example-button'
              size='mini' 
              onClick={() => loadComponentExample('picker')}
            >
              选择框
            </Button>
          </View>
        </View>
        
        <View className='input-box'>
          <Textarea
            className='json-input'
            placeholder='请输入有效的JSON Schema，或点击上方示例按钮快速加载'
            value={jsonInput}
            onInput={handleInputChange}
            maxlength={-1}
            autoHeight
          />
        </View>
        
        {error && (
          <View className='error-message'>
            <Text className='error-text'>{error}</Text>
          </View>
        )}

        <View className='button-group'>
          <Button 
            className='save-button' 
            type='primary'
            onClick={handleSave}
          >
            保 存
          </Button>
          <Button 
            className='clear-button' 
            onClick={handleClear}
          >
            清空所有
          </Button>
        </View>
      </View>

      <View className='saved-section'>
        <Text className='section-title'>当前保存的数据:</Text>
        {savedJsonData ? (
          <ScrollView scrollY className='json-display'>
            <Text className='json-text'>{formatJson(savedJsonData)}</Text>
          </ScrollView>
        ) : (
          <View className='empty-state'>
            <Text className='empty-text'>暂无保存的数据</Text>
          </View>
        )}
      </View>

      <View className='history-section'>
        <Text className='section-title'>历史记录 ({savedJsonList.length}):</Text>
        {savedJsonList.length > 0 ? (
          <ScrollView scrollY className='history-list'>
            {savedJsonList.map((item, index) => (
              <View key={index} className='history-item'>
                <Text className='history-index'>#{index + 1}</Text>
                <Text className='history-time'>{item.timestamp}</Text>
                <View className='history-content'>
                  <Text className='json-text'>{formatJson(item.data)}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        ) : (
          <View className='empty-state'>
            <Text className='empty-text'>暂无历史记录</Text>
          </View>
        )}
      </View>
    </View>
  )
}

export default Designer