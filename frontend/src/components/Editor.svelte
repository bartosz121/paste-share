<script>
  import { onMount } from "svelte";
  import * as monaco from "monaco-editor/esm/vs/editor/editor.api";

  export let isReadOnly = false;
  export let content = "";
  let editor;

  onMount(() => {
    monaco.editor.create(editor, {
      value: content,
      readOnly: isReadOnly,
      fontSize: 16,
      language: "plaintext",
      minimap: {
        enabled: false,
      },
      automaticLayout: true,
      padding: {
        top: 15,
        bottom: 15,
      },
    });
    monaco.editor.setTheme("vs-dark");

    return () => {
      editor.dispose();
    };
  });
</script>

<div class="editor h-full" bind:this={editor} />
