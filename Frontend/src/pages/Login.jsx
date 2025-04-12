import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';
import { Box, Button, Input, Heading, VStack } from "@chakra-ui/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleSubmit = async () => {
    const res = await login(email, pass);
    if (res.success) {
        alert("Login successfull")
        navigate("/");
    } else {
      alert(res.message);
    }
  };

  return (
    <Box maxW="md" mx="auto" mt="10">
      <Heading mb="4">Login</Heading>
      <VStack spacing="4">
        <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)} />
        <Button colorScheme="blue" onClick={handleSubmit}>Login</Button>
      </VStack>
    </Box>
  );
};

export default Login;