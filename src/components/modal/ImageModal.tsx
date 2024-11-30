'use client';

import React, { useEffect, useState } from 'react';
import { imgRender }  from '@/components/custom/CustomImg';

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

interface ImageModalProps {
  imgSrc: string;
  open: boolean;
  handleClose: () => void;
}

export default function ImageModal({ imgSrc, open, handleClose }: ImageModalProps) {
  const [show, setShow] = useState(open);
  const fadeTime: number = 500;

  useEffect(() => {
    if (open) {
      setShow(true);
    }
  }, [open]);

  const handleCloseWithFade = () => {
    setShow(false);
    handleClose();
  };

  const style = {
    display: 'flex',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
    borderRadius: '1rem',
    boxShadow: 24,
  };

  return (
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      open={open}
      onClose={handleCloseWithFade}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: fadeTime,
        },
      }}
    >
      <Fade in={show}>
        <Box sx={style}>
          <img
            src={imgRender(imgSrc)}
            alt='Image'
            onClick={handleCloseWithFade}
          />
        </Box>
      </Fade>
    </Modal>
  );
}
