declare let self: ServiceWorkerGlobalScope

export {}

self.addEventListener('message', (event) => {
  event.source?.postMessage(event.data)
})


