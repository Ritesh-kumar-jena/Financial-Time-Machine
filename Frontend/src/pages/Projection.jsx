import React, { useEffect, useState, useContext } from 'react';
import {
  Box, Heading, Text, Table, Thead, Tbody, Tr, Th, Td, useToast
} from '@chakra-ui/react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import Navbar from '../components/Navbar';

const Projection = () => {
  const { token } = useContext(AuthContext);
  const [projectionData, setProjectionData] = useState(null);
  const toast = useToast();

  const fetchProjection = async () => {
    try {
      const res = await axios.get(
        'https://financial-time-machine-rer6.onrender.com/projection/projection',
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      setProjectionData(res.data);
    } catch (error) {
      toast({
        title: 'Failed to fetch projection',
        description: error.response?.data?.message || 'Something went wrong',
        status: 'error',
        duration: 3000,
        isClosable: true
      });
    }
  };

  useEffect(() => {
    fetchProjection();
  }, []);

  return (
    <Box maxW="800px" mx="auto" mt={10} px={4}>
        <Navbar/>
      <Heading mb={6}>12-Month Financial Projection</Heading>

      {projectionData ? (
        <>
          <Box mb={6}>
            <Text><strong>Monthly Income:</strong> ₹{projectionData.base.income}</Text>
            <Text><strong>Monthly Expenses:</strong> ₹{projectionData.base.expenses}</Text>
            <Text><strong>Current Savings:</strong> ₹{projectionData.base.savings}</Text>
            <Text><strong>Monthly Net:</strong> ₹{projectionData.base.monthlyNet}</Text>
          </Box>

          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Month</Th>
                <Th>Projected Savings</Th>
              </Tr>
            </Thead>
            <Tbody>
              {projectionData.projection.map((item, index) => (
                <Tr key={index}>
                  <Td>{item.month}</Td>
                  <Td>₹{item.projectedSavings}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </>
      ) : (
        <Text>Loading projection data...</Text>
      )}
    </Box>
  );
};

export default Projection;