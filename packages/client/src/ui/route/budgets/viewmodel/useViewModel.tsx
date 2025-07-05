import { useEffect, useState } from "react";
import { useRepositories } from "../../../../core";
import { BudgetEntity } from "../../../../domain";
import toast from "react-hot-toast";

export default function useViewModel() {

    const { budgetsRepository } = useRepositories();
    
    /* --- States --- */
    const [loading, setLoading] = useState<boolean>(true);
    const [budgets, setBudgets] = useState<BudgetEntity[]>([]);
    const [showModal, setShowModal] = useState<boolean>(false);
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
            toast.error("Ha ocurrido un error al cargar los presupuestos");
        }
    };

    const deleteOlder = async () => {
        try {
            await budgetsRepository.deleteOlderBudgets();
            toast.success("Presupuestos antiguos eliminados correctamente");
            fetch();
        }
        catch(error){
            toast.success("Presupuestos antiguos eliminados correctamente");
            fetch();
        }
        finally {
            setShowModal(false);
        }
    }
    
    return { 
        loading, 
        budgets,
        deleteOlder,
        showModal,
        setShowModal
    };

};