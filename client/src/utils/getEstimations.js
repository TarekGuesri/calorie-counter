const getEstimations = (profile) => {
  const { weight, height, age, gender } = profile;

  // Basal Metabolic Rate, which is the number of calories required to keep your body functioning at rest
  let BMR;

  // We use Mifflin-St Jeor Equation to calculate the BMR
  if (gender === 'male') {
    BMR = Math.round(10 * weight + 6.25 * height - 5 * age + 5);
  } else {
    BMR = Math.round(10 * weight + 6.25 * height - 5 * age - 161);
  }

  return {
    BMR,
    plusQuart: BMR + 250, // Amount of calories needed for 0.25 kg/week gain
    plusHalf: BMR + 500, // Amount of calories needed for 0.5 kg/week gain
    minusQuart: BMR - 250, // Amount of calories needed for 0.25 kg/week loss
    minusHalf: BMR - 500, // Amount of calories needed for 0.5 kg/week loss
  };
};

export default getEstimations;
