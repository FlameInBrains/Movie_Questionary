import React, { useMemo, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

interface ContextValues {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const PageContext = React.createContext({} as ContextValues);

export const PageProvider: React.FC<Props> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const contextValues: ContextValues = useMemo(
    () => ({
      currentPage,
      setCurrentPage,
    }),
    [currentPage],
  );

  return (
    <PageContext.Provider value={contextValues}>
      {children}
    </PageContext.Provider>
  );
};