import { Typography } from "@ecblocks/design-system";
import React from "react";

export function MissingWidget(props: { type: string }) {
  return <Typography>Missing widget for type "{props.type}".</Typography>;
}
