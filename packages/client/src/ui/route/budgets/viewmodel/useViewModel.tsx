import { useEffect, useState } from "react";
import { useRepositories } from "../../../../core";
import { BudgetEntity } from "../../../../domain";

export default function useViewModel() {

    const { budgetsRepository } = useRepositories();
    
    /* --- States --- */
    const [loading, setLoading] = useState<boolean>(true);
    const [budgets, setBudgets] = useState<BudgetEntity[]>([]);
    /* --- ----- --- */

    useEffect(() => {
        fetch();
    }, []);

    const fetch = async () => {
        try {
            setLoading(true);

            const budgetsFetched = await budgetsRepository.getBudgets() || [];
            setBudgets(budgetsFetched);

            setLoading(false);
        }
        catch (error) {
            console.error(error);
            alert("Ha ocurrido un error al cargar los productos");
        }
    };

    return { 
        loading, 
        budgets,
    };

};