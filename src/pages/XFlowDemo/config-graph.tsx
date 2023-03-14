import type { IProps } from './index';
import type { NsGraph, NsNodeCmd } from '@antv/xflow';
import { XFlowNodeCommands } from '@antv/xflow';
import { createHookConfig, DisposableCollection } from '@antv/xflow';
import { NormalEdge } from './react-edge/NormalEdge';
import {
  ShuntNodeID,
  ActionNodeID,
  NormalEdgeID,
  TriggleNodeID,
  ConditionNodeID,
  GROUP_NODE_RENDER_ID,
} from './constant';
import { ConditionNode } from './react-node/ConditionNode';
import { TriggleNode } from './react-node/TriggleNode';
import { ActionNode } from './react-node/ActionNode';
import { ShuntNode } from './react-node/ShuntNode';
import { GroupNode } from './react-node/group';

export const useGraphHookConfig = createHookConfig<IProps>((config, proxy) => {
  // 获取 Props
  const props = proxy.getValue();

  config.setRegisterHook((hooks) => {
    const disposableList = [
      hooks.reactEdgeLabelRender.registerHook({
        name: 'add react dege',
        handler: async (renderMap) => {
          renderMap.set(NormalEdgeID, NormalEdge);
        },
      }),
      // 注册增加 react Node Render
      hooks.reactNodeRender.registerHook({
        name: 'add react node',
        handler: async (renderMap) => {
          renderMap.set(ShuntNodeID, ShuntNode);
          renderMap.set(ActionNodeID, ActionNode);
          renderMap.set(TriggleNodeID, TriggleNode);
          renderMap.set(ConditionNodeID, ConditionNode);
          renderMap.set(GROUP_NODE_RENDER_ID, GroupNode);
        },
      }),
      // 注册修改graphOptions配置的钩子
      hooks.graphOptions.registerHook({
        name: 'custom-x6-options',
        after: 'dag-extension-x6-options',
        handler: async (options) => {
          options.grid = false;
          options.keyboard = {
            enabled: true,
          };
        },
      }),
      // 注册增加 graph event
      hooks.x6Events.registerHook({
        name: 'add',
        handler: async (events) => {
          events.push({
            eventName: 'node:moved',
            callback: (e, cmds) => {
              const { node } = e;
              cmds.executeCommand<NsNodeCmd.MoveNode.IArgs>(
                XFlowNodeCommands.MOVE_NODE.id,
                {
                  id: node.id,
                  position: node.getPosition(),
                },
              );
            },
          } as NsGraph.IEvent<'node:moved'>);
        },
      }),
    ];
    const toDispose = new DisposableCollection();
    toDispose.pushAll(disposableList);
    return toDispose;
  });
});
