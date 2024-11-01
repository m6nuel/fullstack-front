export interface UserApp {
  uid: string;
  email: string | null;
  displayName: string | null;
}

export interface TemaType {
  id?: number;
  tema: string;
  subtema?: [];
}

export interface InitState {
  user: UserApp | undefined;
  temas: TemaType[] | [];
}

export interface AppContextType {
  initialState: InitState;
  setInitialState: React.Dispatch<React.SetStateAction<InitState>>;
}