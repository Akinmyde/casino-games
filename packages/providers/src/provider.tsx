import React, { ReactNode } from "react";
import QueryProviders from './query/index'
export default function Providers({ children }: { children: ReactNode }) {
    return (
        <QueryProviders>
        {children}
        </QueryProviders>
    );
  }
