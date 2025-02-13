/* eslint-disable no-unused-vars */
import { useState, useContext } from "react";
import { MainContext } from "../context/mainContext";
import { useNavigate } from "react-router-dom";
// import Button from "./Button";
import axios from "axios";
import { toast } from "react-toastify";
import * as Chakra from "@chakra-ui/react";
// import { useToast } from "@chakra-ui/react";

const { 
    FormControl, FormLabel, Input, Box, Button, InputGroup, 
    InputLeftElement, Stack, Text, useDisclosure, 
} = Chakra;
// import { 
//     Box, Button, FormControl, FormLabel, Input, 
//     InputGroup, InputLeftElement, Stack, Text, 
//     useBreakpointValue, useDisclosure, useToast 
// } from '@chakra-ui/react';
import { HiOutlineMail, HiLockClosed } from 'react-icons/hi';



const SignInAuth1 = () => {
    const navigate = useNavigate();
    // const { setLoginState, lightBlue, darkBlue, yellow } = useContext(MainContext);
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [signInText, setSignInText] = useState("Sign In");

    const [signInFormData, setSignInFormData] = useState({ email: "", password: ""});
    const { email, password } = signInFormData;

    // const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
    toast({
        title: "Signed in successfully",
        description: "You have successfully signed in.",
        status: "success",
        duration: 5000,
        isClosable: true,
    });

    // const devApiSignInUrl = "http://localhost:3000/api/signin";
    const apiSignInUrl = import.meta.env.VITE_API_SIGN_IN_URL;

    const handleChange = (e) => setSignInFormData({ ...signInFormData, [e.target.name]: e.target.value });

    const handleSignin = async () => {
        setIsLoading(true);
        setSignInText("Signing In...");
    
        if (email.trim() && password.trim()) {
            try {
                const response = await axios.post(
                    apiSignInUrl, 
                    { email, password }, 
                    {
                        headers: { "Content-Type": "application/json" },
                        withCredentials: false,
                    }
                );
                const fetchedToken = response?.data?.token;
                localStorage.setItem("user-token", fetchedToken);
                const message = response?.data?.message || "Signed in successfully!";
                toast(message, { type: "success" });
                // toast({
                //     title: "Signed in successfully",
                //     description: "You have successfully signed in.",
                //     status: "success",
                //     duration: 5000,
                //     isClosable: true,
                // });
                setSignInFormData({ ...signInFormData, email: "", password: "" });
                setSignInText("Signed In!");
                setTimeout(() => setSignInText("Sign In"), 2000);
                setTimeout(() => navigate("/profile"), 3000);
            } catch (error) {
                console.error("Error signing in:", error);
                const errorMessage = error?.message || "An unexpected error occurred.";
                toast(`Error: ${errorMessage}`, { type: "error" });
                // toast({
                //     title: "Signed in failed",
                //     description: "You have not successfully signed in.",
                //     status: "error",
                //     duration: 5000,
                //     isClosable: true,
                // });
                setSignInText("Sign In Failed!");
                setTimeout(() => setSignInText("Sign In"), 2000);
            } finally {
                setIsLoading(false);
            }
        } else {
            // Handle empty email or password
            toast("Please provide both email and password.", { type: "warning" });
            // toast({
            //     title: "Fill all fields",
            //     description: "Please provide both email and password.",
            //     status: "warning",
            //     duration: 5000,
            //     isClosable: true,
            // });
            setIsLoading(false);
            setSignInText("Sign In Failed!");
            setTimeout(() => setSignInText("Sign In"), 2000);
        }
    };



    return (
        <Box 
            maxW="lg" 
            mx="auto" 
            py={{ base: 12, sm: 16 }} 
            px={{ base: 6 }} 
            bg="white" 
            borderRadius="lg" 
            boxShadow="lg"
        >
            <Stack spacing={6} align="center">
            <Text fontSize="2xl" fontWeight="bold">Sign In</Text>
            <form onSubmit={handleSignin}>
                <Stack spacing={4}>
                    {/* Email Input */}
                    <FormControl id="email" isRequired>
                        <FormLabel>Email address</FormLabel>
                        <InputGroup>
                        <InputLeftElement pointerEvents="none">
                            <HiOutlineMail color="gray.400" />
                        </InputLeftElement>
                        <Input
                            type="email"
                            value={email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            isRequired
                        />
                        </InputGroup>
                    </FormControl>
        
                    {/* Password Input */}
                    <FormControl id="password" isRequired>
                        <FormLabel>Password</FormLabel>
                        <InputGroup>
                        <InputLeftElement pointerEvents="none">
                            <HiLockClosed color="gray.400" />
                        </InputLeftElement>
                        <Input
                            type="password"
                            value={password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            isRequired
                        />
                        </InputGroup>
                    </FormControl>
        
                    {/* Sign In Button */}
                    <Button 
                        type="submit" 
                        colorScheme="blue" 
                        width="full" 
                        isLoading={isLoading}
                    >
                        {signInText}
                    </Button>
        
                    {/* Forgot Password */}
                    <Stack direction="row" justify="space-between" align="center">
                        <Text fontSize="sm">
                            Don&apos;t have an account? <Button variant="link" colorScheme="blue">Sign Up</Button>
                        </Text>
                        <Text fontSize="sm" onClick={onOpen} color="blue.500" cursor="pointer">
                            Forgot password?
                        </Text>
                    </Stack>
                </Stack>
            </form>
            </Stack>

            {/* Modal for Forgot Password */}
            {
                isOpen && (
                    <Box 
                        position="absolute" 
                        top="50%" 
                        left="50%" 
                        transform="translate(-50%, -50%)" 
                        bg="white" 
                        p={6} 
                        borderRadius="lg" 
                        boxShadow="xl"
                    >
                        <Text mb={4}>Please check your email for password reset instructions.</Text>
                        <Button onClick={onClose} colorScheme="blue">
                        Close
                        </Button>
                    </Box>
                )
            }
        </Box>
    )
}

export default SignInAuth1;
