import ExamTasksCounter from "@components/ExamTasksCounter";
import Tasks from "@components/Tasks/Tasks";
import { ExamType, ExamYear } from "@customTypes/examTypes";
import { getExamTasks } from "@firebase/getExamTasks";
import { authOptions } from "@lib/authOptions";
import { capitalizeWord } from "@utils/capitalizeWord";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import Link from "next/link";

type ExamPageProps = {
  params: { examYear: ExamYear };
  searchParams: { examType: ExamType };
};

export async function generateMetadata({
  params,
  searchParams,
}: ExamPageProps): Promise<Metadata> {
  const { examYear } = params;
  const { examType } = searchParams;
  const title = `Matura ${examType} ${examYear} | Prosta Matura`;
  return {
    title,
  };
}

export default async function Page({
  params: { examYear },
  searchParams: { examType },
}: ExamPageProps) {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  const tasks = await getExamTasks({ examYear, examType, userId });

  return (
    <section className="flex flex-col gap-2 md:text-base">
      <div className="grid items-center content-center justify-between w-full grid-cols-3 p-5 border border-neutral-600">
        <Link
          href="/exams"
          replace
          className="flex items-center justify-start gap-2 text-sm"
        >
          <span>&#8592; </span> <span>Powrót</span>
        </Link>
        <h2 className="text-2xl font-semibold tracking-wider text-center">
          Matura {capitalizeWord(examType)} {examYear}
        </h2>
        <ExamTasksCounter examYear={examYear} examType={examType} />
      </div>
      <Tasks {...tasks} />
    </section>
  );
}
