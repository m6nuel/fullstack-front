export interface UserApp {
  uid: string;
  email: string | null;
  displayName: string | null;
}

export interface TemaType {
  tema: string;
}

export interface InitState {
  user: UserApp | undefined;
  temas: TemaType[] | [];
}

export interface AppContextType {
  initialState: InitState;
  setInitialState: React.Dispatch<React.SetStateAction<InitState>>;
}