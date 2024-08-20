import {PropsWithChildren, ReactElement} from 'react';
import {RenderOptions, render} from '@testing-library/react-native';
import {
  QueryClient,
  QueryClientConfig,
  QueryClientProvider,
} from '@tanstack/react-query';

const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: false,
      gcTime: Infinity,
    },
    mutations: {
      retry: false,
      gcTime: Infinity,
    },
  },
};

const wrapAllProviders = () => {
  return ({children}: PropsWithChildren) => {
    const queryClient = new QueryClient(queryClientConfig);
    return (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  };
};

const customRender = <T,>(
  component: ReactElement<T>,
  options?: Omit<RenderOptions, 'wrapper'>,
) => {
  return render(component, {wrapper: wrapAllProviders(), ...options});
};

export * from '@testing-library/react-native';
export {customRender as render};
