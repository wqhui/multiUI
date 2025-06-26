# 多端UI组件渲染器使用说明

## 概述

本项目提供了一套完整的组件渲染器系统，可以通过 JSON Schema 动态生成 UI 界面。支持多种基础组件，并提供了可视化的编辑和预览功能。

## 功能特性

- 🎨 **可视化编辑**: 通过 JSON 编辑器设计界面
- 🔄 **实时预览**: 即时查看渲染效果
- 📱 **跨平台**: 支持微信小程序、H5 等多端
- 🧩 **组件丰富**: 提供容器、文本、图片、按钮、输入框、选择框等基础组件
- 📋 **示例模板**: 内置多种页面和组件示例

## 支持的组件

### 1. 容器组件 (Container)
基础布局容器，类似于 div 元素。

```json
{
  "type": "container",
  "id": "container_1",
  "props": {
    "style": {
      "backgroundColor": "#f5f5f5",
      "padding": "16px",
      "borderRadius": "8px"
    }
  },
  "children": []
}
```

### 2. 文本组件 (CustomText)
用于显示文本内容。

```json
{
  "type": "text",
  "id": "text_1",
  "content": "这是一段文本",
  "props": {
    "style": {
      "fontSize": "16px",
      "color": "#333",
      "textAlign": "center"
    }
  }
}
```

### 3. 图片组件 (CustomImage)
用于显示图片。

```json
{
  "type": "image",
  "id": "image_1",
  "props": {
    "src": "https://example.com/image.jpg",
    "mode": "aspectFit",
    "style": {
      "width": "100%",
      "height": "200px"
    }
  }
}
```

### 4. 按钮组件 (CustomButton)
交互按钮组件。

```json
{
  "type": "button",
  "id": "button_1",
  "content": "点击按钮",
  "props": {
    "type": "primary",
    "size": "default",
    "style": {}
  }
}
```

### 5. 输入框组件 (CustomInput)
用户输入组件。

```json
{
  "type": "input",
  "id": "input_1",
  "props": {
    "placeholder": "请输入内容",
    "type": "text",
    "style": {}
  }
}
```

### 6. 选择框组件 (CustomPicker)
下拉选择组件。

```json
{
  "type": "picker",
  "id": "picker_1",
  "props": {
    "placeholder": "请选择",
    "range": [
      {"label": "选项1", "value": "option1"},
      {"label": "选项2", "value": "option2"}
    ],
    "rangeKey": "label",
    "style": {}
  }
}
```

## 页面 Schema 结构

完整的页面 Schema 包含以下结构：

```json
{
  "title": "页面标题",
  "backgroundColor": "#ffffff",
  "components": [
    // 组件列表
  ]
}
```

## 事件处理

渲染器支持以下事件绑定：

- `{id}_onClick`: 点击事件
- `{id}_onInput`: 输入事件
- `{id}_onChange`: 选择变化事件

事件处理器在 Preview 组件中定义，可以根据需要扩展。

## 使用步骤

> 1. H5 使用 `yarn dev:h5` 即可预览
> 2. 微信小程序 `yarn dev:weapp `打包完成后，需用微信开发者工具打开`dist`目录预览

### 1. 编辑 JSON Schema

在「JSON编辑」页面：
- 手动输入 JSON Schema
- 或点击示例按钮快速加载模板
- 点击「保存 JSON」保存数据

### 2. 预览效果

在「预览」页面：
- 查看渲染后的界面效果
- 测试交互功能
- 切换不同示例



## 扩展开发

### 添加新组件

1. 在 `src/components/` 下创建新组件
2. 在 `src/components/index.ts` 中导出
3. 在 `src/components/Renderer/index.tsx` 中注册
4. 在 `src/utils/schemaExamples.ts` 中添加示例

### 自定义事件处理

在 Preview 组件的 `eventHandlers` 对象中添加新的事件处理函数：

```javascript
const eventHandlers = {
  custom_button_onClick: (data) => {
    // 自定义处理逻辑
  }
}
```

## 注意事项

1. **JSON 格式**: 确保输入的 JSON 格式正确
2. **组件 ID**: 每个组件的 ID 应该唯一
3. **属性验证**: 组件属性需要符合对应组件的 Props 接口
4. **性能考虑**: 避免过深的组件嵌套
5. **平台兼容**: 某些样式属性在不同平台可能有差异

## 示例项目

项目中包含了以下示例：

- **基础示例**: 展示各种组件的基本用法
- **表单示例**: 完整的表单页面
- **单组件示例**: 各个组件的独立示例

## 技术栈

- **框架**: Taro 4.x
- **语言**: TypeScript
- **状态管理**: Redux
- **样式**: Less
- **构建工具**: Yarn

## 开发命令

```bash
# 安装依赖
yarn install

# 开发模式 (微信小程序)，打包完成后需微信小程序打开dist目录预览
yarn dev:weapp

# 开发模式 (H5)
yarn dev:h5

# 构建生产版本
yarn build:weapp
```
