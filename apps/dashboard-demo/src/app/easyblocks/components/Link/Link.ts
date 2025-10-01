import { NoCodeComponentDefinition } from "@ecblocks/core";

const linkDefinition: NoCodeComponentDefinition = {
  id: "Link",
  label: "Link",
  type: "action",
  schema: [
    {
      prop: "url",
      label: "URL",
      type: "string",
      defaultValue: "/",
    },
  ],
};

export { linkDefinition };
