import { prisma } from "../db";
import TodoItem from "../components/TodoItem";
import ActivityForm from "../components/ActivityForm";

function getTodos() {
  return prisma.todo.findMany();
}

async function toggleTodo(id: string, complete: boolean) {
  "use server";

  await prisma.todo.update({ where: { id }, data: { complete } });
}

export default async function Home() {
  const todos = await getTodos();
  return (
    <div className="p-4">
      <h1 className="text-3xl font-black">Activity List</h1>
      <ActivityForm />
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </div>
  );
}
