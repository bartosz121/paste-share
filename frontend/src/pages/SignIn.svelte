<script>
  import { useFocus, navigate } from "svelte-navigator";
  import { toast } from "@zerodevx/svelte-toast";
  import { successToast, errorToast } from "../utils/toasts";
  import { API_URL, token } from "../utils/stores";
  import axios from "axios";

  const focus = useFocus();

  let username = "";
  let password = "";
  let errors = [];

  function showErrors() {
    toast.pop(0); // Dismiss any visible toasts
    errors.forEach((err) => {
      errorToast(err);
    });
  }

  async function handleSignIn() {
    errors = [];

    if (username === "") {
      errors = [...errors, "The username is missing"];
    }

    if (password === "") {
      errors = [...errors, "The password is missing"];
    }

    if (!errors.length) {
      axios.defaults.headers.common["Authorization"] = "";
      localStorage.removeItem("token");
      token.set("");

      const formData = {
        username: username,
        password: password,
      };

      await axios
        .post($API_URL + "/api/v1/token/login/", formData)
        .then((response) => {
          const respToken = response.data.auth_token;
          token.set(respToken);
          console.log(JSON.stringify(response));

          axios.defaults.headers.common["Authorization"] = "Token " + $token;

          localStorage.setItem("token", $token);
          localStorage.setItem("username", username);

          successToast("You are logged in!");
          navigate("/");
        })
        .catch((error) => {
          if (error.response) {
            for (const property in error.response.data) {
              errors = [...errors, `${error.response.data[property]}`];
            }
          } else {
            errors = [...errors, "Something went wrong. Please try again"];
          }
          showErrors();
        });
    } else {
      showErrors();
    }
  }
</script>

<div class="w-full self-center">
  <div class="flex items-center justify-center">
    <div
      class="bg-zinc-900 py-6 rounded-md px-6 sm:px-10 sm:max-w-md shadow-md text-center"
    >
      <form on:submit|preventDefault={handleSignIn}>
        <h1
          class="text-center text-xl font-bold tracking-wider text-white antialiased"
        >
          Sign In
        </h1>
        <div class="space-y-4 mt-6">
          <div class="w-full">
            <input
              use:focus
              bind:value={username}
              type="text"
              placeholder="Username"
              class="px-4 py-2 border-2 text-white bg-indigo-800 bg-opacity-20 border-indigo-500
                      rounded-md shadow-sm focus:outline-none focus:border-indigo-500
                      focus:ring-indigo-800 focus:ring-2"
            />
          </div>
          <div class="w-full">
            <input
              bind:value={password}
              type="password"
              placeholder="Password"
              class="px-4 py-2 border-2 text-white bg-indigo-800 bg-opacity-20 border-indigo-500
                      rounded-md shadow-sm focus:outline-none focus:border-indigo-500
                      focus:ring-indigo-800 focus:ring-2"
            />
          </div>
        </div>
        <button
          class="w-full py-2 mt-5 bg-indigo-600 text-white rounded-md font-semibold
                tracking-wide transition ease-in-out hover:bg-indigo-700"
          >Login</button
        >
      </form>
    </div>
  </div>
</div>
