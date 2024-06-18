import Button from "@ui/common/atoms/Button"
import InputField from "@ui/common/atoms/InputField"
import Label from "@ui/common/atoms/Label"
import { AiOutlineLock } from "react-icons/ai"
import { IoMailUnreadOutline, } from "react-icons/io5"
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className="px-4 py-4  w-[98vw] md:w-[50vw] lg:w-[30vw]">
            <form className="  ">
                <h1 className="text-[#255d88] font-bold mb-3">User Login</h1>
                <div className="w-full">
                    {/* Email */}
                    <div className="relative">
                        <Label name={"email"} label={"Email"} required={true} />
                        <IoMailUnreadOutline className="absolute left-3 top-[47px] " />
                        <InputField
                            name={"email"}
                            type={"email"}
                            placeholder={"Enter your Email"}
                        />
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <Label name={"password"} label={"Password"} required={true} />
                        <AiOutlineLock className="absolute left-3 top-[47px]" />
                        <InputField
                            name={"password"}
                            type={"password"}
                            placeholder={"Enter your Password"}
                        />
                    </div>

                    {/* Remember ME */}
                    <div className="flex items-center gap-x-2 mb-3">
                        <input type="checkbox" />
                        <label className="font-medium">Remember Me</label>
                    </div>

                    <div className="hover:bg-[#1a496d] bg-[#255d88] rounded-md cursor-pointer text-white mb-2  w-full self-center">
                        <Button type={"submit"} buttonText={"Login"} />
                    </div>


                </div>
            </form>
            <div className="flex">
                <p className="">Don't have an account? </p>&nbsp;
                <Link to='/auth/user/sign-up' ><span className="text-[#255d88] font-bold">Sign Up</span></Link>
            </div>
        </div>
    )
}

export default Login
