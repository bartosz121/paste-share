<script>
  import { useFocus, navigate } from "svelte-navigator";
  import { toast } from "@zerodevx/svelte-toast";
  import { successToast, errorToast } from "../utils/toasts";
  import { API_URL } from "../utils/stores";
  import axios from "axios";

  const focus = useFocus();

  let username = "";
  let email = "";
  let password = "";
  let password2 = "";
  let errors = [];

  function showErrors() {
    toast.pop(0); // Dismiss any visible toasts
    errors.forEach((err) => {
      errorToast(err);
    });
  }

  async function handleSignUp() {
    errors = [];
    if (username === "") {
      errors = [...errors, "The username is missing"];
    }
    if (email === "") {
      errors = [...errors, "The email is missing"];
    }
    if (password === "") {
      errors = [...errors, "The password is too short"];
    }
    if (password !== password2) {
      errors = [...errors, "The passwords doesnt't match."];
    }

    if (!errors.length) {
      const formData = {
        username: username,
        email: email,
        password: password,
      };

      await axios
        .post($API_URL + "/api/v1/users/", formData)
        .then((response) => {
          successToast("Account created! You can now sign in");
          navigate("/sign-in");
        })
        .catch((error) => {
          if (error.response) {
            for (const property in error.response.data) {
              errors = [...errors, `${error.response.data[property]}`];
            }
          } else if (error.message) {
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
      <form on:submit|preventDefault={handleSignUp}>
        <h1 class="text-center text-xl font-bold tracking-wider text-white">
          Sign Up
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
              bind:value={email}
              type="email"
              placeholder="Email"
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
          <div class="w-full">
            <input
              bind:value={password2}
              type="password"
              placeholder="Confirm Password"
              class="px-4 py-2 border-2 text-white bg-indigo-800 bg-opacity-20 border-indigo-500
                    rounded-md shadow-sm focus:outline-none focus:border-indigo-500
                    focus:ring-indigo-800 focus:ring-2"
            />
          </div>
        </div>
        <button
          class="w-full py-2 mt-5 bg-indigo-600 text-white rounded-md font-semibold
                tracking-wide transition ease-in-out hover:bg-indigo-700"
          type="submit">Register</button
        >
      </form>
    </div>
  </div>
</div>
