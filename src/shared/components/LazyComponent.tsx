import { Suspense } from "react";
import { Loading } from "./Loading";

export const LazyComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense fallback={<Loading />}>
      {children}
    </Suspense>
  );
};
    