import { Form, Input, Button } from 'antd';
import { NsJsonSchemaForm } from '@antv/xflow';
import styles from './CustomRightForm.less';

// 获取自定义表单
export const CustomRightForm: NsJsonSchemaForm.ICustomRender = (
  targetType,
  targetData: any,
) => {
  // const [form] = Form.useForm();

  if (targetType !== 'node' && targetType !== 'edge') return null;

  const { label } = targetData;

  const onFinish = (values: any) => {
    console.log('formSubmit::', values);
    //  赋值
    targetData.customData = values;
  };

  return () => (
    <div className={styles['custom-form-component']}>
      <div className={styles['form-header']}>节点配置</div>
      <div className={styles['form-content-box']}>
        <div>{label}字段配置</div>
        <div className={styles['form-wrap']}>
          <Form
            name="config"
            size="small"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: 'Please input your username!' },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};
