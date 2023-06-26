"use client";
import tagColor from "@utils/tagColor";
// @ts-ignore
import { MathJax, MathJaxContext } from "better-react-mathjax";
import TaskTag from "./TaskTag";
import Image from "next/image";
import { TaskListItem } from "../types";
import TaskAnswer from "./TaskAnswer";
import { taskTypeList } from "../Tasks/taskTypes";

const Task = (details: Omit<TaskListItem, "id">) => {
  const formula = `${details.formula} Formuła`;
  const exam = `Matura ${details.examType} ${details.examYear}`;
  const points = `Punkty: 0-${details.points} [${Math.floor(
    (details.points / 50) * 100
  )}%]`;
  const taskType = taskTypeList[details.taskType];

  const config = {
    loader: { load: ["input/asciimath"] },
  };

  return (
    <div className="flex flex-col p-4 border lg:p-8 border-neutral-600 text-inherit">
      <div className="flex gap-2 font-semibold md:tracking-wider items-center [&>div]:py-[0.5px] [&>div]:px-1 [&>div]:md:py-1 [&>div]:md:px-2 text-[10px]">
        <TaskTag>{exam}</TaskTag>
        <TaskTag color={tagColor(details.formula)}>{formula}</TaskTag>
        <TaskTag color={tagColor(taskType)}>{taskType}</TaskTag>
        <span className="ml-auto text-xs">{points}</span>
      </div>

      <p className="my-2 font-thin text-justify whitespace-pre-line md:my-5">
        <MathJaxContext config={config}>
          <MathJax>{details.content.replaceAll("/n", "\n")}</MathJax>
          {/*
          TODO: MAKE ALL IMAGES IMAGES AND NOT SVG
          {!!details.imageUrl && (
            <Image
              src={details.imageUrl}
              alt="TaskImage"
              width={300}
              height={300}
            />
          )} */}
        </MathJaxContext>
      </p>
      <TaskAnswer answer={details.answer} />
    </div>
  );
};

export default Task;