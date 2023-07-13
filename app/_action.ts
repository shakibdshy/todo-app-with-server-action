'use server'

import { createTodo } from "@/lib/todo"
import { revalidatePath } from "next/cache"

export async function createTodoAction(title: string) {
  await createTodo(title)
  revalidatePath("/")
}