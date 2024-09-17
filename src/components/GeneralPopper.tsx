import * as React from 'react';
import Popper from '@mui/material/Popper';
import { Collapse, Fade } from '@mui/material';

interface GeneralPopperProps {
  popper: React.ReactElement,
  children?: React.ReactElement | Array<React.ReactElement>
}

function GeneralPopper({ popper, children }: GeneralPopperProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const container = React.useRef(null);

  let timer: NodeJS.Timeout;
  const handleMouseEnter = () => {
      timer = setTimeout(() => {
          setAnchorEl(container.current);
      }, 500);
  };
  const handleMouseLeave = () => {
      clearTimeout(timer);
      setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={container}>
        { children }
      </div>
      <Popper 
        open={open} 
        anchorEl={anchorEl}
        placement='auto-start'
        transition
        sx={{ zIndex: 99 }}
      >
        {({ TransitionProps }) => (
          <Collapse {...TransitionProps} timeout={250}>
            <div>
              <Fade {...TransitionProps} timeout={250}>
                <div>
                  { popper }
                </div>  
              </Fade>
            </div>
          </Collapse>
        )}
      </Popper>
    </div>
  );
}

export default GeneralPopper;