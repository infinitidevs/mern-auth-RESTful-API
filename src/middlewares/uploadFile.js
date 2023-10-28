const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'images_api',
    allowFormats: ['png', 'jpg', 'gif', 'jpeg']
  }
});

const uploadFile = multer({ storage });

module.exports = uploadFile;
