<script>
  import logo from "../assets/logo.png";
  import { Link, navigate, Router } from "svelte-navigator";
  import { isAuthenticated, token, userId } from "../utils/stores";
  import { infoToast } from "../utils/toasts";
  import axios from "axios";

  function logout() {
    axios.defaults.headers.common["Authorization"] = "";

    localStorage.removeItem("token");
    localStorage.removeItem("username");

    token.set("");
    userId.set(null);

    infoToast("You are logged out");
    navigate("/");
  }
</script>

<div class="">
  <Router>
    <nav class="bg-zinc-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <Link to="/">
                <!-- Copy And Paste by Hea Poh Lin from NounProject.com -->
                <img class="h-8 w-8" src={logo} alt="Logo" />
              </Link>
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <Link to="/">
                  <div
                    class="bg-indigo-600 text-white px-3 py-2 rounded-md text-sm font-medium transition ease-in-out hover:bg-indigo-700 cursor-pointer"
                  >
                    New paste
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div class="block">
            <div class="ml-4 flex flex-row gap-4 items-center md:ml-6">
              {#if $isAuthenticated}
                <Link to="/account">
                  <div
                    class="bg-indigo-600 text-white px-3 py-2 rounded-md text-sm font-medium transition ease-in-out hover:bg-indigo-700 cursor-pointer"
                  >
                    Account
                  </div>
                </Link>
                <div
                  on:click={logout}
                  class="bg-indigo-600 text-white px-3 py-2 rounded-md text-sm font-medium transition ease-in-out hover:bg-indigo-700 cursor-pointer"
                >
                  Logout
                </div>
              {:else}
                <Link to="/sign-in">
                  <div
                    class="bg-indigo-600 text-white px-3 py-2 rounded-md text-sm font-medium transition ease-in-out hover:bg-indigo-700 cursor-pointer"
                  >
                    Sign In
                  </div>
                </Link>
                <Link to="/sign-up">
                  <div
                    class="bg-indigo-600 text-white px-3 py-2 rounded-md text-sm font-medium transition ease-in-out hover:bg-indigo-700 cursor-pointer"
                  >
                    Sign Up
                  </div>
                </Link>
              {/if}
            </div>
          </div>
        </div>
      </div>
    </nav>
  </Router>
</div>
