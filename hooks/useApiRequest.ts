"use client";

import { useState, useCallback } from "react";
import { getErrorMessage } from "@/lib/api";

interface UseApiRequestState {
  loading: boolean;
  error: string | null;
  success: boolean;
}

interface UseApiRequestReturn<T, TArgs extends unknown[]>
  extends UseApiRequestState {
  execute: (...args: TArgs) => Promise<T | null>;
  reset: () => void;
}

export function useApiRequest<T, TArgs extends unknown[]>(
  apiFunction: (...args: TArgs) => Promise<T>
): UseApiRequestReturn<T, TArgs> {
  const [state, setState] = useState<UseApiRequestState>({
    loading: false,
    error: null,
    success: false,
  });

  const execute = useCallback(
    async (...args: TArgs): Promise<T | null> => {
      setState({
        loading: true,
        error: null,
        success: false,
      });

      try {
        const result = await apiFunction(...args);
        setState({
          loading: false,
          error: null,
          success: true,
        });
        return result;
      } catch (error) {
        const errorMessage = getErrorMessage(error);
        setState({
          loading: false,
          error: errorMessage,
          success: false,
        });
        return null;
      }
    },
    [apiFunction]
  );

  const reset = useCallback(() => {
    setState({
      loading: false,
      error: null,
      success: false,
    });
  }, []);

  return {
    ...state,
    execute,
    reset,
  };
}
