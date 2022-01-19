<script>
  import Navbar from "../components/Navbar.svelte";
  import Editor from "../components/Editor.svelte";
</script>

<div class="w-3/4 mx-auto">
  <div class="editor-wrapper h-4/6 pt-8">
    <Editor />
  </div>
  <div class="actions h-2/6 p-8 text-center">
    <form action="#" method="post" />
    <input
      class="border-2 text-white bg-indigo-800 bg-opacity-20 border-indigo-500
      rounded-md mr-6 py-2 px-3 w-96
      shadow-sm focus:outline-none focus:border-indigo-800
      focus:ring-indigo-800 focus:ring-2 "
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
  </div>
</div>
