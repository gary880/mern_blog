// set auth with redux user slice

// Path: src/auth.ts
// Compare this snippet from src/components/post/index.tsx:
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

interface AuthProvider {
    isAuthenticated: boolean;
    isAuthed: () => boolean;
  }

const AuthProvider = {
    isAuthenticated: false,
    isAuthed: () => {
      const userAuth = useSelector((state: RootState) => state.user);
      if (userAuth.user) {
        AuthProvider.isAuthenticated = true;
        return true;
      }
    },
  };
  
  export { AuthProvider };