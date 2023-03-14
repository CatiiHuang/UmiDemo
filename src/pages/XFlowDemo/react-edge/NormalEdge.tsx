import type { NsGraph } from '@antv/xflow';
import { Tooltip, Popconfirm, Form, Input, Select } from 'antd';
import styles from './NormalEdge.less';
import { PlusSquareOutlined } from '@ant-design/icons';
import { useState } from 'react';

export const NormalEdge: NsGraph.IEdgeRender = ({ data: edgeData }) => {
  const [customData, setCustomData] = useState(edgeData);

  const [form] = Form.useForm();

  const selectOptions = [
    {
      label: '等待时长',
      value: 'waitTime',
    },
  ];

  const conditionOptions = [
    {
      label: '等于',
      value: '=',
    },
    {
      label: '大于',
      value: '>',
    },
    {
      label: '小于',
      value: '<',
    },
  ];

  const valueTypeOptions = [
    {
      label: 'String',
      value: 'string',
    },
    {
      label: 'Number',
      value: 'number',
    },
    {
      label: 'Boolean',
      value: 'boolean',
    },
  ];

  const hasCustomData = () => {
    if (edgeData?.customData && Object.keys(edgeData.customData).length)
      return true;
    return false;
  };

  const getCustomLabel = ({ value, shuntField, conditional }: any) => {
    return `${shuntField} ${conditional} ${value}`;
  };

  const onConfirm = async () => {
    const formData = await form.validateFields();
    edgeData.customData = formData;
    setCustomData(formData);
  };

  return (
    <div className={styles['edge-container']}>
      <Popconfirm
        title="分流条件"
        showCancel={false}
        onConfirm={onConfirm}
        description={
          <div>
            <Form
              // size="small"
              form={form}
              initialValues={customData}
              autoComplete="off"
            >
              <div className={styles['form-row-box']}>
                <Form.Item
                  // label="分流字段"
                  name="shuntField"
                  // noStyle
                  rules={[{ required: true, message: '' }]}
                >
                  <Select
                    style={{ width: '120px' }}
                    options={selectOptions}
                    placeholder="分流字段"
                  ></Select>
                </Form.Item>

                <Form.Item
                  // label="条件"
                  name="conditional"
                  // noStyle
                  rules={[{ required: true, message: '' }]}
                >
                  <Select
                    style={{ width: '70px' }}
                    options={conditionOptions}
                    placeholder="条件"
                  ></Select>
                </Form.Item>

                <Form.Item
                  // label="数据类型"
                  name="valueType"
                  // noStyle
                  rules={[{ required: true, message: '' }]}
                >
                  <Select
                    style={{ width: '100px' }}
                    options={valueTypeOptions}
                    placeholder="数据类型"
                  ></Select>
                </Form.Item>
                <Form.Item
                  // label="数据"
                  name="value"
                  // noStyle
                  rules={[{ required: true, message: '' }]}
                >
                  <Input
                    style={{ display: 'inline-block', width: '60px' }}
                    placeholder="数据"
                  ></Input>
                </Form.Item>
              </div>
            </Form>
          </div>
        }
      >
        {hasCustomData() ? (
          <Tooltip title="分流条件">{getCustomLabel(customData)}</Tooltip>
        ) : (
          <Tooltip title="添加分流条件">
            <PlusSquareOutlined
              className={styles['add-condition-icon']}
              style={{ fontSize: 22 }}
            />
          </Tooltip>
        )}
      </Popconfirm>
    </div>
  );
};
