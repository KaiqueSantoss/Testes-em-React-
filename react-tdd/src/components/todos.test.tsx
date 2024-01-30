import { fireEvent, render,screen } from "@testing-library/react"
import Todos from "./todos.component"
import userEvent, {UserEvent} from '@testing-library/user-event'

describe('Todos componente',()=>{

it('Shoulde ',()=>{

    render(<Todos/>)
    expect(screen.getByText(/all tasks/i)).toBeInTheDocument()
})

it('Should show a input element',()=>{

    render(<Todos/>)

    const input = screen.getByPlaceholderText('Digit for a new task...')
    expect(input).toBeInTheDocument()

})

it('Should show a button ', ()=>{
    render(<Todos/>)
    const button = screen.queryByLabelText('Add Task')
    expect(button).toBeInTheDocument()
})

it('Should  be a button action ', async ()=>{
    render(<Todos/>)

    const input = screen.getByPlaceholderText('Digit for a new task...')
    const tasktitle = 'new task'

    await userEvent.type(input,tasktitle)

    screen.getByDisplayValue(tasktitle)

    const button = screen.getByLabelText('Add Task')

    await userEvent.click(button)

    screen.getByPlaceholderText('Digit for a new task...')

    expect(screen.getAllByText(tasktitle)).toHaveLength(1)

    expect(screen.getByDisplayValue(''))
})

it('Should delete task on click', async ()=>{

    render(<Todos/>)

    // Adicionar tarefa 

    const input = screen.getByPlaceholderText('Digit for a new task...')
    const tasktitle = 'new task'

    await userEvent.type(input,tasktitle)

    screen.getByDisplayValue(tasktitle)

    const button = screen.getByLabelText('Add Task')

    await userEvent.click(button)


    // Delete task 

    const deleteButton = screen.getByLabelText(`Delete task ${tasktitle}`)

    await userEvent.click(deleteButton)

    const taskDelete = screen.queryByText(tasktitle)

    expect(taskDelete).not.toBeInTheDocument()

})

})