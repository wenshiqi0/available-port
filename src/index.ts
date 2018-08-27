import { join } from 'path';
import { spawnSync } from 'child_process';
import * as detect from 'get-port';

export function detectPortSync() {
  const script = join(__dirname, '../detect.js');
  const ret = spawnSync(process.execPath, [script], {
    env: {
      // support for electron
      ELECTRON_RUN_AS_NODE: 1
    },
  } as any);
  return parseInt(ret.stdout.toString());
}

export async function detectPort(): Promise<number> {
  return await detect();
}
