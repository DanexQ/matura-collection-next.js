import React from "react";

const index = () => {
  return (
    <div className="flex flex-col p-4 border lg:p-8 border-neutral-600 text-inherit">
      <div className="flex gap-2 font-semibold md:tracking-wider items-center [&>div]:py-[0.5px] [&>div]:px-1 [&>div]:md:py-1 [&>div]:md:px-2 text-[10px]">
        <div className="task-tag-loader" />
        <div className="task-tag-loader" />
        <div className="task-tag-loader" />
        <div className="w-full h-6 bg-transparent" />
        <div className="task-tag-loader" />
      </div>
      <div className="flex flex-col w-full gap-2 my-2">
        <div className="task-content-loader" />
        <div className="task-content-loader" />
        <div className="task-content-loader" />
        <div className="task-content-loader" />
        <div className="task-button-loader" />
      </div>
    </div>
  );
};

export default index;
