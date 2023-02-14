import React from 'react';
import styles from './index.less';
import { Link } from 'umi';

export default function UserPage(props: any) {
  return (
    <div>
      <h1 className={styles.title}>UserPage</h1>
      <span className={styles['title-desc']}>23333</span>
      <div>
        <Link to="/index">index</Link>
      </div>
      <div className={styles['user-detail']}>{props.children}</div>
    </div>
  );
}
