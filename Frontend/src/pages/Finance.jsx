import React, { useEffect, useState, useContext } from 'react';
import {
  Box, Heading, Input, Button, Stack, FormControl, FormLabel, Table, Thead, Tbody,
  Tr, Th, Td, useToast
} from '@chakra-ui/react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import Navbar from '../components/Navbar';

const Finance = () => {
  const { token } = useContext(AuthContext);
  const toast = useToast();

  const [formData, setFormData] = useState({
    income: '',
    expenses: '',
    savings: '',
    debts: ''
  });

  const [financeData, setFinanceData] = useState([]);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        'https://financial-time-machine-rer6.onrender.com/finance/addFinance',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      toast({
        title: 'Finance data added.',
        status: 'success',
        duration: 3000,
        isClosable: true
      });
      fetchFinanceData();
      setFormData({ income: '', expenses: '', savings: '', debts: '' });
    } catch (error) {
      toast({
        title: 'Failed to add finance data.',
        description: error.response?.data?.message || 'An error occurred',
        status: 'error',
        duration: 3000,
        isClosable: true
      });
    }
  };

  const fetchFinanceData = async () => {
    try {
      const res = await axios.get(
        'https://financial-time-machine-rer6.onrender.com/finance/finance',
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      setFinanceData(res.data);
    } catch (error) {
      console.error('Error fetching finance data:', error);
    }
  };

  useEffect(() => {
    fetchFinanceData();
  }, []);

  return (
    <Box maxW="900px" mx="auto" mt={10} px={4}>
        <Navbar/>
      <Heading mb={6}>Manage Your Finances</Heading>

      <Stack spacing={4} mb={8}>
        <FormControl>
          <FormLabel>Income</FormLabel>
          <Input type="number" name="income" value={formData.income} onChange={handleChange} />
        </FormControl>

        <FormControl>
          <FormLabel>Expenses</FormLabel>
          <Input type="number" name="expenses" value={formData.expenses} onChange={handleChange} />
        </FormControl>

        <FormControl>
          <FormLabel>Savings</FormLabel>
          <Input type="number" name="savings" value={formData.savings} onChange={handleChange} />
        </FormControl>

        <FormControl>
          <FormLabel>Debts</FormLabel>
          <Input type="number" name="debts" value={formData.debts} onChange={handleChange} />
        </FormControl>

        <Button colorScheme="teal" onClick={handleSubmit}>
          Add Finance Data
        </Button>
      </Stack>

      <Heading size="md" mb={4}>Your Financial History</Heading>
      <Box overflowX="auto">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Income</Th>
              <Th>Expenses</Th>
              <Th>Savings</Th>
              <Th>Debts</Th>
              <Th>Date</Th>
            </Tr>
          </Thead>
          <Tbody>
            {financeData.map((item, index) => (
              <Tr key={index}>
                <Td>₹{item.income}</Td>
                <Td>₹{item.expenses}</Td>
                <Td>₹{item.savings}</Td>
                <Td>₹{item.debts}</Td>
                <Td>{new Date(item.createdAt).toLocaleDateString()}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default Finance;
