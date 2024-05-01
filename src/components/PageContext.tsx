import React, { useEffect, useMemo, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

interface ContextValues {
  currentPercent: string,
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setCurrentPercent: React.Dispatch<React.SetStateAction<string>>;
}

export const PageContext = React.createContext({} as ContextValues);

export const PageProvider: React.FC<Props> = ({ children }) => {
  const localPage = +JSON.parse(localStorage.getItem('currentPage') as string);
  const localPercent = JSON.parse(localStorage.getItem('currentPercent') as string)
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPercent, setCurrentPercent] = useState('33')

  useEffect(() => {
    if (localPage !== 1) {
      setCurrentPage(localPage);
    }
  }, [currentPage])

  useEffect(() => {
    if (localPercent !== '33') {
      setCurrentPercent(localPercent);
    }
  }, [currentPage])

  const contextValues: ContextValues = useMemo(
    () => ({
      currentPercent,
      currentPage,
      setCurrentPage,
      setCurrentPercent,
    }),
    [currentPage],
  );

  return (
    <PageContext.Provider value={contextValues}>
      {children}
    </PageContext.Provider>
  );
};