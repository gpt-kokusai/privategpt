import Typography from "@/components/typography";
import { Card } from "@/components/ui/card";
import { FC } from "react";
import { useChatContext } from "../chat-context";
import { ChatFileUI } from "../chat-file/chat-file-ui";
import { ChatStyleSelector } from "./chat-style-selector";
import { ChatDocSelector } from "./chat-doc-selector";
import { AI_NAME } from "@/features/theme/customise";
import { useSession } from "next-auth/react";

interface Prop {}

export const ChatMessageEmptyState: FC<Prop> = (props) => {
  const { fileState } = useChatContext();
  const { data: session } = useSession();

  const { showFileUpload } = fileState;

  return (
    <div className="grid grid-cols-1 w-full items-center container mx-auto max-w-3xl justify-center h-full gap-9">
      <Card className="col-span-3 flex flex-col gap-5 p-5 ">
        <Typography variant="h4" className="text-primary">
          {AI_NAME}にようこそ！
        </Typography>
          <p className="text-xs text-muted-foreground">
            社内情報をもとに回答を行います。
            
          </p>


        <div className="flex flex-col gap-2">
          <p className="text-sm text-muted-foreground">
          会話スタイルを選択してください。
          </p>
          <ChatStyleSelector disable={false} />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-muted-foreground">
            部門を選択してください
          </p>
          <ChatDocSelector disable={false} />
        </div>
        {showFileUpload === "data" && <ChatFileUI />}
      </Card>
    </div>
  );
};
