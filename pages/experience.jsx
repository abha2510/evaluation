import React from 'react'
import { Card, CardHeader, CardBody, Heading, Stack, StackDivider, Box, Text } from '@chakra-ui/react'

const Experience = () => {
  return (
    <div >
      <Card w="50%" margin={"auto"}>
  <CardHeader>
    <Heading size='md'>Client Report</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>

        <Heading size='xs' textTransform='uppercase'>
        🗸1. Aspiring Full Stack Web Developer
        </Heading>
        <Text pt='2' fontSize='sm'>
        Masai School
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
         2. Post Graduated
        </Heading>
        <Text pt='2' fontSize='sm'>
          Govt.Institute of Science
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
         3. BSc
        </Heading>
        <Text pt='2' fontSize='sm'>
          J.M.Patel College Bhandara
        </Text>
      </Box>
    </Stack>
  </CardBody>
</Card>
    </div>
  )
}

export default Experience;


