import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";


const Box=styled.div`
    width: 100%;
    margin-top: 16px;
    display: grid;
    justify-content: center;
    gap: 30px;
    grid-template-columns: repeat(3, 1fr); 
    @media (max-width: 1056px) {
        grid-template-columns: repeat(2, 1fr);
    }
     @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`
function Contents({children}) {
  return(
  <Box>
    {children}
  </Box>
  );
}

export default Contents;