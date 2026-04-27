export async function POST(req: Request) {
  try {
    const data = await req.json();

    let { score, schoolType, income } = data;

    // Convert score to number
    const rawScore = Number(score);

    // Safety check
    if (!rawScore) {
      return Response.json({ error: "Invalid score" });
    }

    let multiplier = 1;
    let factors: string[] = [];

    // 🎓 School factor
    if (schoolType === "government") {
      multiplier += 0.2;
      factors.push("limited school resources");
    }

    // 💰 Income factor
    if (income === "<1L") {
      multiplier += 0.4;
      factors.push("low-income background");
    } else if (income === "1-3L") {
      multiplier += 0.3;
      factors.push("financial constraints");
    } else if (income === "3-6L") {
      multiplier += 0.2;
      factors.push("restricted opportunities");
    }

    // 🧮 Calculate adjusted score
    const adjustedScore = parseFloat(
      (rawScore * multiplier).toFixed(2)
    );

    // 🏷️ Label logic
    let label = "Average";
    if (adjustedScore > 9) {
      label = "🚀 High Performer";
    } else if (adjustedScore > 7.5) {
      label = "⭐ Hidden Star";
    }

    // 🧠 AI-style explanation
    const explanation =
      factors.length > 0
        ? `This candidate performed strongly despite ${factors.join(
            ", "
          )}. MeritLens identifies this as hidden potential.`
        : "This candidate has strong academic performance.";

    // 📤 Send response
    return Response.json({
      rawScore,
      adjustedScore,
      label,
      factors,
      explanation,
    });

  } catch (error) {
    return Response.json({ error: "Something went wrong" });
  }
}