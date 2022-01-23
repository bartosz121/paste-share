<script>
  import { useFocus } from "svelte-navigator";
  import Editor from "../components/Editor.svelte";

  const focus = useFocus();
</script>

<div class="w-full md:w-3/4 mx-auto">
  <div class="editor-wrapper h-4/6 pt-8">
    <Editor />
  </div>
  <div class="actions h-2/6 p-8">
    <form
      action="#"
      method="post"
      class="flex flex-col md:flex-row gap-4 justify-center md:items-center"
    >
      <input
        use:focus
        class="border-2 text-white bg-indigo-800 bg-opacity-20 border-indigo-500
        rounded-md md:mr-6 py-2 px-3 md:w-96
        shadow-sm focus:outline-none focus:border-indigo-500
        focus:ring-indigo-800 focus:ring-2"
        type="text"
        name="title"
        id="title"
        placeholder="Title"
      />
      <button
        class="bg-indigo-600 px-12 py-2 text-lg font-semibold
        tracking-wide text-white rounded
        transition ease-in-out hover:bg-indigo-700"
        type="submit"
      >
        Paste
      </button>
    </form>
  </div>
</div>
