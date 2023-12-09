'use client'

import { PropsWithChildren, createContext, useContext } from 'react'

export type UseSubmit = () => {
  isValid: boolean
  onSubmit: () => Promise<void>
}

const UseSubmitContext = createContext<UseSubmit | null>(null)

export const UseSubmitProvider: React.FC<
  PropsWithChildren<{ hooks: UseSubmit }>
> = ({ children, hooks }) => {
  return (
    <UseSubmitContext.Provider value={hooks}>
      {children}
    </UseSubmitContext.Provider>
  )
}

export const useSubmit = () => {
  const hooks = useContext(UseSubmitContext)
  if (!hooks) {
    throw new Error('useSubmit must be used within a UseSubmitProvider')
  }

  return hooks()
}