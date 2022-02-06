const { StatusCodes } = require("http-status-codes");
const { NotFound } = require("../errors");
const data = require("../data");

const getData = (req, res) => {
  if (!data || data.length === 0) {
    throw new NotFound("Data Not Found");
  }

  res.status(StatusCodes.OK).json(data);
};

module.exports = { getData };
