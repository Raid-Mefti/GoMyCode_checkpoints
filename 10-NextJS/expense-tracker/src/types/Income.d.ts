declare interface baseIncomeI<ID = string> {
  sourceId: ID; // e.g., "Salary", "Freelancing" (ref to Category)
  amount: number;
  date: Date;
  notes?: string;

}

declare interface IncomeI<ID = string> extends baseIncomeI<ID> {
  _id: ID;
  createdAt: Date;
  updatedAt: Date;
}

