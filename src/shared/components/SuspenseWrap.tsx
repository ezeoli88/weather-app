import { Suspense } from 'react';
import { Loading } from './Loading';

export const SuspenseWrap = ({ children }: { children: React.ReactNode }) => {
    return <Suspense fallback={<Loading />}>{children}</Suspense>;
};
