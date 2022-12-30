import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  icon: {
    type: String,
    default: 'default.png'
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active'
  },

},
  {
    timestamps: true,
  });
const Categories = mongoose.model('categories', userSchema);
export default Categories;