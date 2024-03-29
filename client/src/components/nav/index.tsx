import { LogIn, Linkedin, User, LogOut, Edit } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/store";
import { signoutUser } from "@/app/slices/userSlice";
import { AppDispatch } from "@/app/store";
import imageUrl from "../../assets/image.png"

const Navbar = () => {
    const navigate = useNavigate();
    const userAuth = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch<AppDispatch>()
    const navigateTo = (path: string) => {
        navigate(path);
    }

    const handleLogout = () => {
        dispatch(signoutUser());
        navigateTo("/");
    }


    return (
        <nav className="mb-3">
            <div className="w-full flex justify-center p-4">
                <img src={imageUrl} className=" object-contain h-8 mr-3" alt="profile" />
                <h1 className="w-0 overflow-hidden">Dylan BLog</h1>
                <h2 className="text-2xl font-serif font-bold cursor-pointer " onClick={() => navigateTo("/")} >Dylan<span className=" text-2xl text-zinc-500">Blog</span></h2>
            </div>
            <div className="w-full flex  justify-end gap-2 px-2">

                <Button className="p-2 rounded-full w-8 h-8" id="buttonProfile" aria-label="profile" onClick={() => navigateTo("/profile")} >
                    <User />
                </Button>
                <a href="https://www.linkedin.com/in/dylan-chen-92366b1b0/" target="_blank">
                    <Button className="p-2 rounded-full w-8 h-8" id="buttonLinkedin" aria-label="Linkedin">
                        <Linkedin />
                    </Button>
                </a>
                {userAuth.user && <Button className="p-2 rounded-full w-8 h-8" onClick={() => navigateTo("/editor")} >
                    <Edit />
                </Button>}
                {userAuth.user ?
                    <Button className="p-2 rounded-full w-8 h-8" onClick={handleLogout}>
                        <LogOut />
                    </Button>
                    :
                    <Button className="p-2 rounded-full w-8 h-8" id="buttonLogin" aria-label="login" onClick={() => navigateTo("/login")}>
                        <LogIn />
                    </Button>
                }



            </div>
        </nav>
    );
}

export default Navbar;