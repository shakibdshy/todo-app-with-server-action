import { deleteTodoAction } from "@/app/_action"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownTodo({ id }: { id: number }) {
  const deleteTodo = () => deleteTodoAction(id)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">...</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {/* <DropdownMenuItem>Edit</DropdownMenuItem> */}
        <DropdownMenuItem
          onClick={deleteTodo}
        >Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
