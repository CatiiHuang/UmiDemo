/* eslint-disable @typescript-eslint/no-unused-vars */
import { uuidv4 } from '@antv/xflow';
import { XFlowNodeCommands } from '@antv/xflow';
import { TriggleNodeID, ConditionNodeID, ActionNodeID } from './constant';
import type { NsNodeCmd } from '@antv/xflow';
import type { NsNodeCollapsePanel } from '@antv/xflow';
import { Card } from 'antd';

export const onNodeDrop: NsNodeCollapsePanel.IOnNodeDrop = async (
  node,
  commands,
) => {
  const args: NsNodeCmd.AddNode.IArgs = {
    nodeConfig: { ...node, id: uuidv4() },
  };
  commands.executeCommand(XFlowNodeCommands.ADD_NODE.id, args);
};

const NodeDescription = (props: { name: string }) => {
  return (
    <Card
      size="small"
      title="算法组件介绍"
      style={{ width: '200px' }}
      bordered={false}
    >
      欢迎使用：{props.name}
      这里可以根据服务端返回的数据显示不同的内容
    </Card>
  );
};

export const nodeDataService: NsNodeCollapsePanel.INodeDataService = async (
  meta,
  modelService,
) => {
  console.log(meta, modelService);
  return [
    {
      id: 'T-触发',
      header: 'T-触发',
      children: [
        {
          id: '2',
          label: '触发组件1',
          parentId: '1',
          renderKey: TriggleNodeID,
          // popoverContent: <NodeDescription name="算法组件1" />,
        },
        {
          id: '3',
          label: '触发组件2',
          parentId: '1',
          renderKey: TriggleNodeID,
          // popoverContent: <NodeDescription name="算法组件2" />,
        },
        {
          id: '4',
          label: '触发组件3',
          parentId: '1',
          renderKey: TriggleNodeID,
          // popoverContent: <NodeDescription name="算法组件3" />,
        },
      ],
    },
    {
      id: 'C-条件',
      header: 'C-条件',
      children: [
        {
          id: '6',
          label: '条件组件1',
          parentId: '5',
          renderKey: ConditionNodeID,
        },
        {
          id: '7',
          label: '条件组件2',
          parentId: '5',
          renderKey: ConditionNodeID,
        },
        {
          id: '8',
          label: '分流组件',
          parentId: '5',
          renderKey: ConditionNodeID,
        },
      ],
    },
    {
      id: 'A-动作',
      header: 'A-动作',
      children: [
        {
          id: '6',
          label: '动作组件1',
          parentId: '5',
          renderKey: ActionNodeID,
        },
        {
          id: '7',
          label: '动作组件2',
          parentId: '5',
          renderKey: ActionNodeID,
        },
        {
          id: '8',
          label: '动作组件3',
          parentId: '5',
          renderKey: ActionNodeID,
        },
      ],
    },
  ];
};

export const searchService: NsNodeCollapsePanel.ISearchService = async (
  nodes: NsNodeCollapsePanel.IPanelNode[] = [],
  keyword: string,
) => {
  const list = nodes.filter((node) => (node.label || '').includes(keyword));
  return list;
};
