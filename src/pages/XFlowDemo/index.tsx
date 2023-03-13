import React from 'react';
/** app 核心组件 */
import { XFlow, XFlowCanvas, KeyBindings } from '@antv/xflow';
import type { IApplication, IAppLoad } from '@antv/xflow';
/** 交互组件 */
import {
  /** 触发Command的交互组件 */
  CanvasScaleToolbar,
  NodeCollapsePanel,
  CanvasContextMenu,
  CanvasToolbar,
  /** Graph的扩展交互组件 */
  CanvasSnapline,
  CanvasNodePortTooltip,
  DagGraphExtension,
  // 右侧表单
  JsonSchemaForm,
  // 配置
  createGraphConfig,
} from '@antv/xflow';

/** app 组件配置  */
/** 配置画布 */
import { useGraphHookConfig } from './config-graph';
/** 配置Command */
import { useCmdConfig, initGraphCmds } from './config-cmd';
/** 配置Model */
import { useModelServiceConfig } from './config-model-service';
/** 配置Menu */
import { useMenuConfig } from './config-menu';
/** 配置Toolbar */
import { useToolbarConfig } from './config-toolbar';
/** 配置快捷键 */
import { useKeybindingConfig } from './config-keybinding';
/** 配置Dnd组件面板 */
import * as dndPanelConfig from './config-dnd-panel';
import { NsJsonForm } from './formService';
// import { NormalEdge } from './react-edge/NormalEdge';
// import { NormalEdgeID } from './constant';
import './index.less';
import '@antv/xflow/dist/index.css';

export interface IProps {
  meta: { flowId: string };
}

// export const useGraphConfig = createGraphConfig((config) => {
//   config.setEdgeRender(NormalEdgeID, (props) => <NormalEdge {...props} />);
// });

export const Demo: React.FC<IProps> = (props) => {
  const { meta } = props;
  const graphHooksConfig = useGraphHookConfig(props);
  const toolbarConfig = useToolbarConfig();
  const menuConfig = useMenuConfig();
  const cmdConfig = useCmdConfig();
  const modelServiceConfig = useModelServiceConfig();
  const keybindingConfig = useKeybindingConfig();

  const cache = React.useMemo<{ app: IApplication } | null>(
    () => ({
      app: null,
    }),
    [],
  );
  /**
   * @param app 当前XFlow工作空间
   * @param extensionRegistry 当前XFlow配置项
   */

  const onLoad: IAppLoad = async (app) => {
    cache.app = app;
    initGraphCmds(cache.app);
  };

  /** 父组件meta属性更新时,执行initGraphCmds */
  React.useEffect(() => {
    if (cache.app) {
      initGraphCmds(cache.app);
    }
  }, [cache.app, meta]);

  return (
    <XFlow
      className="dag-user-custom-clz"
      hookConfig={graphHooksConfig}
      modelServiceConfig={modelServiceConfig}
      commandConfig={cmdConfig}
      onLoad={onLoad}
      meta={meta}
      style={{ height: '100vh' }}
    >
      <DagGraphExtension />
      <NodeCollapsePanel
        className="xflow-node-panel"
        searchService={dndPanelConfig.searchService}
        nodeDataService={dndPanelConfig.nodeDataService}
        onNodeDrop={dndPanelConfig.onNodeDrop}
        position={{ width: 230, top: 0, bottom: 0, left: 0 }}
        footerPosition={{ height: 0 }}
        bodyPosition={{ top: 40, bottom: 0, left: 0 }}
      />
      <CanvasToolbar
        className="xflow-workspace-toolbar-top"
        layout="horizontal"
        config={toolbarConfig}
        position={{ top: 0, left: 230, right: 290, bottom: 0 }}
      />
      <XFlowCanvas
        position={{ top: 40, left: 230, right: 290, bottom: 0 }}
        // config={useGraphConfig()}
      >
        <CanvasScaleToolbar position={{ top: 12, right: 12 }} />
        <CanvasContextMenu config={menuConfig} />
        <CanvasSnapline color="#faad14" />
        <CanvasNodePortTooltip />
      </XFlowCanvas>

      <JsonSchemaForm
        formSchemaService={NsJsonForm.formSchemaService}
        getCustomRenderComponent={NsJsonForm.getCustomRenderComponent}
        position={{ top: 0, bottom: 0, right: 0, width: 290 }}
      />

      <KeyBindings config={keybindingConfig} />
    </XFlow>
  );
};

export default Demo;

Demo.defaultProps = {
  meta: { flowId: 'test-meta-flow-id' },
};
