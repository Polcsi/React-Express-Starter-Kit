const { StatusCodes } = require("http-status-codes");
const { NotFound } = require("../errors");
const data = require("../data");
const asyncWrapper = require("../middleware/async"); // try catch block in seperate file
//const asyncWrapper = require("express-async-handler"); // with npm package

const getData = asyncWrapper(async (req, res) => {
  if (!data || data.length === 0) {
    throw new NotFound("Data Not Found");
  }

  res.status(StatusCodes.OK).json(data);
});

module.exports = { getData };
