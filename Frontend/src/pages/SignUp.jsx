import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box, Button, Input, Heading, VStack } from "@chakra-ui/react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      await axios.post("https://financial-time-machine-rer6.onrender.com/users/signIn", { name, email, pass });
      alert("User register successfull")
      navigate("/login");
    } catch (error) {
      alert(error.response.data);
    }
  };

  return (
    <Box maxW="md" mx="auto" mt="10">
      <Heading mb="4">Sign Up</Heading>
      <VStack spacing="4">
        <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)} />
        <Button colorScheme="teal" onClick={handleSignUp}>Sign Up</Button>
      </VStack>
    </Box>
  );
};

export default SignUp;