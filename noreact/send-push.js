//vapid keys generated with web-push cli
const vapidKeys = {
  publicKey:
    'BCJDRGiY2VcTDsOMRDQkcRRkl_M7F-uBtC7eeygEtY_dMVHnWX5_prlHNkJTF1EaUAPcOGnVtzXMvuzhFhZ4hCk',
  privateKey: 'r4Vtq84QOEIExbQcLEQ8IzfFL7R_qmMB3AYw-DcXhCg'
}

const webpush = require('web-push')

webpush.setVapidDetails(
  'mailto:dougneves@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
)

webpush
  .sendNotification(
    {
      endpoint:
        'https://fcm.googleapis.com/fcm/send/cfIRa5prfpE:APA91bHeJDSIam_Gy9bEPmjotluH84y26fFeLDUa9fsjKMo3JDWHG0foVO7Xxq1FlY8PVWFde5ChyKOc-T7CzA71lF-3chJ_Gb7p67nueOPoEtsf4oqvatQicgnVRpCEqP6VSBvG9VrU',
      expirationTime: null,
      keys: {
        p256dh:
          'BI-lKCpaf_xm6QqSRNCAMlUNgaqGFwqBKZ_hHv7CMhjXZAp1THxEEMGJzxeap9Wl8FfwvKGKrwu3HM3hzY3AY30',
        auth: 'wID0uNTBagQG-EjbdjQZ1Q'
      }
    },
    JSON.stringify({
      notification: {
        title: 'Oi coiso',
        message:
          'Essa é uma baita de uma notificação legal, com simbolos e 123456 78 9 0 ...',
        icon:
          'https://cdn4.iconfinder.com/data/icons/business-304/48/74-512.png'
      }
    })
  )

  .then(msg => console.log('sucesso', msg))
  .catch(err => console.error(err))
