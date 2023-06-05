"use client";
import React, { use } from "react";
import Task from "./Task";
import PageNav from "./PageNav";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";

const Tasks = () => {
  const searchParams = useSearchParams();
  const query = "?" + searchParams.toString();
  const { data } = useSWR(`/api`);
  console.log(data);
  return (
    <section className="flex flex-col gap-5 text-gray-100 flex-[3_2_0%]">
      {/* {data?.tasks.map((task) => (
        <Task key={task.id} {...task} />
      ))} */}

      {/* <PageNav quantity={Math.ceil(data.tasksQuantity / 5)} /> */}
    </section>
  );
};

export default Tasks;
