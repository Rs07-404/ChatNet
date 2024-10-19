import { Skeleton, Typography } from "@mui/material"

const MessageLoadingSkeleton = () =>{
    return (
    
    <Typography component="div" key='h2' variant='h2'>
        <Skeleton  sx={{ width: '30%', height:'200px', ml: '2%' }}/>
        <Skeleton  sx={{ width: '40%', ml: '58%', mr: '2%' }}/>
        <Skeleton  sx={{ width: '40%', ml: '2%' }}/>
        <Skeleton  sx={{ width: '50%', ml: '48%', mr: '2%' }}/>
    </Typography>)
}

export default MessageLoadingSkeleton;