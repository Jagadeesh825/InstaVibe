import {Box, Image} from '@chakra-ui/react'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'
const FeedPost = ({ img, username, avatar }) => {
    return(
        <>
        <PostHeader  username={username} avatar={avatar}/>
        <Box mt={2} borderRadius={8}
        overflow={'hidden'}>
            <Image src={img} alt={username}/>
        </Box>
        <PostFooter username={username}/>
        </>
    )
}
export default FeedPost
