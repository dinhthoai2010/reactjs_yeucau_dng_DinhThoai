import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export function useNotAuthenticated() {
  const isAuthenticated = useSelector(state => Boolean(state.Auth.token));
  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated) history.push('/');
  }, [isAuthenticated, history]);
}