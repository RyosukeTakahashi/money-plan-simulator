import * as z from "zod";

// todo: コンポーネント分割
// todo: i18n対応。文字列なくせるように
export const schema = z.object({
  userIncome: z
    .number()
    .min(0, { message: "Input a number larger than 0" })
    .default(0),
  userAge: z
    .number()
    .min(15, { message: "Input a number larger than 15" })
    .max(100, { message: "Input a number smaller than 100" })
    .default(0),
  userRetirementAge: z
    .number()
    .min(0, { message: "Input a number larger than 0" })
    .default(0),
  partnerIncome: z
    .number()
    .min(0, { message: "Input a number larger than 0" })
    .default(0),
  partenrAge: z
    .number()
    .min(0, { message: "Input a number larger than 0" })
    .default(0),
  partnerRetirementAge: z
    .number()
    .min(0, { message: "Input a number larger than 0" })
    .default(0),
  currentBalance: z.number().default(3_000_000),

  investmentBalance: z.number().default(3_000_000),
  DCInvestment: z.number().default(0),
  DCexpectedAnnualInterest: z.number().default(0),
  reserveInvestment: z.number().default(1_000_000),
  reserveInvestmentAnnualInterest: z.number().default(0.03),

  childCount: z.number().default(0),
  // childcountをwatchして、childcountの数に応じて、schemaに、マージ？

  // renderするフォームも、以下を変える。
  // Array(3).fill(0).map(<Child/>)
  // children: z.array(
  //   z.object({
  //     ageOfUserWhenBorn: z.string(),
  //   })
  // ),
  childCollegeType: z.string().default("1"),
  buyOrRent: z.string().default(""),
  houseType: z.string().default(""),
  downPaymentOfHouse: z.number().default(0),
  housingLoan: z.number().default(0),
  montylyReserevedHouseRepairCost: z.number().default(0),
  annualPropertyTax: z.number().default(0),
  fireInsuranceCost: z.number().default(0),
  carPayment: z.number().default(0),
  annualTripCostPerPerson: z.number().default(0),
  houseUtilities: z.number().default(0),
  changeCycleOfHouseApplicance: z.number().default(0),
  cellphonePayment: z.number().default(0),
  internetConnectionPayment: z.number().default(0),
  subscriptions: z.array(z.string()).default([""]),
});

export type Inputs = z.infer<typeof schema>;

export const transformedSchema = schema.transform((x) => {
  const childCollegeType = Number(x.childCollegeType);
  return {
    ...x,
    childCollegeType,
  };
});

export type TransformedInputs = z.infer<typeof transformedSchema>;
