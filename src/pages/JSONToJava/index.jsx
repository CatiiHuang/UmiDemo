import React, { useState } from 'react';
import json2csharp from '@/util/json2csharp';
import { Input, Button, message } from 'antd';
import * as jsonBeautify from 'json-beautify';
import styles from './index.less';
const { TextArea } = Input;

const Index = () => {
  const [jsonInpit, setJsonInput] = useState(`{ 
    "name": "jgondev",
    "age": 32,
    "packages": [
        {
            "name": "json2csharp",
            "release": "2023-01-17T22:29:26.503Z"
        }
    ],
    "keywords": [
        "json",
        "csharp"
    ]
 }`);
  const [javaInput, setJavaInput] = useState('');

  const convert = () => {
    try {
      const newString = json2csharp(jsonInpit);
      setJavaInput(newString);
    } catch (err) {
      console.log(err);
      message.warning('JSON语法错误');
    }
  };

  const beautify = () => {
    try {
      const beautifyString = jsonBeautify(JSON.parse(jsonInpit), null, 2, 60);
      setJsonInput(beautifyString);
    } catch (er) {
      console.log(err);
      message.warning('JSON语法错误');
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Json To Java </h1>
      <div className={[styles['page-content-wrap']]}>
        <div>
          <TextArea
            value={jsonInpit}
            rows={30}
            onChange={(e) => {
              setJsonInput(e.target.value);
            }}
          />
        </div>
        <Button onClick={beautify}>格式化</Button>
        <Button onClick={convert}>转 换</Button>
        <div>
          <TextArea value={javaInput} rows={30} />
        </div>
      </div>
    </div>
  );
};

export default Index;
