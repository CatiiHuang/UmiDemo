import { BranchesOutlined } from '@ant-design/icons';
import type { NsGraph } from '@antv/xflow';
import './ActionNode.less';

const fontStyle = { fontSize: '16px', color: '#3057e3' };

export const ShuntNode: NsGraph.INodeRender = (props) => {
  return (
    <div
      style={{ border: '1px solid #0031a0' }}
      className={`xflow-algo-node ${props.isNodeTreePanel ? 'panel-node' : ''}`}
    >
      <span className="icon">
        <BranchesOutlined style={fontStyle} />
      </span>
      <span className="label">{props.data.label}</span>
      <span className="status"></span>
    </div>
  );
};
