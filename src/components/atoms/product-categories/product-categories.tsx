import useCategories from "../../../hooks/useCategories";
import { Category } from "../../../types/types";

export default function ProductCategories(){

	const { categories } = useCategories();
    	
	return (
        <>
            {
			categories?.map((category: Category) => (
				<option key={category.name}>{category.name}</option>
			))
			}
        </>
    )
}