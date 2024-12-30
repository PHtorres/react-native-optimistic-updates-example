import {QueryKey} from '@tanstack/react-query';

const REQUEST_KEY_PREFIX = 'TODOS-APP';

export const createQueryKey = <T>(key: string, variable?: T): QueryKey => {
  return [`${REQUEST_KEY_PREFIX}${key}`, variable];
};
