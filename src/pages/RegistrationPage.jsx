import CustomButton from "../components/CustomButton";

import { useState } from "react";


import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";

const RegistrationPage = () => {

    const [organizationData, setUserData] = useState({
        organization: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const navigate = useNavigate();


    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        const { organization, email, password, confirmPassword } = organizationData;

        if (password !== confirmPassword) {
            Swal.fire({
                title: "Error!",
                text: "Passwords don't match",
                icon: "error",
                confirmButtonText: "Okay",
                customClass: {
                    popup: "bg-primaryColorLight border border-primaryColor",
                    title: "text-primaryColor font-bold",
                    confirmButton: "bg-primaryColor text-white hover:bg-primaryColorDark focus:ring-4 focus:ring-secondaryColorLight",
                },
            });
            return;
        }

        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])?.{6,}$/;

        if (!passwordPattern.test(password)) {
            Swal.fire({
                title: "Error!",
                text: "Password must be at least 6 characters long and contain both letters and numbers. You can have special characters optionally.",
                icon: "error",
                confirmButtonText: "Okay",
                customClass: {
                    popup: "bg-secondaryColorLight border border-secondaryColor",
                    title: "text-secondaryColor font-bold",
                    confirmButton: "bg-secondaryColor text-white hover:bg-secondaryColorDark focus:ring-4 focus:ring-primaryColorLight",
                },
            });
            return;
        }

        setIsSubmitting(true);

        setTimeout(() => {
            Swal.fire({
                title: "Success!",
                text: "Registration successful!",
                icon: "success",
                confirmButtonText: "Continue",
                customClass: {
                    popup: "bg-secondaryColorLight border border-secondaryColor",
                    title: "text-secondaryColor font-bold",
                    confirmButton: "bg-secondaryColor text-white hover:bg-secondaryColorDark focus:ring-4 focus:ring-primaryColorLight",
                },
            }).then(() => {
                window.location.href = "https://osmethiopia.netlify.app/";
            });

            setIsSubmitting(false);
        }, 1000); 
    };




    return (

        <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat relative"
            style={{
                backgroundImage: "url('/src/assets/background.png')",
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-primaryColor via-primaryColorLight to-secondaryColor opacity-70"></div>
            <div className="relative z-10 bg-white p-8 rounded-3xl shadow-lg w-full max-w-lg">
                <h1 className="text-4xl font-bold font-mainFont text-center text-primaryColor mb-8">
                    Register Your Organization
                </h1>
                <form className="space-y-4" onSubmit={handleSignUp}>
                    <div>
                        <label className="block text-sm font-secondaryFont text-primaryColor">Organization Name
                            <input
                                type="text"
                                className="w-full p-3 mt-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondaryColor text-black"
                                placeholder="Enter your Organization Name"
                                onChange={handleFormChange}
                                name="organization"
                                value={organizationData.organization}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label className="block text-sm font-secondaryFont text-primaryColor">Email
                            <input
                                type="email"
                                className="w-full p-3 mt-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondaryColor text-black"
                                placeholder="Enter your email"
                                onChange={handleFormChange}
                                name="email"
                                value={organizationData.email}

                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label className="block text-sm font-secondaryFont text-primaryColor">Password
                            <input
                                type="password"
                                className="w-full p-3 mt-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondaryColor  text-black"
                                placeholder="Enter your password"
                                name="password"
                                onChange={handleFormChange}
                                value={organizationData.password}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label className="block text-sm font-secondaryFont text-primaryColor">Confirm Password
                            <input
                                type="password"
                                className="w-full p-3 mt-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondaryColor  text-black"
                                placeholder="Enter your password"
                                name="confirmPassword"
                                onChange={handleFormChange}
                                value={organizationData.confirmPassword}
                                required
                            />
                        </label>
                    </div>
                    <CustomButton type="submit" width="w-32" disabled={isSubmitting}>{isSubmitting ? "Registering..." : "Register"}</CustomButton>
                </form>
                <div className="mt-4 text-center">
                    <p className="text-sm font-secondaryFont">
                        already have an account?{" "}
                        <Link to="/signin" className="font-secondaryFont text-secondaryColor hover:underline">Log in</Link>
                    </p>
                </div>
            </div>
        </div>


    );
};

export default RegistrationPage;
