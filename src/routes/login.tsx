import { createFileRoute } from '@tanstack/react-router'
import { Container } from '@mantine/core'
import { SignIn } from '@clerk/clerk-react'

function RouteComponent() {

  return (
    <Container size="xs" className="min-h-screen flex flex-col items-center justify-center">
        <div className="mb-16 text-center">
            <svg width="200" height="50" viewBox="0 0 200 50" className="fill-current text-sky-500 mx-auto">
            <path d="M20 10 C 10 10, 0 20, 0 30 C 0 40, 10 50, 20 50 L 30 50 C 40 50, 50 40, 50 30 L 50 10 L 40 10 L 40 30 C 40 35, 35 40, 30 40 C 25 40, 20 35, 20 30 L 20 10" fill="#4dabf7"/>
            <text x="60" y="35" fontSize="24" fontWeight="bold" fill="#4dabf7">bazarr.ai</text>
            </svg>
        </div>

      
        <SignIn 
            appearance={{
                elements: {
                    rootBox: "w-full",
                    card: "bg-white shadow-lg rounded-lg p-8",
                    footer: "text-sky-500 bg-black"
                }
            }}
        />
      
    </Container>
  )
}

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})