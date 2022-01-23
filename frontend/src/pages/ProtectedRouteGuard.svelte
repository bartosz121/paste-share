<script>
  import { useNavigate, useLocation } from "svelte-navigator";
  import { isAuthenticated } from "../utils/stores";

  const navigate = useNavigate();
  const location = useLocation();

  export let redirectPath;
  export let reverse; // this is true if I want to check if user IS authenticated
  // instead of default NOT; used in 'sign-in' and 'sign-out' routes

  $: if (reverse ? $isAuthenticated : !$isAuthenticated) {
    navigate(`/${redirectPath}`, {
      state: { from: $location.pathname },
      replace: true,
    });
  }
</script>

{#if isAuthenticated}
  <slot />
{/if}
