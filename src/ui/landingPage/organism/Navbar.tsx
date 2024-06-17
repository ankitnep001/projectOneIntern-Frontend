import Button from "@ui/common/atoms/Button";
import Logo from "@ui/common/molecules/Logo";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-10 py-3 border-b-2  ">
            <div>
                <Logo />
            </div>
            {/* <div>
                list
            </div> */}
            <div className="flex gap-x-2 items-center  ">
                <Button type="button" buttonText="Login" />
                <Button type="button" buttonText="SignUp" />
            </div>
        </nav>
    )
}

export default Navbar
