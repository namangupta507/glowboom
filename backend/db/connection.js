const mongoose=require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://namangupta507:HukNN0DvZaVJ19Vu@cluster0.wwgobke.mongodb.net/adminGlow?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
  }
};

module.exports = connectDB;