// components/BannerImageComp.tsx


// components/BannerImageComp.tsx
import React from 'react';
import { Button, Card, CardContent, Typography, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import styles from '../styles/Home.module.css'; // Import CSS module

interface BannerProps {
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  onEdit: () => void;
}

const BannerImageComp: React.FC<BannerProps> = ({
  title,
  description,
  cta,
  image,
  background,
  onEdit
}) => {
  return (
    <Card
      sx={{
        width: '100%',
        mb: 2,
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        overflow: 'hidden',
        color: 'white'
      }}
      className={styles.bannerCard}
    >
      <CardContent sx={{ position: 'relative' }}>
        <Typography variant="h5" className={styles.bannerTitle}>{title}</Typography>
        <Typography variant="body2" className={styles.bannerDescription}>{description}</Typography>
        <Button variant="contained" color="primary" className={styles.bannerCta}>{cta}</Button>
        <IconButton
          sx={{ position: 'absolute', top: 8, right: 8, color: 'white' }}
          onClick={onEdit}
        >
          <EditIcon />
        </IconButton>
      </CardContent>
      <img src={image} alt={title} className={styles.bannerImage} />
    </Card>
  );
};

export default BannerImageComp;
