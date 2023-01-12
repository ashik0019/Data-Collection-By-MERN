import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  mobile: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  resetPasswordToken: {
    type: String,
  },
  resetPasswordExpires: {
    type: Date,
  },
  isActivate: {
    type: Boolean,
    default: false,
  },
  isLoadOut: {
    type: Boolean,
    default: false,
  },
  isDeleted: {
    type: Boolean,
    default: false,
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