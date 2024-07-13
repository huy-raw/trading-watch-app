import React, { FC, useState } from 'react'
import {
  Box,
  Typography,
  Grid,
  IconButton,
  Card,
  CardMedia,
  CardActions
} from '@mui/material'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto'
import VideoCallIcon from '@mui/icons-material/VideoCall'
import DeleteIcon from '@mui/icons-material/Delete'

interface ImageVideoSideProps {
  initialImages?: string[]
  initialVideos?: string[]
}

const ImageList: FC<{
  images: string[]
  handleRemoveImage: (url: string) => void
}> = ({ images, handleRemoveImage }) => {
  return (
    <Grid container spacing={2} sx={{ marginTop: 2 }}>
      {images.map((image, index) => (
        <Grid item xs={6} key={index}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={image}
              alt={`Image ${index}`}
            />
            <CardActions>
              <IconButton
                color="secondary"
                onClick={() => handleRemoveImage(image)}
              >
                <DeleteIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

const VideoList: FC<{
  videos: string[]
  handleRemoveVideo: (url: string) => void
}> = ({ videos, handleRemoveVideo }) => {
  return (
    <Grid container spacing={2} sx={{ marginTop: 2 }}>
      {videos.map((video, index) => (
        <Grid item xs={12} key={index}>
          <Card>
            <CardMedia component="video" controls height="140" src={video} />
            <CardActions>
              <IconButton
                color="secondary"
                onClick={() => handleRemoveVideo(video)}
              >
                <DeleteIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

const ImageVideoSide: FC<ImageVideoSideProps> = ({
  initialImages = [],
  initialVideos = []
}) => {
  const [images, setImages] = useState<string[]>(initialImages)
  const [videos, setVideos] = useState<string[]>(initialVideos)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    const fileUrls = files.map((file) => URL.createObjectURL(file))
    setImages((prevImages) => [...prevImages, ...fileUrls].slice(0, 6))
  }

  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    const fileUrls = files.map((file) => URL.createObjectURL(file))
    setVideos((prevVideos) => [...prevVideos, ...fileUrls])
  }

  const handleRemoveImage = (url: string) => {
    setImages((prevImages) => prevImages.filter((image) => image !== url))
  }

  const handleRemoveVideo = (url: string) => {
    setVideos((prevVideos) => prevVideos.filter((video) => video !== url))
  }

  return (
    <Box>
      <Typography variant="h6" component="label" gutterBottom>
        Image/Video
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {images.length < 6 && (
            <Box
              sx={{
                border: '2px dashed #D9D9D9',
                borderRadius: 2,
                padding: 3,
                textAlign: 'center',
                bgcolor: '#f5f5f5',
                cursor: 'pointer',
                marginX: 20,
                position: 'relative'
              }}
            >
              <input
                accept="image/*"
                type="file"
                multiple
                style={{
                  opacity: 0,
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  cursor: 'pointer'
                }}
                onChange={handleImageUpload}
              />
              <AddAPhotoIcon sx={{ fontSize: 50 }} />
              <Typography variant="body1" sx={{ marginTop: 1 }}>
                Đăng từ 01 đến 06 ảnh
              </Typography>
            </Box>
          )}
          <ImageList images={images} handleRemoveImage={handleRemoveImage} />
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              border: '2px dashed #D9D9D9',
              padding: 3,
              borderRadius: 2,
              textAlign: 'center',
              bgcolor: '#f5f5f5',
              cursor: 'pointer',
              marginX: 20,
              position: 'relative'
            }}
          >
            <input
              accept="video/*"
              type="file"
              style={{
                opacity: 0,
                position: 'absolute',
                width: '100%',
                height: '100%',
                cursor: 'pointer'
              }}
              onChange={handleVideoUpload}
            />
            <VideoCallIcon sx={{ fontSize: 50 }} />
            <Typography variant="body1" sx={{ marginTop: 1 }}>
              Đăng tối đa 01 video
            </Typography>
          </Box>
          <VideoList videos={videos} handleRemoveVideo={handleRemoveVideo} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default ImageVideoSide
