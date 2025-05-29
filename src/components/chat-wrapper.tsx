"use client";
import React from "react";
import { useChat } from "@ai-sdk/react";
import TextareaAutoSize from "react-textarea-autosize";
import { ScrollArea } from "@/components/ui/scroll-area";
import Messages from "./messages";
import { ArrowUp } from "lucide-react";

const ChatWrapper = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({});

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <>
      <ScrollArea className="h-screen w-full">
        <Messages messages={messages} />
      </ScrollArea>
      <div className="flex flex-col items-center justify-center fixed bottom-5 w-full">
        <div className="backdrop-blur-lg bg-amber-400/15 rounded-4xl w-11/12 md:w-3/5 flex flex-col items-center justify-center p-4 shadow-inner">
          <form
            onSubmit={handleSubmit}
            className="flex flex-row items-center justify-between w-full"
          >
            <TextareaAutoSize
              name="prompt"
              value={input}
              placeholder="Ask anything"
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              className="text-neutral-950 focus-visible:outline-none w-full text-wrap resize-none text-xl md:text-lg"
              dir="auto"
            />
            <button
              type="submit"
              className="rounded-full bg-radial from-amber-500 to-transparent text-white p-3 ml-4 cursor-pointer"
            >
              <ArrowUp />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChatWrapper;
