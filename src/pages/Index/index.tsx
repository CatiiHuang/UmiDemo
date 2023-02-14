import './index.less';
import { Link } from 'umi';

export default function IndexPage() {
  return (
    <div className="title">
      <h1>Page index</h1>
      <div>
        <Link to="/user">user</Link>
      </div>
    </div>
  );
}
