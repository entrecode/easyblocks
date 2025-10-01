import { NoCodeComponentEntry } from "@ecblocks/core";
import { deepClone } from "@ecblocks/utils";

/**
 * Outputs comparable config that is FULL COPY of config
 */
function getConfigSnapshot(config: NoCodeComponentEntry): NoCodeComponentEntry {
  const strippedConfig = deepClone(config);
  return strippedConfig;
}
export { getConfigSnapshot };
