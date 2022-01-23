<script>
  import { Route } from "svelte-navigator";

  import ProtectedRouteGuard from "./ProtectedRouteGuard.svelte";

  export let path;
  export let redirectPath;
  export let reverse = false;
</script>

<Route {path} let:params let:location let:navigate>
  <ProtectedRouteGuard {redirectPath} {reverse}>
    <slot {params} {location} {navigate} />
  </ProtectedRouteGuard>
</Route>
