import { Todo } from "@prisma/client"
import { Checkbox } from "@/components/ui/checkbox"

type TodoProps = {
  todo: Todo
}

function TodoList({ todo }: TodoProps) {
  return (
    <li className="flex items-center gap-3 p-4 border-b transition-colors hover:bg-muted/50">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="flex items-center gap-3 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        <span>{todo?.id}.</span>
        <span>{todo?.title}</span>
      </label>
      
    </li>
  )
}

export default TodoList