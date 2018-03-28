self.addEventListener('push', function(event) {
  console.log('[Service Worker] Push Received.')
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`)

  const { title, message, icon } = JSON.parse(event.data.text()).notification
  const options = {
    body: message,
    icon: icon
  }

  event.waitUntil(self.registration.showNotification(title, options))
})
