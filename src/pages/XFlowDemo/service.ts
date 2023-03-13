import {
  TriggleNodeID,
  ActionNodeID,
  ConditionNodeID,
  NormalEdgeID,
  NODE_WIDTH,
  NODE_HEIGHT,
} from './constant';
import { uuidv4, NsGraph } from '@antv/xflow';
import type { NsNodeCmd, NsEdgeCmd, NsGraphCmd } from '@antv/xflow';

export namespace ActionService {
  export const NODE_COMMON_PROPS = {
    width: NODE_WIDTH,
    height: NODE_HEIGHT,
  } as const;

  /** 加载图数据的api */
  export const loadGraphData = async (meta: NsGraph.IGraphMeta) => {
    const nodes: NsGraph.INodeConfig[] = [
      {
        ...NODE_COMMON_PROPS,
        id: 'node1',
        label: '算法节点-1',
        ports: [
          {
            id: 'node1-input-1',
            type: NsGraph.AnchorType.INPUT,
            group: NsGraph.AnchorGroup.TOP,
            tooltip: '输入桩',
          },
          {
            id: 'node1-output-1',
            type: NsGraph.AnchorType.OUTPUT,
            group: NsGraph.AnchorGroup.BOTTOM,
            tooltip: '输出桩',
          },
        ] as NsGraph.INodeAnchor[],
      },
      {
        ...NODE_COMMON_PROPS,
        id: 'node2',
        label: '算法节点-2',
        ports: [
          {
            id: 'node2-input-1',
            type: NsGraph.AnchorType.INPUT,
            group: NsGraph.AnchorGroup.TOP,
            tooltip: '输入桩',
            connected: true,
          },
          {
            id: 'node2-output-1',
            type: NsGraph.AnchorType.OUTPUT,
            group: NsGraph.AnchorGroup.BOTTOM,
            tooltip: '输出桩',
          },
        ] as NsGraph.INodeAnchor[],
      },
      {
        ...NODE_COMMON_PROPS,
        id: 'node3',
        label: '算法节点-3',
        ports: [
          {
            id: 'node3-input-1',
            type: NsGraph.AnchorType.INPUT,
            group: NsGraph.AnchorGroup.TOP,
            tooltip: '输入桩',
            connected: true,
          },
          {
            id: 'node3-output-1',
            type: NsGraph.AnchorType.OUTPUT,
            group: NsGraph.AnchorGroup.BOTTOM,
            tooltip: '输出桩',
          },
        ] as NsGraph.INodeAnchor[],
      },
      {
        ...NODE_COMMON_PROPS,
        id: 'node4',
        label: '算法节点-4',
        ports: [
          {
            id: 'node4-input-1',
            type: NsGraph.AnchorType.INPUT,
            group: NsGraph.AnchorGroup.TOP,
            tooltip: '输入桩',
            connected: true,
          },
          {
            id: 'node4-output-1',
            type: NsGraph.AnchorType.OUTPUT,
            group: NsGraph.AnchorGroup.BOTTOM,
            tooltip: '输出桩',
          },
        ] as NsGraph.INodeAnchor[],
      },
    ];
    const edges: NsGraph.IEdgeConfig[] = [
      {
        id: uuidv4(),
        source: 'node1',
        target: 'node2',
        sourcePortId: 'node1-output-1',
        targetPortId: 'node2-input-1',
        renderKey: NormalEdgeID,
      },
      {
        id: uuidv4(),
        source: 'node1',
        target: 'node3',
        sourcePortId: 'node1-output-1',
        targetPortId: 'node3-input-1',
        renderKey: NormalEdgeID,
      },
      {
        id: uuidv4(),
        source: 'node1',
        target: 'node4',
        sourcePortId: 'node1-output-1',
        targetPortId: 'node4-input-1',
        renderKey: NormalEdgeID,
        attrs: {
          line: {
            stroke: '#1890ff',
            strokeDasharray: 5,
            targetMarker: 'classic',
            style: {
              animation: 'ant-line 30s infinite linear',
            },
          },
        },
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

    const portItems = [] as NsGraph.INodeAnchor[];

    const { id, ports = portItems, groupChildren, renderKey } = args.nodeConfig;

    if (renderKey === TriggleNodeID) {
      portItems.push(topPort as NsGraph.INodeAnchor);
      portItems.push(bottomPort as NsGraph.INodeAnchor);
    }
    if (renderKey === ConditionNodeID) {
      portItems.push(topPort as NsGraph.INodeAnchor);
      portItems.push(bottomPort as NsGraph.INodeAnchor);
    }
    if (renderKey === ActionNodeID) {
      portItems.push(topPort as NsGraph.INodeAnchor);
    }

    const nodeId = id || uuidv4();
    /** 这里添加连线桩 */
    const node: NsNodeCmd.AddNode.IArgs['nodeConfig'] = {
      ...NODE_COMMON_PROPS,
      ...args.nodeConfig,
      id: nodeId,
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

    edgeConfig.renderKey = NormalEdgeID;
    edgeConfig.edge.appendLabel({
      attrs: {
        text: {
          text: 'offset: { x: -40, y: 80 }',
        },
      },
      position: {
        distance: 0.2,
        offset: {
          x: -10,
          y: 40,
        },
      },
    });

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
