export async function POST(req: Request) {
  const data = await req.json();

  const { score, schoolType, income } = data;

  let multiplier = 1;

  if (schoolType === "government") multiplier += 0.2;

  if (income === "<1L") multiplier += 0.4;
  else if (income === "1-3L") multiplier += 0.3;
  else if (income === "3-6L") multiplier += 0.2;

  const adjustedScore = parseFloat((score * multiplier).toFixed(2));

  let label = "Average";
  if (adjustedScore > 9) label = "High Performer";
  else if (adjustedScore > 7.5) label = "Hidden Star";

  return Response.json({
    adjustedScore,
    label,
    explanation:
      "This candidate shows strong potential despite socioeconomic constraints.",
  });
}