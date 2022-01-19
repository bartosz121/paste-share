<script>
  import { Router, Link, Route } from "svelte-navigator";
  import Home from "./views/Home.svelte";
  import About from "./views/About.svelte";
  import Navbar from "./components/Navbar.svelte";
</script>

<main class="flex flex-col h-screen">
  <div class="">
    <Navbar />
  </div>
  <Router>
    <div class="flex flex-grow bg-zinc-800">
      <Route path="/">
        <Home />
      </Route>
      <Route path="about">
        <About />
      </Route>
    </div>
  </Router>
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
