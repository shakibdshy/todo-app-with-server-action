import prisma from "./prisma";

export async function getTodos() {
  try {
    const todos = await prisma.todo.findMany()
    return { todos }
  } catch (error) {
    return { error }
  }
}

export async function createTodo(title: string) {
  try {
    const todo = await prisma.todo.create({ data: { title } })
    return { todo }
  } catch (error) {
    return { error }
  }
}

export async function updateTodoStatus(id: number, done: boolean) {
  try {
    const todo = await prisma.todo.update({ where: { id }, data: { done } })
    return { todo }
  } catch (error) {
    return { error }
  }
}

export async function deleteTodoById(id: number) {
  try {
    const todo = await prisma.todo.delete({ where: { id } })
    return { todo }
  } catch (error) {
    return { error }
  }
}