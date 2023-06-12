import { prisma } from "../db";

async function createTodo(data: FormData) {
  "use server";
  const title = data.get("title")?.valueOf();
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid title");
  }

  await prisma.todo.create({ data: { title, complete: false } });

  console.log("hi");
}

export default function ActivityForm() {
  return (
    <>
      <form action={createTodo} className="flex gap-2 mt-5 flex-col mb-5">
        <input
          type="text"
          name="title"
          placeholder="Enter Todo"
          className="border border-slate-300 bg-transparent rounded px-2 py-3 outline-none focus-within:border-slate-400 shadow-md"
        />
        <div className="flex justify-end gap-2">
          <button
            type="submit"
            className="p-2 border border-slate-100 hover:shadow-md rounded"
          >
            Add New Activity
          </button>
        </div>
      </form>
    </>
  );
}
