import { nanoid } from 'nanoid'

import type { IdProvider } from '.'

const BaseIdProvider = {
  run: (prefix: string, length: number): string => {
    return prefix + '-' + nanoid(length) 
  }
}

export const NodeIdProvider: IdProvider = {
  run: (): string => {
    return BaseIdProvider.run('node', 8)
  }
}


