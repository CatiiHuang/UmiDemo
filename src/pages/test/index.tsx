import React from 'react';
import styles from './index.less';

export default function TestCompoent() {
  return (
    <div className={styles['wrap-box']}>
      <div className={styles['cont-text-box']}>
        <div className={styles['cont-text']}>这送一段描述文字</div>
      </div>
    </div>
  );
}
