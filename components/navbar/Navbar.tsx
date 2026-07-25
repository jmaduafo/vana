import React from 'react'
import { Button } from '../ui/button'

function Navbar() {
  return (
    <header className='px-[8vw] py-4 flex justify-between items-center gap-3'>
        <div className='font-logo text-4xl'>
            <p>vana</p>
        </div>
        <nav className='flex items-center gap-5'>
            <ul className='text-sm font-medium'>
                <li>Archetypes</li>
            </ul>
            <Button variant={"outline"}>Take Quiz</Button>
        </nav>
    </header>
  )
}

export default Navbar