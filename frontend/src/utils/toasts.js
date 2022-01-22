import { toast } from '@zerodevx/svelte-toast';

export function successToast(msg) {
  toast.push(msg, {
    theme: {
      '--toastBarBackground': '#22C55E',
    }
  })
}
export function errorToast(msg) {
  toast.push(msg, {
    theme: {
      '--toastBarBackground': '#DC2626',
    }
  })
}
export function infoToast(msg) {
  toast.push(msg, {
    theme: {
      '--toastBarBackground': '#6366f1',
    }
  })
}