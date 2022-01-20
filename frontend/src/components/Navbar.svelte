<script>
  import logo from "../assets/logo.png";
  import { Link, Router } from "svelte-navigator";
</script>

<div class="">
  <Router>
    <nav class="bg-zinc-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <!-- Copy And Paste by Hea Poh Lin from NounProject.com -->
              <Link to="/">
                <img class="h-8 w-8" src={logo} alt="Logo" />
              </Link>
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <div
                  class="bg-indigo-600 text-white px-3 py-2 rounded-md text-sm font-medium transition ease-in-out hover:bg-indigo-700"
                >
                  New paste
                </div>
              </div>
            </div>
          </div>
          <div class="block">
            <div class="ml-4 flex flex-row gap-4 items-center md:ml-6">
              <div
                class="bg-indigo-600 text-white px-3 py-2 rounded-md text-sm font-medium transition ease-in-out hover:bg-indigo-700"
              >
                Account
              </div>
              <div
                class="bg-indigo-600 text-white px-3 py-2 rounded-md text-sm font-medium transition ease-in-out hover:bg-indigo-700"
              >
                Sign out
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </Router>
</div>
