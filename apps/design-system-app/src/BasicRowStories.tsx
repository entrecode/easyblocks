import { BasicRow, Typography } from "@ecblocks/design-system";

const THUMBNAIL_IMAGE =
  "https://shopstory.s3.eu-central-1.amazonaws.com/picker_icon_button.png";

export function BasicRowStories() {
  const clickHandler = () => {
    alert("clicked!");
  };

  return (
    <div>
      <Typography variant={"label"}>Typography</Typography>
      <br />

      <div style={{ maxWidth: 350 }}>
        <BasicRow onClick={clickHandler} title={"Only title"} />
        <br />
        <BasicRow
          onClick={clickHandler}
          title={"Title, thumbnail and desc"}
          description={"Lorem ipsum dolor sit amet"}
          image={THUMBNAIL_IMAGE}
        />
        <br />
        <BasicRow
          onClick={clickHandler}
          onEdit={() => alert("edit")}
          title={"Component"}
          image={THUMBNAIL_IMAGE}
        />
        <br />
        <BasicRow
          onClick={clickHandler}
          onEdit={() => alert("edit")}
          image={THUMBNAIL_IMAGE}
          title={"Custom component"}
          customTitle={true}
        />
        <br />
        <BasicRow
          onClick={clickHandler}
          onEdit={() => alert("edit")}
          image={THUMBNAIL_IMAGE}
          title={"Template name"}
          description={"Component"}
          tinyDescription={true}
        />
        <br />
        <BasicRow
          onClick={clickHandler}
          onEdit={() => alert("edit")}
          image={THUMBNAIL_IMAGE}
          title={"Template name"}
          description={"Custom Component"}
          tinyDescription={true}
          customDescription={true}
        />
      </div>
    </div>
  );
}
