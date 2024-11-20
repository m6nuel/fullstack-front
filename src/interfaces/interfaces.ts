export interface UserApp {
  uid: string;
  email: string | null;
  displayName: string | null;
}

export interface TemaType {
  id?: number;
  tema: string;
  subtema?: SubTemaType[];
  userEmail?: string;
}

export interface SubTemaType {
  id?: number;
  subtema: string;
  description?: string;
}

export interface InitState {
  user: UserApp | undefined;
  temas: TemaType[] | [];
}

export interface AppContextType {
  initialState: InitState;
  setInitialState: React.Dispatch<React.SetStateAction<InitState>>;
}