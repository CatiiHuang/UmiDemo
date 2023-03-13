import { TestAsyncCommand, NsTestCmd } from './cmd-async-test';
import { RenameNodeCommand, NsRenameNodeCmd } from './cmd-rename-node-modal';
import type { ICommandContributionConfig } from '@antv/xflow';
/** 注册成为可以执行的命令 */

export const commandContributions: ICommandContributionConfig[] = [
  {
    ...NsTestCmd,
    CommandHandler: TestAsyncCommand,
  },

  {
    ...NsRenameNodeCmd,
    CommandHandler: RenameNodeCommand,
  },
];
