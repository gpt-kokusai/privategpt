import { ChatAPIData } from "./chat-api-data";
import { ChatAPIDocument } from "./chat-api-document";
import { ChatAPISimple } from "./chat-api-simple";
import { ChatAPIWeb } from "./chat-api-web";
import { PromptGPTProps } from "./models";

export const chatAPIEntry = async (props: PromptGPTProps) => {
  if (props.chatType === "simple") {
    return await ChatAPISimple(props);
  } else if (props.chatType === "web") {
    return await ChatAPIWeb(props);
  } else if (props.chatType === "data") {
    return await ChatAPIData(props);
  } else if (props.chatType === "document") {
    return await ChatAPIDocument(props);
  } else if (props.chatType === "mssql") {
    return await ChatAPIData(props);
  } else {
    return await ChatAPISimple(props);
  }
};
