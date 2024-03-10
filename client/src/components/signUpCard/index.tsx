import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { signup } from "@/services/user"

export function SignUpCard() {

    const navigate = useNavigate()


    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const usernameRef = useRef<HTMLInputElement>(null)

    const handleSingUp = async () => {
        const email = emailRef.current?.value
        const password = passwordRef.current?.value
        const username = usernameRef.current?.value
        if (!email || !password || !username) return
        try {
            await signup(email, username, password, password)
            navigate('/')
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Sign Up</CardTitle>
                <CardDescription>Enter your email, username and password to sign up</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">

                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" placeholder="email" ref={emailRef} />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="usermane">Username</Label>
                            <Input id="username" placeholder="username" ref={usernameRef} />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" placeholder="password" ref={passwordRef} />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                {/* <Button onClick={handleRegister}>Sign up</Button> */}
                <Button className="w-full" onClick={handleSingUp} >Sign up</Button>
            </CardFooter>
        </Card>
    )
}