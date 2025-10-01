import { Input, Typography } from "@ecblocks/design-system";

export function InputStories() {
  return (
    <div>
      <Typography variant={"label"}>Input</Typography>
      <br />
      <Input placeholder={"Put some text here..."} name={"some-name"}></Input>
      <br />
      <Input value={"Disabled input"} disabled={true}></Input>
    </div>
  );
}
