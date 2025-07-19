import { createContext } from "react"
import { Models } from "react-native-appwrite";

type AuthContextType = {
    user: Models.User<Models.Preferences> | null;
    signUp: ()  => Promise<void>;
    signIn: ()  => Promise<void>;
}

const AuthContext = createContext(undefined);

export function AuthProvider({children}: { children: React.ReactNode }) {
  return <></>
}

export function useAuth() {

}