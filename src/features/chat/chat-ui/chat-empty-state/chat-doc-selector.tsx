import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, MessageCircle,File,Globe } from "lucide-react";
import { FC } from "react";
import { ChatType } from "../../chat-services/models";
import { useChatContext } from "../chat-context";
import { useSession } from "next-auth/react";

interface Prop {
  disable: boolean;
}

export const ChatDocSelector: FC<Prop> = (props) => {
  const { data: session } = useSession();
  const { chatBody, onChatTypeChange } = useChatContext();
  let tabList_grid_clos  = "grid w-full grid-cols-4 h-12 items-stretch";
  return (
    <Tabs
      defaultValue={chatBody.chatType}
      onValueChange={(value) => onChatTypeChange(value as ChatType)}
    >
      <TabsList className="grid w-full grid-cols-4 h-12 items-stretch">
      <TabsTrigger
         value="simple"
         className="flex gap-1"
         disabled={props.disable}
       >
         <MessageCircle size={20} /> 人事
       </TabsTrigger>    
       <TabsTrigger
         value="web"
         className="flex gap-1"
         disabled={props.disable}
       >
         <Globe size={20} /> 経理
       </TabsTrigger>   
       <TabsTrigger
         value="document"
         className="flex gap-1"
         disabled={props.disable}
       >
         <File size={20} /> ITヘルプデスク
       </TabsTrigger>  
     </TabsList>      
       

    </Tabs>
  );
};
