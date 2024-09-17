import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { a } from 'framer-motion/client';
import { Link } from 'react-router-dom';

type HGalleryItem = {
    img: string,
    title?: string,
    url?: string,
    maxWidth?: string,
}

export interface HGalleryProps {
    navigation?: boolean,
    items: Array<HGalleryItem>
    variant?: 'default' | 'tall'
}

function HGallery({ navigation, items, variant = 'default' }: HGalleryProps) {
  const theme = useTheme();
  const tablet = useMediaQuery('(min-width: 900px)');
  
  return (
    <ImageList
      gap={20}
      cols={tablet ? items.length : 1}
      variant='standard'
    >
      { items.map((item) => (
        <ImageListItem 
          key={item.img}
          className={navigation ? 'nav-link' : ''}
          sx={{
            p: 0,
            m: 0,
            borderRadius: 5, 
            aspectRatio: variant == 'tall' ? '2/3' : null,
            maxWidth: item.maxWidth,
            overflow: 'hidden'
          }}
        >
          { item.url != null ?
            <Link 
              to={item.url}
              style={{ 
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <img
                srcSet={item.img}
                src={item.img}
                alt={item.title}
                loading="lazy"
                style={{ height: '100%' }}
              />  
              <ImageListItemBar
                title={
                  variant == 'tall' ? 
                  <Typography 
                    className={navigation ? 'nav-link-text' : ''}
                    p='20px'
                    variant='h5' 
                    textAlign='left' 
                    whiteSpace='normal'
                  >
                    {item.title}
                  </Typography>
                  : <span className={navigation ? 'nav-link-text' : ''}>
                    {item.title}
                  </span>
                }
                position={variant== 'tall' ? 'top' : 'bottom'}
                color='text.primary'
                sx={ variant == 'tall' ? {
                    width: '100%', 
                    height: '100%',
                    alignItems: 'flex-end'
                  } 
                  : null
                }
              />
            </Link>
            : <>
              <img
                srcSet={item.img}
                src={item.img}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={variant == 'tall' ? 
                  <Typography 
                    className={navigation ? 'nav-link-text' : ''}
                    p='20px'
                    variant='h5' 
                    textAlign='left' 
                    whiteSpace='normal'
                  >
                    {item.title}
                  </Typography>
                  : <span className={navigation ? 'nav-link-text' : ''}>
                    {item.title}
                  </span>
                }
                position={variant== 'tall' ? 'top' : 'bottom'}
                color='text.primary'
                sx={
                  variant == 'tall' ? {
                    width: '100%', 
                    height: '100%',
                    alignItems: 'flex-end'
                  } 
                  : null
                }
              />
            </>
          }  
        </ImageListItem>
      )) }
    </ImageList>
  );
}

export default HGallery;