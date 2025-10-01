import { CompilationContextType } from "@ecblocks/core/_internals";
import { normalize } from "@ecblocks/core/_internals";
import { NoCodeComponentEntry } from "@ecblocks/core";

export function reconcile({
  context,
  templateId,
  fieldName,
}: {
  context: CompilationContextType;
  templateId?: string;
  fieldName?: string;
}) {
  return (item: NoCodeComponentEntry) => {
    if (!fieldName || !templateId) {
      return item;
    }

    const contextMatches =
      item._itemProps?.[templateId]?.[fieldName] !== undefined;

    if (contextMatches) {
      return item;
    }

    return normalize(
      {
        ...item,
        _itemProps: {
          [templateId]: {
            [fieldName]: {},
          },
        },
      },
      context
    );
  };
}
