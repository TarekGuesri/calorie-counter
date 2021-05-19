module.exports = (time) => {
  return async (req, res, next) => {
    if (process.env.NODE_ENV !== 'production') {
      setTimeout(() => {
        next();
      }, time);
    } else {
      next();
    }
  };
};
