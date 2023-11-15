import {
  NavigationProp,
  useNavigation as RNUseNavigation,
} from '@react-navigation/native';

export const useNavigation = () => {
  return RNUseNavigation<NavigationProp<AppStackParamList>>();
};
