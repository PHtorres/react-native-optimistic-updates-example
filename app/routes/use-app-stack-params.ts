import {RouteProp, useRoute} from '@react-navigation/native';

export const useAppStackParams = <T extends keyof AppStackParamList>(_: T) => {
  const {params} = useRoute<RouteProp<AppStackParamList, T>>();
  return params!;
};
