(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"./node_modules/raw-loader/dist/cjs.js!./examples/sunflower-antd-cascade-select/Example1.tsx":function(r,e,n){"use strict";n.r(e),e.default="import React from 'react';\r\nimport { Select, Form } from 'antd';\r\nimport { useCascadeSelect, useFormTable } from 'sunflower-antd';\r\n\r\nconst Option = Select.Option;\r\n\r\n\r\nexport default Form.create()(props => {\r\n  const { form } = props;\r\n  const { selects, search } = useCascadeSelect({\r\n    form,\r\n    list: [\r\n      {\r\n        name: 'select0',\r\n        async options() {\r\n          await new Promise(r => setTimeout(r, 1000));\r\n          return [{\r\n            label: 'LILY',\r\n            value: 'lily',\r\n          }, {\r\n            label: 'JACK',\r\n            value: 'jack',\r\n          }];\r\n        }\r\n      },\r\n      {\r\n        name: 'select1',\r\n        async options(value) {\r\n          await new Promise(r => setTimeout(r, 1000));\r\n          return [{\r\n            label: `${value.toUpperCase()} 1`,\r\n            value: `${value} 1`,\r\n          },\r\n          {\r\n            label: `${value.toUpperCase()} 2`,\r\n            value: `${value} 2`,\r\n          }];\r\n        },\r\n      }\r\n    ],\r\n  });\r\n  const [select0, select1] = selects;\r\n\r\n  const { formProps } = useFormTable({\r\n    form,\r\n  });\r\n\r\n\r\n  return <div>\r\n\r\n    <Form {...formProps}>\r\n      <Form.Item\r\n        label=\"Select0\"\r\n      >\r\n        {\r\n          form.getFieldDecorator('select0')(\r\n            <Select allowClear {...select0.props}>\r\n              {\r\n                select0.options.map(item => <Option key={item.key} value={item.value} >\r\n                  {item.label}\r\n                </Option>)\r\n              }\r\n            </Select>\r\n          )\r\n        } \r\n      </Form.Item>\r\n\r\n      <Form.Item\r\n        label=\"Select1\"\r\n      >\r\n       {\r\n          form.getFieldDecorator('select1')(\r\n            <Select allowClear {...select1.props}>\r\n              {\r\n                select1.options.map(item => <Option key={item.key} value={item.value} >\r\n                  {item.label}\r\n                </Option>)\r\n              }\r\n            </Select>\r\n          )\r\n        } \r\n      </Form.Item>\r\n    </Form>\r\n\r\n  </div>;\r\n});\r\n"}}]);