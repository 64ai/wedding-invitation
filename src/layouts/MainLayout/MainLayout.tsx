import type {FC} from 'react';

export type MainLayoutProps = {}

const MainLayout: FC<MainLayoutProps> = ({children}) => {
  return (
    <main className="main-layout">
      {children}
    </main>
  );
};

export default MainLayout;
