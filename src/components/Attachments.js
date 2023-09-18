'use client'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function InputFileUpload() {
  return (
   <>
   
   <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
     Passport Copy head
      <VisuallyHiddenInput type="file" />
    </Button>
    
     <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
     Visa
      <VisuallyHiddenInput type="file" />
    </Button>
    
     <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
      Passport Copy dep1
      <VisuallyHiddenInput type="file" />
    </Button> 
    
    <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
     Visa dep1
      <VisuallyHiddenInput type="file" />
    </Button>
    
     <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
     Passport Copy dep2

      <VisuallyHiddenInput type="file" />
    </Button> 
    
    <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
     visa dep2
      <VisuallyHiddenInput type="file" />
    </Button>

    <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
    Proof of Origin Head in case other Nationality
      <VisuallyHiddenInput type="file" />
    </Button>
   </>
  );
}