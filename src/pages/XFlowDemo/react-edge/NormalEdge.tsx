import React from 'react';
import type { NsGraph } from '@antv/xflow';
import { useAppContext } from '@antv/xflow';
import { Tooltip } from 'antd';
import './NormalEdge.less';

export const NormalEdge: NsGraph.IEdgeRender = (props) => {
  const ctx = useAppContext();

  return (
    <div className="edge-container">
      <Tooltip
        title="这是连线上渲染的React内容"
        // defaultVisible={true}
      >
        <div>hover我</div>
      </Tooltip>
    </div>
  );
};
