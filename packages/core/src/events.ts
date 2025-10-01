import { serialize } from "@ecblocks/utils";
import { NoCodeComponentEntry, SchemaProp } from "./types";
import { Component$$$SchemaProp } from "./compiler/schema";

type EasyblocksEditorEventData<
  Type extends `@ecblocks-editor/${string}${string}`,
  Payload = never
> = Payload extends never ? { type: Type } : { type: Type; payload: Payload };

type InferShopstoryEditorEventData<Event> = Event extends MessageEvent<
  EasyblocksEditorEventData<infer Type, infer Payload>
>
  ? EasyblocksEditorEventData<Type, Payload>
  : never;

type SelectionFramePositionChangedEvent = MessageEvent<
  EasyblocksEditorEventData<
    "@ecblocks-editor/selection-frame-position-changed",
    {
      target: DOMRect;
      container?: DOMRect;
    }
  >
>;

function selectionFramePositionChanged(
  target: DOMRect,
  container?: DOMRect
): InferShopstoryEditorEventData<SelectionFramePositionChangedEvent> {
  return {
    type: "@ecblocks-editor/selection-frame-position-changed",
    payload: {
      target,
      container,
    },
  };
}

type RichTextChangedEvent = MessageEvent<
  EasyblocksEditorEventData<
    "@ecblocks-editor/rich-text-changed",
    {
      prop: "font" | "color" | "TextWrapper";
      schemaProp: SchemaProp | Component$$$SchemaProp;
      values: Array<Record<string, any> | [] | [NoCodeComponentEntry]>;
    }
  >
>;

function richTextChangedEvent(
  payload: InferShopstoryEditorEventData<RichTextChangedEvent>["payload"]
): InferShopstoryEditorEventData<RichTextChangedEvent> {
  return {
    type: "@ecblocks-editor/rich-text-changed",
    payload: serialize(payload),
  };
}

type ComponentPickerOpenedEvent = MessageEvent<
  EasyblocksEditorEventData<
    "@ecblocks-editor/component-picker-opened",
    { path: string }
  >
>;

function componentPickerOpened(
  path: string
): InferShopstoryEditorEventData<ComponentPickerOpenedEvent> {
  return {
    type: "@ecblocks-editor/component-picker-opened",
    payload: {
      path,
    },
  };
}

type ComponentPickerClosedEvent = MessageEvent<
  EasyblocksEditorEventData<
    "@ecblocks-editor/component-picker-closed",
    { config?: NoCodeComponentEntry }
  >
>;

function componentPickerClosed(
  config?: NoCodeComponentEntry
): InferShopstoryEditorEventData<ComponentPickerClosedEvent> {
  return {
    type: "@ecblocks-editor/component-picker-closed",
    payload: {
      config,
    },
  };
}

type ItemInsertedEvent = MessageEvent<
  EasyblocksEditorEventData<
    "@ecblocks-editor/item-inserted",
    { name: string; index: number; block: NoCodeComponentEntry }
  >
>;

function itemInserted(
  payload: InferShopstoryEditorEventData<ItemInsertedEvent>["payload"]
): InferShopstoryEditorEventData<ItemInsertedEvent> {
  return {
    type: "@ecblocks-editor/item-inserted",
    payload,
  };
}

type ItemMovedEvent = MessageEvent<
  EasyblocksEditorEventData<
    "@ecblocks-editor/item-moved",
    {
      fromPath: string;
      toPath: string;
      placement?: "before" | "after";
    }
  >
>;

function itemMoved(
  payload: InferShopstoryEditorEventData<ItemMovedEvent>["payload"]
): InferShopstoryEditorEventData<ItemMovedEvent> {
  return {
    type: "@ecblocks-editor/item-moved",
    payload,
  };
}

export {
  componentPickerClosed,
  componentPickerOpened,
  itemInserted,
  itemMoved,
  richTextChangedEvent,
  selectionFramePositionChanged,
};
export type {
  ComponentPickerClosedEvent,
  ComponentPickerOpenedEvent,
  InferShopstoryEditorEventData,
  ItemInsertedEvent,
  ItemMovedEvent,
  RichTextChangedEvent,
  SelectionFramePositionChangedEvent,
  EasyblocksEditorEventData,
};
