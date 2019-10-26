(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"./node_modules/raw-loader/dist/cjs.js!./examples/sunflower-antd-modal-form/Example4.jsx":function(r,n,o){"use strict";o.r(n),n.default='import React from \'react\';\r\nimport { useModalForm } from \'sunflower-antd\';\r\nimport { Modal, Input, Button, Form, Spin } from \'antd\';\r\n\r\n\r\nexport default Form.create()(props => {\r\n  const { form } = props;\r\n  const { \r\n    modalProps,\r\n    formProps, \r\n    show, \r\n    formLoading,\r\n    form: formInstance,\r\n  } = useModalForm({\r\n    defaultVisible: false,\r\n    autoSubmitClose: true,\r\n    async submit({username, email}) {\r\n      console.log(\'beforeSubmit\');\r\n      await new Promise(r => setTimeout(r, 1000));\r\n      console.log(\'afterSubmit\', username, email);\r\n      return \'ok\';\r\n    },\r\n    form,\r\n  });\r\n  return (\r\n    <div>\r\n      <Modal\r\n        {...modalProps}\r\n        title="useModalForm"\r\n        okText="submit"\r\n        width={740}\r\n      >\r\n        <Spin spinning={formLoading}>\r\n          <Form layout="inline" {...formProps}>\r\n            <Form.Item label="Username">\r\n              {\r\n                form.getFieldDecorator(\'username\')(\r\n                  <Input placeholder="Username" />\r\n                )\r\n              } \r\n            </Form.Item>\r\n\r\n            <Form.Item label="Email">\r\n              {\r\n                form.getFieldDecorator(\'email\')(\r\n                  <Input placeholder="Email" />\r\n                )\r\n              } \r\n            </Form.Item>\r\n\r\n            <Form.Item>\r\n              <Button onClick={() => formInstance.resetFileds()}>\r\n                Reset\r\n              </Button>\r\n            </Form.Item>\r\n\r\n            <Form.Item>\r\n              <Button type="primary" htmlType="submit">\r\n                submit\r\n              </Button>\r\n            </Form.Item>\r\n          </Form>\r\n        </Spin>\r\n      </Modal>\r\n      <Button onClick={show}>show</Button>\r\n    </div>\r\n  )\r\n});\r\n'}}]);