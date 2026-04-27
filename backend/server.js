const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Multiplier Logic Data
const incomeMultipliers = [1.40, 1.28, 1.14, 1.05, 1.00];
const schoolBonus = {
  rural: 0.12,
  government: 0.07,
  private: 0.00,
  elite: -0.05
};

// API Endpoint
app.post('/api/calculate', (req, res) => {
  try {
    const { score, schoolType, income } = req.body;

    // Validation
    if (score === undefined || schoolType === undefined || income === undefined) {
      return res.status(400).json({ error: 'Missing required fields: score, schoolType, income' });
    }

    if (income < 0 || income > 4) {
      return res.status(400).json({ error: 'Income must be a number between 0 and 4' });
    }

    if (!schoolBonus.hasOwnProperty(schoolType)) {
      return res.status(400).json({ error: 'Invalid schoolType' });
    }

    const baseIncomeMultiplier = incomeMultipliers[income];
    const bonus = schoolBonus[schoolType];

    const gritMultiplier = Number((baseIncomeMultiplier + bonus).toFixed(2));
    
    // Calculate adjusted score (capped at 10)
    let adjustedScore = score * gritMultiplier;
    adjustedScore = Math.min(adjustedScore, 10);
    
    // Generate insight
    let insight = "";
    if (gritMultiplier >= 1.3) {
      insight = "Exceptional resilience under low resources";
    } else if (gritMultiplier >= 1.15) {
      insight = "Strong potential despite challenges";
    } else {
      insight = "Stable performance";
    }

    // Return response
    return res.json({
      rawScore: score,
      gritMultiplier,
      adjustedScore: Number(adjustedScore.toFixed(2)),
      insight
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
