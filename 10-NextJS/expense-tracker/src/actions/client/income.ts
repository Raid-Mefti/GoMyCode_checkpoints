import axiosConfig from "./axiosConfig";

export async function createIncome(income: baseIncomeI) {
  const response = await axiosConfig.post("/incomes", income);
  return response.data;
}
