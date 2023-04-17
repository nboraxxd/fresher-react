import React from 'react'
import { Button, Form, Input, Typography, Divider } from 'antd'
import './Register.css'

const RegisterPage = () => {
  const { Title } = Typography

  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className="wrapper">
      <div className="register">
        <Title className="register-title">Đăng ký</Title>
        <Divider />
        <Form
          name="basic"
          wrapperCol={{ span: 24 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="register-content"
        >
          {/* Full Name */}
          <Form.Item
            labelCol={{ span: 24 }}
            label="Full name"
            name="fullName"
            rules={[{ required: true, message: 'Please input your full name!' }]}
          >
            <Input placeholder="Bruce Wayne" autoComplete="name" />
          </Form.Item>

          <Form.Item
            labelCol={{ span: 24 }}
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email address!' }]}
          >
            <Input placeholder="bruce@wayne.com" autoComplete="email" />
          </Form.Item>

          <Form.Item
            labelCol={{ span: 24 }}
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Enter your password" autoComplete="new-password" />
          </Form.Item>

          <Form.Item
            labelCol={{ span: 24 }}
            label="Phone number"
            name="phone"
            rules={[{ required: true, message: 'Please input your phone number!' }]}
          >
            <Input placeholder="0123456789" />
          </Form.Item>

          <Form.Item style={{ textAlign: 'center' }} labelCol={{ span: 24 }}>
            <Button type="primary" htmlType="submit" size="large" loading={false}>
              Đăng ký
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default RegisterPage
