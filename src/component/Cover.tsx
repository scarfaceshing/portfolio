import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import react, { Component } from 'react'
import { JsxElement } from 'typescript';

interface InterfaceElement {
    children: React.ReactNode;
}

const CoverImageBox = styled(Box)({
    width: '100%',
    height: '400px',
    backgroundImage: 'url(media/cover.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
});

const Cover: React.FC<InterfaceElement> = ({children}: any) => {
    return (
      <CoverImageBox>
        {/* Your component's content */}
        {children}
      </CoverImageBox>
    );
  };
  
  export default Cover;