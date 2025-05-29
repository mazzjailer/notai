"use client";
import React from "react";
import { type Message as TMessage } from "ai/react";
import ReactMarkdown from "react-markdown";

interface MessageProps {
  messages: TMessage[];
}

const Messages = ({ messages }: MessageProps) => {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <div className="flex-1 overflow-y-auto space-y-4 w-11/12 md:w-3/5 mb-28 md:mb-28 mt-28 md:mt-12">
        {messages ? (
          messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[90%] rounded-4xl py-3 ${
                  message.role === "user"
                    ? "bg-amber-900/90 text-white px-5"
                    : "text-neutral-900"
                }`}
              >
                {message.role === "user" ? (
                  <p className="text-lg md:text-lg" dir="auto">
                    {message.content}
                  </p>
                ) : (
                  <div
                    className="text-lg md:text-lg prose dark:prose-invert"
                    dir="auto"
                  >
                    <ReactMarkdown>{message.content}</ReactMarkdown>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Messages;
