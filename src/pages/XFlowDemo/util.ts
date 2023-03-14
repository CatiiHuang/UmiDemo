import { ShuntNodeID } from './constant';

// edge上是否显示label
export const showLabelContent = (sourceId: string): Boolean => {
  if (sourceId.includes(ShuntNodeID)) return true;
  return false;
};
