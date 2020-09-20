const okrsService = require('../services/okrs.service');
const tickerService = require('../services/ticker.service');

const OkrsController = () => {

  const get = async (req, res) => {
    const rdocValue = await okrsService().getRDoCStake();
    const rifPriceValue = await tickerService().getRifPrice();
    return res.status(200).json({
        rdoc: rdocValue,
        rifPrice: rifPriceValue,
    });
  }

  return {
    get,
  };
};

module.exports = OkrsController;
