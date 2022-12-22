import "../style/Content.css"
import { SimpleGrid } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";


export default function Content() {
  // will have something that maps all the playlist info from db then return 
  // item as playlistitem variable and pass it into grid as {playlistitem}
  return (
    <SimpleGrid minChildWidth="320px" >

      <Box className="playlistItem-container">
      <div>
    
      </div>
      </Box>
      <Box className="playlistItem-container">
      <div>
        
      </div>
      </Box>
      <Box className="playlistItem-container">
      <div>
        
      </div>
      </Box>
      <Box className="playlistItem-container">
      <div>
        
      </div>
      </Box>

    </SimpleGrid>
  );
}