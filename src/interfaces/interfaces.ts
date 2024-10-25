export interface UserApp {
  uid: string;
  email: string | null;
  displayName: string | null;
}

export interface InitState {
  user: UserApp | null;
}

export interface AppContextType {
  initialState: InitState;
  setInitialState: React.Dispatch<React.SetStateAction<InitState>>;
}