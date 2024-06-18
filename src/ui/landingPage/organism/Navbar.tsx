import Button from "@ui/common/atoms/Button";
import Logo from "@ui/common/molecules/Logo";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-10 py-3 bg-slate-900 text-white   ">
            <div>
                <Logo />
            </div>

            <div className="flex gap-x-2 items-center  ">
                <Link to='/auth/user'><Button type="button" buttonText="Login" /></Link>

                <Link to='/auth/user/sign-up'><Button type="button" buttonText="SignUp" /></Link>
            </div>
        </nav>
    )
}

export default Navbar
