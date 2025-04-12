const express = require("express");
const { auth } = require("../Middelware/auth");
const { finance } = require("../Model/financeModel");

const projectionRoute = express.Router();
projectionRoute.use(auth);

projectionRoute.get("/projection", async (req, res) => {
  try {
    const userId = req.userData._id;

    const latestFinance = await finance.findOne({ userId }).sort({ createdAt: -1 });

    if (!latestFinance) {
      return res.status(404).json({ message: "No financial data found" });
    }

    const { income, expenses, savings } = latestFinance;

    const monthlyNet = income - expenses;
    const projection = [];

    let futureSavings = savings;

    // Generate projection for next 12 months
    for (let i = 1; i <= 12; i++) {
      futureSavings += monthlyNet;

      projection.push({
        month: `Month ${i}`,
        projectedSavings: parseFloat(futureSavings.toFixed(2))
      });
    }

    res.status(200).json({
      base: { income, expenses, savings, monthlyNet },
      projection
    });

  } catch (error) {
    res.status(500).json({ message: "Projection error", error: error.message });
  }
});

module.exports = { projectionRoute };
