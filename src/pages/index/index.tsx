import { Component, PropsWithChildren } from 'react'
import { View, Button, Text } from '@tarojs/components'

import './index.less'
import Designer from '../designer'
import Preview from '../preview'

// #region 书写注意
//
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
//
// #endregion

type PageStateProps = {
  counter: {
    num: number
  }
}

type PageDispatchProps = {
  add: () => void
  dec: () => void
  asyncAdd: () => any
}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface IIndex {
  props: IProps;
}

type IShowView = 'designer' | 'preview'

class Index extends Component<PropsWithChildren, {currentView: IShowView}> {
  constructor(props) {
    super(props)
    this.state = {
      currentView: 'designer' 
    }
  }

  // 切换视图
  switchView = (view) => {
    this.setState({ currentView: view })
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

render() {
    const { currentView } = this.state

    return (
      <View className='index'>
        {/* 导航栏 */}
        <View className='nav-bar'>
          <Button 
            className={`nav-btn ${currentView === 'designer' ? 'active' : ''}`}
            size='mini'
            onClick={() => this.switchView('designer')}
          >
            设计
          </Button>
          <Button 
            className={`nav-btn ${currentView === 'preview' ? 'active' : ''}`}
            size='mini'
            onClick={() => this.switchView('preview')}
          >
            预览
          </Button>
        </View>

        {/* 内容区域 */}
        <View className='content'>
          {currentView === 'designer' && (
            <Designer />
          )}

          {currentView === 'preview' && (
            <Preview />
          )}
        </View>
      </View>
    )
  }
}

export default Index

