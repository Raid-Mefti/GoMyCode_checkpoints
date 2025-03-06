import { getCategories } from "@/actions/server/category";

import IncomeForm from "@/components/IncomeForm";
import React from "react";

export default async function AddIncome() {
    const categories = await getCategories("income");
    return (
        <div>
            <h1>Add Income</h1>
            <IncomeForm categories={categories} />
        </div>
    );
}
