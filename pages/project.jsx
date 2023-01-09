import React from 'react'
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';
import Link from 'next/link';


const Project = ({repo}) => {
    console.log(repo.items)
  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",
    border:"1px solid gray",width:"60%",margin:"auto"}}>
        {repo.items.map((e)=>(
       <Center py={12}  key={e.id}>
      <Box
     
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        // bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        border="1px solid grey "
        zIndex={1}>
      
        <Stack  align={'center'}>
          <Link href={e.html_url} fontSize={'3xl'} fontFamily={'body'}>
          📂{e.name}
          </Link>
          <Heading fontSize={'xl'} fontFamily={'body'} fontWeight={500}>
            {e.full_name}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Link href={e.html_url} fontWeight={800} fontSize={'xl'}>
            ☆ {e.stargazers_count}
            </Link>
            <Link href={e.html_url} fontWeight={800} fontSize={'xl'}>
             Fork: {e.forks}
            </Link>
          </Stack>
        </Stack>
      </Box>
    </Center>
    ))}
    </div>
  )
}

export default Project


export async function getStaticProps(){
    let res = await fetch("https://api.github.com/search/repositories?q=user:abha2510+fork:true&sort=updated&per_page=10&type=Repositories")
    let data=await res.json();
    return {
      props:{
        repo:data
      },
    }
  }
