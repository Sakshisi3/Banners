// components/EditBannerTemplateBs.tsx
import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, TextField, Button, IconButton, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styles from '../styles/EditBanner.module.css'; // Import CSS module

interface EditBannerProps {
  open: boolean;
  onClose: () => void;
  onSave: (data: any) => void;
  banner: {
    title: string;
    description: string;
    cta: string;
    image: string;
    background: string;
  };
}

const availableImages = [
  "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/5/square.png",
  "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/9/square.png",
  "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/1/square.png",
  "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/15/square.png"
];

const EditBannerTemplateBs: React.FC<EditBannerProps> = ({
  open,
  onClose,
  onSave,
  banner
}) => {
  const [title, setTitle] = useState(banner.title);
  const [description, setDescription] = useState(banner.description);
  const [cta, setCta] = useState(banner.cta);
  const [image, setImage] = useState(banner.image);
  const [background, setBackground] = useState(banner.background);
  const [selectedImage, setSelectedImage] = useState(banner.image);
  const [showImagePicker, setShowImagePicker] = useState(false);

  const handleSave = () => {
    onSave({ title, description, cta, image: selectedImage, background });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogContent>
        <IconButton onClick={onClose} sx={{ position: 'absolute', top: 8, right: 8 }}>
          <CloseIcon />
        </IconButton>
        <TextField
          fullWidth
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="CTA"
          value={cta}
          onChange={(e) => setCta(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Background URL"
          value={background}
          onChange={(e) => setBackground(e.target.value)}
          margin="normal"
        />
        <div className={styles.imagePickerContainer}>
          <Button
            variant="outlined"
            onClick={() => setShowImagePicker(!showImagePicker)}
          >
            {showImagePicker ? 'Hide Image Picker' : 'Choose Image'}
          </Button>
          {showImagePicker && (
            <Grid container spacing={2} className={styles.imagePicker}>
              {availableImages.map((imgUrl, index) => (
                <Grid item xs={6} sm={4} md={3} key={index}>
                  <Card>
                    <CardMedia
                      component="img"
                      alt={`Image ${index + 1}`}
                      height="140"
                      image={imgUrl}
                      onClick={() => setSelectedImage(imgUrl)}
                      className={styles.imageThumbnail}
                    />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        Image {index + 1}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </div>
        <TextField
          fullWidth
          label="Image URL"
          value={selectedImage}
          onChange={(e) => setSelectedImage(e.target.value)}
          margin="normal"
          disabled
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} variant="contained" color="primary">Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditBannerTemplateBs;
