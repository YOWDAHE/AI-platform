import Heading from "@/components/heading";
import { MessageSquare } from "lucide-react";


const Conversation = () => {

    return (
        <div>
            <Heading
                title="Conversation"
                description="Our most advanced conversation model."
                icon={MessageSquare}
                iconColor="text-violet-500"
                bgColor="bg-violet-500/10"
            />
            This is the conversation page.
        </div>
    );
}

export default Conversation;