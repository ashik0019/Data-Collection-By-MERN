import { BadRequest, NotFound } from '../utils/error.js';
import { getUserService } from '../services/userService.js';
import asyncHandler from '../utils/async.js';

const accessControl = asyncHandler(async (req, res, next) => {
  const user = await getUserService(req.params.number);
  if (!user || user.tempDeleted === true) {
    throw new NotFound('User not found');
  }

  if (req.body.role === 'librarian') {
    return next();
  }

  if (user.role === req.body.role) {
    return next();
  }

  throw new BadRequest('You are not authorize to access this route');
});

export default accessControl;