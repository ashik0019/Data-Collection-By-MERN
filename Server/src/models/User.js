import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  number: {
    type: String,
    unique: true,
  },
  role: {
    type: String,
    enum: ['admin', 'staff'],
  },
  tempDeleted: {
    type: Boolean,
    default: false,
  },
},
{
  timestamps: true,
});
const User = mongoose.model('user', userSchema);
export default User;