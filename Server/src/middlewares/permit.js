import jwt from 'jsonwebtoken';

const permit = (...role) => {
  return async (req, res, next) => {
    let token;
    if (
      req.headers.authorization
      && req.headers.authorization.startsWith('Bearer')
    ) {
      // eslint-disable-next-line
      token = req.headers.authorization.split(' ')[1];
    }
    // Make sure token exits
    if (!token) {
      return res.status(401).json({ success: false, msg: 'You are not authorized to access this request' });
    }
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decoded)
      req.user = decoded;
      if (!role.includes(req.user.role)) {
        return res.status(401).json({ success: false, msg: 'You are not authorized to access this request' });
      }
      return next();
    } catch (error) {
      next(error);
    }
  };
};

export default permit;