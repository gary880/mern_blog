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
import { useDispatch } from "react-redux"
import { signinUser } from "@/app/slices/userSlice"
import { AppDispatch } from "@/app/store"

export function LoginCard() {

    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()

    const handleLogin = async () => {
        if (!emailRef.current?.value || !passwordRef.current?.value) return

        const userCredentials = {
            email: emailRef.current?.value,
            password: passwordRef.current?.value
        }

        dispatch(signinUser(userCredentials))
            .then(() => {
                navigate('/')
            })

    }

    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)


    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>Enter your email and password to login</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" placeholder="email" ref={emailRef} />
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
                <Button className="w-full" onClick={handleLogin} >Login</Button>
            </CardFooter>
        </Card>
    )
}