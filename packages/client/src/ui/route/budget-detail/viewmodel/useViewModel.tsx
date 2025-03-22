import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRepositories } from "../../../../core";
import { BudgetEntity } from "../../../../domain";
import toast from "react-hot-toast";

export default function useViewModel() {

    const { id = "" } = useParams();
    const { budgetsRepository } = useRepositories();
    
    /* --- States --- */
    const [loading, setLoading] = useState<boolean>(true);
    const [budget, setBudget] = useState<BudgetEntity | undefined>();
    /* --- ----- --- */

    useEffect(() => {
        fetch();
    }, [id]);

    const fetch = async () => {
        try {
            setLoading(true);

            if (id !== "") {
                const budgetFetched = await budgetsRepository.getBudget(id) || undefined;
                setBudget(budgetFetched);
            }

            setLoading(false);
        }
        catch (error) {
            console.error(error);
            toast.error("Ha ocurrido un error al cargar el presupuesto");
        }
    };

    const deleteBudget = async (): Promise<void> => {
        try {
            if (id) {
                await budgetsRepository.deleteBudget(id);
                toast.success("Presupuesto eliminado con éxito");
            }
        }
        catch (error) {
            console.error(error);
            toast.error("Ha ocurrido un error al eliminar el presupuesto");
        }
    };

    const handlePrint = () => {
		window.print();
	};

    return { 
        loading, 
        budget,
        deleteBudget,
        handlePrint
    };

};