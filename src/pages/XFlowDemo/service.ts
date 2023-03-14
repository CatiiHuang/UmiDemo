import { NormalEdgeID, NODE_WIDTH, NODE_HEIGHT } from './constant';
import { uuidv4, NsGraph } from '@antv/xflow';
import type { NsNodeCmd, NsEdgeCmd, NsGraphCmd } from '@antv/xflow';
import { showLabelContent } from './util';

export namespace ActionService {
  export const NODE_COMMON_PROPS = {
    width: NODE_WIDTH,
    height: NODE_HEIGHT,
  } as const;

  /** 加载图数据的api */
  export const loadGraphData = async (meta: NsGraph.IGraphMeta) => {
    const nodes: NsGraph.INodeConfig[] = [
      {
        id: '43d928ce-42c9-4e56-b326-4ef03c001d6d-TriggleNode',
        width: 180,
        height: 36,
        label: '触发组件1',
        parentId: '1',
        renderKey: 'TriggleNode',
        x: 70,
        y: -130,
        ports: [
          {
            type: 'input',
            group: 'top',
            tooltip: '输入桩',
            id: '99bb5b45-2946-42da-b312-e2b7ec9b6e36',
          },
          {
            type: 'output',
            group: 'bottom',
            tooltip: '输出桩',
            id: 'eee743e3-a813-4d10-9eb2-4d0aca70d3d3',
          },
        ] as NsGraph.INodeAnchor[],
      },
      {
        id: 'c575d9a6-174b-489d-a5ed-fd7c33e0bba4-ConditionNode',
        width: 180,
        height: 36,
        label: '条件组件1',
        parentId: '5',
        renderKey: 'ConditionNode',
        x: 70,
        y: 2,
        ports: [
          {
            type: 'input',
            group: 'top',
            tooltip: '输入桩',
            id: '6939bcf4-ba14-4638-b720-4666e1518255',
          },
          {
            type: 'output',
            group: 'bottom',
            tooltip: '输出桩',
            id: '174e426b-85ef-477b-88bb-68a50d86bad0',
          },
        ] as NsGraph.INodeAnchor[],
      },
      {
        id: 'fdc39ca2-ceef-4518-a599-085092148b77-ActionNode',
        width: 180,
        height: 36,
        label: '动作组件1',
        parentId: '5',
        renderKey: 'ActionNode',
        x: -110,
        y: 142,
        ports: [
          {
            type: 'input',
            group: 'top',
            tooltip: '输入桩',
            id: '928886bf-f3ed-45c3-a0c9-c851578eada8',
          },
        ] as NsGraph.INodeAnchor[],
      },
      {
        id: 'c4c2848c-d9a5-4825-aba7-40ce8611d8ff-ActionNode',
        width: 180,
        height: 36,
        label: '动作组件2',
        parentId: '5',
        renderKey: 'ActionNode',
        x: 250,
        y: 140,
        ports: [
          {
            type: 'input',
            group: 'top',
            tooltip: '输入桩',
            id: '1583362a-a292-46f7-9328-7d5a9ac3e13c',
          },
        ] as NsGraph.INodeAnchor[],
      },
    ];

    const edges: NsGraph.IEdgeConfig[] = [
      {
        id: '6268ac80-59e1-4720-9316-7173b397fb38',
        targetPortId: '6939bcf4-ba14-4638-b720-4666e1518255',
        sourcePortId: 'eee743e3-a813-4d10-9eb2-4d0aca70d3d3',
        source: '43d928ce-42c9-4e56-b326-4ef03c001d6d-TriggleNode',
        target: 'c575d9a6-174b-489d-a5ed-fd7c33e0bba4-ConditionNode',
        edge: {
          shape: 'xflow-edge',
          attrs: {
            line: {
              stroke: '#d5d5d5',
              strokeWidth: 1,
              targetMarker: '',
              strokeDasharray: '',
            },
          },
          zIndex: 1,
          highlight: false,
          id: '7f57ef45-a230-449f-8eee-18a7bd9e9e68',
          source: {
            cell: '43d928ce-42c9-4e56-b326-4ef03c001d6d-TriggleNode',
            port: 'eee743e3-a813-4d10-9eb2-4d0aca70d3d3',
          },
          target: {
            cell: 'c575d9a6-174b-489d-a5ed-fd7c33e0bba4-ConditionNode',
            port: '6939bcf4-ba14-4638-b720-4666e1518255',
          },
        },
        connector: {
          name: 'rounded',
        },
        sourcePort: 'eee743e3-a813-4d10-9eb2-4d0aca70d3d3',
        targetPort: '6939bcf4-ba14-4638-b720-4666e1518255',
      },
      {
        id: '3073b2ca-34a3-4ce7-9324-a8ccf86b3164',
        targetPortId: '928886bf-f3ed-45c3-a0c9-c851578eada8',
        sourcePortId: '174e426b-85ef-477b-88bb-68a50d86bad0',
        source: 'c575d9a6-174b-489d-a5ed-fd7c33e0bba4-ConditionNode',
        target: 'fdc39ca2-ceef-4518-a599-085092148b77-ActionNode',
        edge: {
          shape: 'xflow-edge',
          attrs: {
            line: {
              stroke: '#d5d5d5',
              strokeWidth: 1,
              targetMarker: '',
              strokeDasharray: '',
            },
          },
          zIndex: 1,
          highlight: false,
          id: '48f8bed4-76fe-4524-a549-78cee70aa23e',
          source: {
            cell: 'c575d9a6-174b-489d-a5ed-fd7c33e0bba4-ConditionNode',
            port: '174e426b-85ef-477b-88bb-68a50d86bad0',
          },
          target: {
            cell: 'fdc39ca2-ceef-4518-a599-085092148b77-ActionNode',
            port: '928886bf-f3ed-45c3-a0c9-c851578eada8',
          },
        },
        connector: {
          name: 'rounded',
        },
        label: ' ',
        renderKey: 'NormalEdge',
        sourcePort: '174e426b-85ef-477b-88bb-68a50d86bad0',
        targetPort: '928886bf-f3ed-45c3-a0c9-c851578eada8',
      },
      {
        id: 'a69e27b5-2612-4978-9fb8-b15310738b3e',
        targetPortId: '1583362a-a292-46f7-9328-7d5a9ac3e13c',
        sourcePortId: '174e426b-85ef-477b-88bb-68a50d86bad0',
        source: 'c575d9a6-174b-489d-a5ed-fd7c33e0bba4-ConditionNode',
        target: 'c4c2848c-d9a5-4825-aba7-40ce8611d8ff-ActionNode',
        edge: {
          shape: 'xflow-edge',
          attrs: {
            line: {
              stroke: '#d5d5d5',
              strokeWidth: 1,
              targetMarker: '',
              strokeDasharray: '',
            },
          },
          zIndex: 1,
          highlight: false,
          id: 'ec2fa4d1-8f10-4bcc-9569-a5b4f0e8005d',
          source: {
            cell: 'c575d9a6-174b-489d-a5ed-fd7c33e0bba4-ConditionNode',
            port: '174e426b-85ef-477b-88bb-68a50d86bad0',
          },
          target: {
            cell: 'c4c2848c-d9a5-4825-aba7-40ce8611d8ff-ActionNode',
            port: '1583362a-a292-46f7-9328-7d5a9ac3e13c',
          },
        },
        connector: {
          name: 'rounded',
        },
        label: ' ',
        renderKey: 'NormalEdge',
        sourcePort: '174e426b-85ef-477b-88bb-68a50d86bad0',
        targetPort: '1583362a-a292-46f7-9328-7d5a9ac3e13c',
      },
    ];
    return { nodes, edges };
  };
  /** 保存图数据的api */
  export const saveGraphData: NsGraphCmd.SaveGraphData.IArgs['saveGraphDataService'] =
    async (meta: NsGraph.IGraphMeta, graphData: NsGraph.IGraphData) => {
      console.log('saveGraphData api', meta, graphData);
      return {
        success: true,
        data: graphData,
      };
    };

  /** 添加节点api */
  export const addNode: NsNodeCmd.AddNode.IArgs['createNodeService'] = async (
    args: NsNodeCmd.AddNode.IArgs,
  ) => {
    console.info('addNode service running, add node:', args);

    const topPort = {
      type: NsGraph.AnchorType.INPUT,
      group: NsGraph.AnchorGroup.TOP,
      tooltip: '输入桩',
    };
    const bottomPort = {
      type: NsGraph.AnchorType.OUTPUT,
      group: NsGraph.AnchorGroup.BOTTOM,
      tooltip: '输出桩',
    };

    const portItems = [topPort, bottomPort] as NsGraph.INodeAnchor[];

    const { id, ports = portItems, groupChildren, renderKey } = args.nodeConfig;

    const nodeId = id || uuidv4();
    /** 这里添加连线桩 */
    const node: NsNodeCmd.AddNode.IArgs['nodeConfig'] = {
      ...NODE_COMMON_PROPS,
      ...args.nodeConfig,
      id: `${nodeId}-${renderKey}`,
      ports: (ports as NsGraph.INodeAnchor[]).map((port) => {
        return { ...port, id: uuidv4() };
      }),
    };
    /** group没有链接桩 */
    if (groupChildren && groupChildren.length) {
      node.ports = [];
    }
    return node;
  };

  /** 添加边的api */
  export const addEdge: NsEdgeCmd.AddEdge.IArgs['createEdgeService'] = async (
    args,
  ) => {
    const { edgeConfig } = args;

    if (showLabelContent(edgeConfig.source)) {
      edgeConfig.label = ' ';
      edgeConfig.renderKey = NormalEdgeID;
    }

    return {
      ...edgeConfig,
      id: uuidv4(),
    };
  };

  /** 删除边的api */
  export const delEdge: NsEdgeCmd.DelEdge.IArgs['deleteEdgeService'] = async (
    args,
  ) => {
    return true;
  };
}
