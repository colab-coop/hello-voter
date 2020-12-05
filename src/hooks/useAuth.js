import { useEffect, useState } from 'react'

const { REACT_APP_APP_PATH } = process.env

export const useAuth = (token, api) => {
  const [authenticated, setAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const signOut = () => {
    // Fully clear authentication data and refresh the webpage.
    localStorage.clear();
    setAuthenticated(false);
    window.location = REACT_APP_APP_PATH || "/";
  };

  const fetchUser = async () => {
    let { data, error } = await api.fetchAmbassador()
    if (error) {
      console.log('error', {error, data});
      // TODO: Change authenticated to "in_signup_process"
      if (error?.msg === 'No current ambassador') {
        setAuthenticated(true);
      }
      if (error?.msg === 'Your account is locked.') {
        setAuthenticated(true);
        setUser({ locked: true });
      }
      setLoading(false);
      return { error };
    }
    setUser(data)
    setAuthenticated(true)
    setLoading(false)
    return { data };
  }
  useEffect(() => {
    if (!authenticated) fetchUser();
  });

  return {
    authenticated,
    signOut,
    user,
    loading, // TODO: if fetchUser is called again, set loading true again
    fetchUser
  }
}
