import type { WidgetComponentProps } from "@ecblocks/core";
import { MediaPicker } from "./MediaPicker";

export function MockVideoPicker({
  id,
  onChange,
}: WidgetComponentProps<string>) {
  return <MediaPicker id={id} onChange={onChange} mediaType={"video"} />;
}
