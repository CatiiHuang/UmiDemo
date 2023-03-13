import { NsJsonSchemaForm, XFlowNodeCommands } from '@antv/xflow';
import { CustomRightForm } from './component/CustomRightForm';
import type { NsNodeCmd, NsGraph } from '@antv/xflow';

export namespace NsJsonForm {
  /** ControlShape的Enum */
  export const getCustomRenderComponent = CustomRightForm;

  /** 根据选中的节点更新formSchema */
  export const formSchemaService: NsJsonSchemaForm.IFormSchemaService = async (
    a,
  ) => {
    console.log(a);

    return {
      /** 配置一个Tab */
      tabs: [
        {
          /** Tab的title */
          name: '节点配置',
          groups: [],
        },
      ],
    };
  };
}
