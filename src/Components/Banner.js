import React from 'react'
import banner from "../Images/ranveer-mobile.png"
import { Button, Input, Stack, Text } from '@chakra-ui/react'

function Banner() {
    return (
        <div style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap'}}>
            <div>
                <img style={{ height: '80vh', paddingLeft: '5%' }} src={banner} alt='banner' />
            </div>
            <div style={{height:"80%",padding:'2%',margin:'5%', border:'1px solid white', borderRadius:"10px", boxShadow:'2px 3px 4px 4px grey'}}>
                <Text fontSize={'30px'} fontWeight={'bold'} color={'orange'}>Book A Free Class</Text>
                <Text fontSize={'25px'}>Hurry! limited seates</Text>
                <Stack align={'center'} spacing={3}>
                    <Input variant='outline' size={'lg'} w={'300px'} placeholder='fill something' />
                    <Input variant='outline' size={'lg'} w={'300px'} placeholder='fill something' />
                    <Input variant='outline' size={'lg'} w={'300px'} placeholder='fill something' />
                    <Input variant='outline' size={'lg'} w={'300px'} placeholder='fill something' />
                    <Button w={"80px"} colorScheme='blue'>Button</Button>
                </Stack>
            </div>

        </div>
    )
}

export default Banner