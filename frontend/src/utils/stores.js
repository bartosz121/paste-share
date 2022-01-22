import { readable, writable, derived } from "svelte/store";

export const isLoading = writable(false);
export const token = writable(initToken());
export const isAuthenticated = derived(token, $token => $token ? true : false);

export function resetToken() {
  // TODO dunno if needed; maybe just use token.set("") in components instead
  token.set("");
}

function initToken() {
  if (localStorage.getItem("token")) {
    return localStorage.getItem("token")
  } else {
    return ""
  }
}
