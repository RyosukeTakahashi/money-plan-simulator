import { Inputs } from "./schema";

export const balanceTransiton = (years: number[], data: Inputs): number[] => {
  const incomeTranisiton = years.map((_, index) => {
    if (index === 0) return data.currentBalance + data.userIncome;
    return data.userIncome;
  });

  const expenseTransition = years.map(() => {
    return data.housingLoan;
  });

  const incomeAccumulation = getAccumulation(incomeTranisiton);
  const expenseAccumulation = getAccumulation(expenseTransition);

  const balanceTransition = years.map((_, index) => {
    return incomeAccumulation[index] - expenseAccumulation[index];
  });
  return balanceTransition;
};

const getAccumulation = (tranisiton: number[]) => {
  let accumulation: number[] = [];
  tranisiton.forEach((thisYearValue: number, index) => {
    if (index === 0) {
      accumulation.push(thisYearValue);
      return;
    }
    accumulation.push(accumulation[accumulation.length - 1] + thisYearValue);
  });
  return accumulation;
};

//福利を考慮した、累積投資額の推移
export const investmentAccumulation = (
  years: number[],
  data: Inputs
): number[] => {
  let accumulation: number[] = [];
  const investmentTransition = years.map((_, index) => {
    if (index === 0) return data.investmentBalance + data.reserveInvestment;
    return data.reserveInvestment;
  });
  const multiplier = 1 + data.reserveInvestmentAnnualInterest;
  investmentTransition.forEach((thisYearInvestment: number, index) => {
    if (index === 0) {
      accumulation.push(
        (data.investmentBalance + thisYearInvestment) * multiplier
      );
    }
    const newValue =
      (accumulation[accumulation.length - 1] + thisYearInvestment) * multiplier;

    accumulation.push(newValue);
  });
  return accumulation;
};
