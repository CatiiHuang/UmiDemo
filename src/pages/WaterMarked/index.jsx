import React from 'react';

// 水印组件
function WaterMark() {
  const createWaterMark = function (markConfig) {
    // 水印样式配置
    const {
      text = 'catiihuang',
      height = 150,
      width = 150,
      fontSize = 12,
      color = '#ddd',
    } = markConfig || {};
    // canvas实例
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    // 设置宽高
    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);
    // 旋转
    ctx.translate(width / 2, height / 2);
    // 按宽高比旋转角度
    ctx.rotate((-45 * Math.PI * (height / width)) / 180);
    ctx.translate(-width / 2, -height / 2);
    // 字体样式
    ctx.font = `${fontSize}px 微软雅黑`;
    ctx.fillStyle = color;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    // 绘制文字 从中心
    ctx.fillText(text, width / 2, height / 2);
    // 转换为base64
    return canvas.toDataURL('image/png');
  };

  return (
    // 水印容器
    <div
      className="water-mask-wrap"
      style={{
        backgroundImage: `url(${createWaterMark({
          text: 'catiihuang',
          height: 120,
          width: 200,
          fontSize: 16,
          color: '#cecece',
        })})`,
        backgroundRepeat: 'repeat',
        pointerEvents: 'none',
        position: 'fixed',
        opacity: 1,
        left: 0,
        top: 0,
        height: '100vh',
        width: '100vw',
        zIndex: 16777271,
      }}
    ></div>
  );
}

// 容器组件
export default function Index() {
  return (
    // 页面容器
    <div className="page-wrap">
      {/* 渲染水印 */}
      <WaterMark />
      {/* 页面内容 */}
      <div
        className="page-cont-wrap"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100%',
        }}
      >
        <h1 onClick={() => console.log('title clicked!')}>
          this is content wrap!!
        </h1>
      </div>
    </div>
  );
}
