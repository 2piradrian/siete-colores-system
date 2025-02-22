import { ReactNode, createContext, useContext, useMemo } from "react";
import { BudgetsRepository, CategoriesRepository, ProductsRepository, StatisticsRepository, SubCategoriesRepository } from "../../infrastructure";

interface RepositoriesProviderProps {
  children: ReactNode;
}

interface RepositoriesContextType {
  productsRepository: ProductsRepository;
  categoriesRepository: CategoriesRepository;
  budgetsRepository: BudgetsRepository;
  subCategoriesRepository: SubCategoriesRepository;
  statisticsRepository: StatisticsRepository;
}

const RepositoriesContext = createContext<RepositoriesContextType | null>(null);

export const RepositoriesProvider = ({ children }: RepositoriesProviderProps) => {
  const repositories = useMemo(() => ({
    productsRepository: new ProductsRepository(),
    categoriesRepository: new CategoriesRepository(),
    budgetsRepository: new BudgetsRepository(),
    subCategoriesRepository: new SubCategoriesRepository(),
    statisticsRepository: new StatisticsRepository(),
  }), []);

  return (
    <RepositoriesContext.Provider value={repositories}>
      {children}
    </RepositoriesContext.Provider>
  );
};

export const useRepositories = () => {
  const context = useContext(RepositoriesContext);

  if (!context) {
    throw new Error("context error");
  }

  return context;
};
