import { LogoutOutlined } from '@ant-design/icons';
import type { NsGraph } from '@antv/xflow';
import './ActionNode.less';

const fontStyle = { fontSize: '16px', color: '#3057e3' };

export const ActionNode: NsGraph.INodeRender = (props) => {
  return (
    <div
      className={`xflow-algo-node ${props.isNodeTreePanel ? 'panel-node' : ''}`}
    >
      <span className="icon">
        <LogoutOutlined style={fontStyle} />
      </span>
      <span className="label">{props.data.label}</span>
      <span className="status"></span>
    </div>
  );
};
