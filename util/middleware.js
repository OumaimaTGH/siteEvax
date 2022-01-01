const {StatusCodes} =  require('http-status-codes')

const ROLES = {
  ADMIN__ROLES: "1",
  OPERATOR__ROLES: "2"
};

const checkIsInRole =
  (...roles) =>
  (req, res, next) => {
    const hasRole = roles.find((role) => req.user.role === role);
    console.log(...roles);
    if (!hasRole) {
      return res.status(StatusCodes.FORBIDDEN).send({ message: "NOT FOUND" });
    }
    return next();
  };

module.exports = {
  checkIsInRole,
  ROLES,
};
