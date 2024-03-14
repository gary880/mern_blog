// set auth with redux user slice

// Path: src/auth.ts
// Compare this snippet from src/components/post/index.tsx:

interface AuthProvider {
    isAuthenticated: boolean;
    isAuthed: () => boolean;
  }

const AuthProvider = {
    isAuthenticated: false,
    isAuthed: () => {
      const userAuth = JSON.parse(localStorage.getItem("user") || "{}");
      if (userAuth.user) {
        AuthProvider.isAuthenticated = true;
        return true;
      }
    },
  };
  
  export { AuthProvider };