import Button from "./Button"
import { fireEvent, render,screen } from "@testing-library/react"

describe('Button Componente',()=>{

    it('Should be a button red',()=>{

        render(<Button disable={false} onClick={()=>{}}>Aqui</Button>)

        const button = screen.getByRole("button",{name:'Aqui'})
        expect(button).toHaveStyle({backgroundColor:'blue'})
            
    })


    it('Should be called a onClick prop',()=>{
    
    const onClick = jest.fn()
    
    render(<Button disable={false} onClick={onClick}>Click</Button>)

        const button = screen.getByText('Click')

        fireEvent.click(button)

        expect(onClick).toHaveBeenCalled()
    })
})