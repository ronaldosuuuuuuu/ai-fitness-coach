function scrollToForm() {
  document.getElementById("formSection").scrollIntoView({
    behavior: "smooth"
  });
}

const form = document.getElementById("fitnessForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  document.getElementById("result").innerText = "Generating your plan... 🔥";

  setTimeout(() => {
    document.getElementById("result").innerText =
`🏋️ WORKOUT PLAN
Day 1: Chest + Triceps
Day 2: Back + Biceps

🍽️ MEAL PLAN
Breakfast: Eggs + Oats
Lunch: Chicken + Rice
Dinner: Fish + Vegetables`;
  }, 1500);
});