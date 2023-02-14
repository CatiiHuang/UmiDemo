import React, { useState, useRef, useMemo } from 'react';
import './index.less';

export default function Index() {
  // 初始配置
  const expendCount = 20; // 多渲染数量
  const screenHeight = 560; // 渲染屏幕高度
  const renderItemHeight = 35; // 每条数据的固定高度

  // 滚动容器Ref
  const scrollBoxRef = useRef(null);
  // 数据构造
  const data = new Array(1000).fill(0).map((_, index) => `${index + 1}`);

  // 开始，结束渲染索引
  const [endIndex, setEndIndex] = useState(20);
  const [startIndex, setStartIndex] = useState(0);
  // 渲染列表
  const renderList = useMemo(
    () => data.slice(startIndex, endIndex),
    [startIndex, endIndex],
  );

  // 滚动监听
  const virtualBoxScroll = () => {
    // 滑动距离
    const scrollDistance = scrollBoxRef.current.scrollTop;
    // 计算新索引
    const startIndex = Math.floor(scrollDistance / renderItemHeight);
    const endIndex =
      startIndex + Math.ceil(screenHeight / renderItemHeight) + expendCount; // 多渲染5条
    // 更新索引
    setStartIndex(startIndex);
    setEndIndex(endIndex);
  };

  return (
    <div className="virtual-wrap">
      {/* 外层盒子 屏幕高度 可滚动*/}
      <div
        className="virtual-scroll-wrap"
        ref={scrollBoxRef}
        style={{ height: `${screenHeight}px` }}
        onScroll={virtualBoxScroll}
      >
        {/* 滚动盒子 渲染高度 空盒子 撑起高度*/}
        <div
          className="scroll-box"
          style={{ height: `${data.length * renderItemHeight}px` }}
        ></div>

        {/* 显示盒子 实际渲染条目 */}
        <div
          className="render-box"
          style={{
            transform: `translateY(${startIndex * renderItemHeight}px)`,
          }}
        >
          {renderList?.map((item) => (
            <div
              className="scroll-item"
              style={{ height: `${renderItemHeight}px` }}
              key={item}
            >
              <span></span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
