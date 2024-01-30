import { fireEvent, render, screen } from "@testing-library/react"
import App from "./App"
import exp from "constants"

function sum (x:number,y:number){
    return x + y 
}

describe('App componente',()=>{

    it('Should be a sum result',()=>{
        expect(sum(4,4)).not.toBe(9)
    })

    it('Should be a content of heading',()=>{
        render(<App/>)
        screen.getByText(/hello world!/i)
    })

    it('Should change a message if button was click',()=>{
        render(<App/>)

        screen.getByText("Let's learn more about testing in React")
        
        const button = screen.getByRole("button",{name:'Click aqui'})

      

        fireEvent.click(button)

        screen.getByText("New Text!")

       const oldMessage =  screen.queryByText("Let's learn more about testing in React")
        expect(oldMessage).not.toBeInTheDocument()
    })
})