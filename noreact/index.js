const applicationServerPublicKey =
  'BCJDRGiY2VcTDsOMRDQkcRRkl_M7F-uBtC7eeygEtY_dMVHnWX5_prlHNkJTF1EaUAPcOGnVtzXMvuzhFhZ4hCk'

if ('serviceWorker' in navigator && 'PushManager' in window) {
  console.log('Service Worker and Push is supported')

  navigator.serviceWorker
    .register('sw.js')
    .then(swReg => {
      console.log('Service Worker is registered', swReg)

      swReg.pushManager.getSubscription().then(subscription => {
        const isSubscribed = !(subscription === null)

        if (isSubscribed) {
          console.log('User is subscribed:', JSON.stringify(subscription))
        } else {
          console.log('User is NOT subscribed. Asking...')
          subscribeUser(swReg)
        }
      })
    })
    .catch(error => {
      console.error('Service Worker Error', error)
    })
} else {
  console.warn('Push messaging is not supported')
}

function subscribeUser(swReg) {
  const applicationServerKey = urlBase64ToUint8Array(applicationServerPublicKey)
  swReg.pushManager
    .subscribe({
      userVisibleOnly: true,
      applicationServerKey: applicationServerKey
    })
    .then(function(subscription) {
      console.log('User is subscribed:', JSON.stringify(subscription))
    })
    .catch(function(err) {
      console.log('Failed to subscribe the user: ', err)
    })
}

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4)
  const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/')
  const rawData = window.atob(base64)
  return Uint8Array.from([...rawData].map(char => char.charCodeAt(0)))
}
