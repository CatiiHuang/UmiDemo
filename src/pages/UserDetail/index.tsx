import styles from './index.less';

export default function TestCompoent(props: any) {
  console.log(props);
  return (
    <div className={styles['wrap-box']}>
      <div className={styles['cont-text-box']}>
        <div className={styles['cont-text']}>这是一段描述文字！</div>
      </div>
      {/* 子路由渲染 */}
      <div className={styles['router-view-box']}>{props.children}</div>
    </div>
  );
}
