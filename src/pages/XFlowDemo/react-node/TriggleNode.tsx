import { LoginOutlined } from '@ant-design/icons';
import type { NsGraph } from '@antv/xflow';
import './TriggleNode.less';

const fontStyle = { fontSize: '16px', color: '#3057e3' };

export const TriggleNode: NsGraph.INodeRender = (props) => {
  return (
    <div
      className={`xflow-algo-node ${props.isNodeTreePanel ? 'panel-node' : ''}`}
    >
      <span className="icon">
        <LoginOutlined style={fontStyle} />
      </span>
      <span className="label">{props.data.label}</span>
      <span className="status"></span>
    </div>
  );
};
