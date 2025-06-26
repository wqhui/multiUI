import type { MetaSchema } from '../components/Renderer'

// 基础组件示例
export const basicComponentExamples: Record<string, MetaSchema> = {
  // 容器示例
  container: {
    type: 'container',
    id: 'container_1',
    props: {
      style: {
        backgroundColor: '#f5f5f5',
        padding: '16px',
        borderRadius: '8px',
        margin: '8px 0'
      }
    },
    children: [
      {
        type: 'text',
        content: '这是一个容器组件',
        props: {
          style: {
            textAlign: 'center'
          }
        }
      }
    ]
  },

  // 文本示例
  text: {
    type: 'text',
    id: 'text_1',
    content: '这是一段示例文本',
    props: {
      style: {
        fontSize: '16px',
        color: '#333',
        textAlign: 'left',
        fontWeight: 'normal'
      }
    }
  },

  // 图片示例
  image: {
    type: 'image',
    id: 'image_1',
    props: {
      src: 'https://ts4.tc.mm.bing.net/th/id/ODLS.dd83fb74-b03c-4711-9a37-2319900438f3?w=32&h=32&qlt=90&pcl=fffffa&o=6&cb=iavawebpc1&pid=1.2g',
      mode: 'aspectFit',
      style: {
        width: '100%',
        height: '200px',
        borderRadius: '8px'
      }
    }
  },

  // 按钮示例
  button: {
    type: 'button',
    id: 'button_1',
    content: '点击按钮',
    props: {
      type: 'primary',
      size: 'default',
      style: {
        backgroundColor: '#1890ff',
        color: '#fff',
        borderRadius: '4px'
      }
    }
  },

  // 输入框示例
  input: {
    type: 'input',
    id: 'input_1',
    props: {
      placeholder: '请输入内容',
      type: 'text',
      style: {
        backgroundColor: '#fff',
        borderColor: '#e8e8e8',
        borderRadius: '4px'
      }
    }
  },

  // 选择框示例
  picker: {
    type: 'picker',
    id: 'picker_1',
    props: {
      placeholder: '请选择选项',
      range: [
        { label: '选项1', value: 'option1' },
        { label: '选项2', value: 'option2' },
        { label: '选项3', value: 'option3' }
      ],
      rangeKey: 'label'
    }
  }
}

// 完整页面示例
export const pageSchemaExample: MetaSchema = {
  type: 'container',
  id: 'form_wrapper',
    props: {
      style: {
        padding: '20px',
      }
  },
  children: [
    {
      type: 'text',
      id: 'header_title',
      content: '这是一个使用JSON Schema生成的页面示例',
      props: {
        style: {
          fontSize: '36px',
          fontWeight: 'bold',
          margin: '0 0 36px 0'
        }
      }
    },
    {
      type: 'container',
      id: 'header_container',
      props: {
        style: {
          backgroundColor: '#1890ff',
          padding: '20px',
          borderRadius: '8px',
          margin: '0 0 16px 0'
        }
      },
      children: [
        {
          type: 'text',
          content: '欢迎使用组件渲染器',
          props: {
            style: {
              fontSize: '20px',
              color: '#fff',
              textAlign: 'center',
              fontWeight: 'bold'
            }
          }
        }
      ]
    },
    {
      type: 'image',
      id: 'banner_image',
      props: {
        src: 'https://ts4.tc.mm.bing.net/th/id/ODLS.dd83fb74-b03c-4711-9a37-2319900438f3?w=32&h=32&qlt=90&pcl=fffffa&o=6&cb=iavawebpc1&pid=1.2',
        mode: 'aspectFit',
        style: {
          width: '100%',
          height: '150px',
          borderRadius: '8px',
          margin: '0 0 16px 0'
        }
      }
    },
    {
      type: 'container',
      id: 'form_container',
      props: {
        style: {
          backgroundColor: '#f9f9f9',
          padding: '16px',
          borderRadius: '8px',
          margin: '0 0 16px 0'
        }
      },
      children: [
        {
          type: 'text',
          content: '用户信息表单',
          props: {
            style: {
              fontSize: '16px',
              fontWeight: 'bold',
              margin: '0 0 12px 0'
            }
          }
        },
        {
          type: 'input',
          id: 'name_input',
          props: {
            placeholder: '请输入姓名',
            type: 'text',
            style: {
              margin: '0 0 12px 0'
            }
          }
        },
        {
          type: 'picker',
          id: 'gender_picker',
          props: {
            placeholder: '请选择性别',
            range: [
              { label: '男', value: 'male' },
              { label: '女', value: 'female' }
            ],
            rangeKey: 'label',
            style: {
              margin: '0 0 12px 0'
            }
          }
        },
        {
          type: 'button',
          id: 'submit_button',
          content: '提交',
          props: {
            style: {
              width: '100%',
            }
          }
        }
      ]
    },
  ]
}

// 表单页面示例
export const formPageExample = {
      type: 'container',
      id: 'form_wrapper',
      props: {
        style: {
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '12px',
          margin: '16px'
        }
      },
      children: [
        {
          type: 'text',
          content: '表单示例页面',
          id: 'header_title',
          props: {
            style: {
              fontSize: '36px',
              fontWeight: 'bold',
              margin: '0 0 36px 0'
            }
          }
        },
        {
          type: 'text',
          content: '用户注册',
          props: {
            style: {
              fontSize: '24px',
              fontWeight: 'bold',
              textAlign: 'center',
              margin: '0 0 24px 0'
            }
          }
        },
        {
          type: 'input',
          id: 'username',
          props: {
            placeholder: '用户名',
            type: 'text',
            style: {
              margin: '0 0 16px 0'
            }
          }
        },
        {
          type: 'input',
          id: 'email',
          props: {
            placeholder: '邮箱地址',
            type: 'text',
            style: {
              margin: '0 0 16px 0'
            }
          }
        },
        {
          type: 'picker',
          id: 'city',
          props: {
            placeholder: '选择城市',
            range: ['北京', '上海', '广州', '深圳', '杭州'],
            style: {
              margin: '0 0 16px 0'
            }
          }
        },
        {
          type: 'button',
          id: 'register_btn',
          content: '注册',
          props: {
            type: 'primary',
            style: {
              width: '100%',
              margin: '8px 0'
            }
          }
        },
        {
          type: 'button',
          id: 'reset_btn',
          content: '重置',
          props: {
            type: 'default',
            style: {
              width: '100%'
            }
          }
        }
      ]

}