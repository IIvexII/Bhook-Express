// navigation/types.ts
export type RootStackParamList = {
  Categories: undefined;
  "Meals Overview": {
    id: string;
    title: string;
  };
};

// This tells React Navigation about our root navigator type
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
