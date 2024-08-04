// app/page.tsx
"use client"

// pages/index.tsx
// pages/index.tsx
import { useState } from 'react';
import { Container, Typography } from '@mui/material';
import BannerImageComp from './components/BannerImageComp';
import EditBannerTemplateBs from './components/EditBannerTemplateBs';
import styles from './styles/Home.module.css'; // Import CSS module

const initialBanners = [
  {
    title: "Ad Banner 1",
    description: "Discover the latest trends with our first ad banner.",
    cta: "Learn More",
    image: "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/5/square.png",
    background: "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/5/square.png"
  },
  {
    title: "Ad Banner 2",
    description: "Check out our second banner with exclusive offers.",
    cta: "Shop Now",
    image: "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/9/square.png",
    background: "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/9/square.png"
  },
  {
    title: "Ad Banner 3",
    description: "Amazing discounts on our third banner. Don’t miss out!",
    cta: "Get Discount",
    image: "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/1/square.png",
    background: "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/1/square.png"
  },
  {
    title: "Ad Banner 4",
    description: "Explore our fourth banner with new arrivals.",
    cta: "Browse Now",
    image: "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/15/square.png",
    background: "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/15/square.png"
  },
  {
    title: "Ad Banner 5",
    description: "Our fifth banner is here with the best deals of the season.",
    cta: "See Offers",
    image: "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/5/square.png",
    background: "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/5/square.png"
  }
];

const Home: React.FC = () => {
  const [banners, setBanners] = useState(initialBanners);
  const [selectedBanner, setSelectedBanner] = useState<any>(null);
  const [editOpen, setEditOpen] = useState(false);

  const handleEditClick = (banner: any) => {
    setSelectedBanner(banner);
    setEditOpen(true);
  };

  const handleSave = (updatedBanner: any) => {
    setBanners(banners.map(b => b === selectedBanner ? updatedBanner : b));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom className={styles.pageTitle}>
        Home Page
      </Typography>
      <div className={styles.bannersContainer}>
        {banners.map((banner, index) => (
          <BannerImageComp
            key={index}
            title={banner.title}
            description={banner.description}
            cta={banner.cta}
            image={banner.image}
            background={banner.background}
            onEdit={() => handleEditClick(banner)}
          />
        ))}
      </div>
      {selectedBanner && (
        <EditBannerTemplateBs
          open={editOpen}
          onClose={() => setEditOpen(false)}
          onSave={handleSave}
          banner={selectedBanner}
        />
      )}
    </Container>
  );
};

export default Home;
