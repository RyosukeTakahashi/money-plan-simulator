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
  childCount: z
    .union([z.number().min(0).max(5).default(0), z.nan()])
    .transform((count) => {
      if (isNaN(count)) {
        return 0;
      }
      return count;
    }),
  children: z
    .union([
      z.array(
        //schema.shape.children.element.shape.phoneTypeで取れる
        z.object({
          ageOfUserWhenBorn: z.number().min(18).default(18),
          elementarySchoolType: z.string().default("public"),
          middleSchoolType: z.string().default("public"),
          highSchoolType: z.string().default("public"),
          bachellorType: z.string().default("public"),
          masterType: z.string().default("public"),
          remmitance: z.number().default(0),
          phoneType: z.string().default("public"),
          ageToStartUsingSmartphone: z.number().default(13),
        })
      ),
      z.array(z.object({})),
    ])
    .default([]),
  buyOrRent: z.string().default("rent"),
  houseType: z.string().default("HighPerformance"), //光熱費に影響
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
