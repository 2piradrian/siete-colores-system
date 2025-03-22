import { useEffect, useState } from "react";
import { useRepositories } from "../../../../core";
import { BudgetEntity } from "../../../../domain";
import toast from "react-hot-toast";

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
            toast.error("Ha ocurrido un error al cargar los productos");
        }
    };

    return { 
        loading, 
        budgets,
    };

};