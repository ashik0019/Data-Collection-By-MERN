// Get token from model, create cookie and send response
import jwt from 'jsonwebtoken';

const sendTokenResponse = (user, statusCode, res) => {
  console.log(user)
  // Create token
  const token = jwt.sign({
    id: user._id, role: user.role}, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE_LOGIN,
  });
  const authDetails = {_id: user._id,email:user.email,role:user.role,isActivate:user.isActivate}

  res
    .status(statusCode)
    .json({ success: true, token, details: authDetails});
};

export default sendTokenResponse;
