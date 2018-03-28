//vapid keys generated with web-push cli
const vapidKeys = {
  publicKey:
    'BIlU27N4bL2RoMh39on3Yh4HapV21c9qFtqJjgHxS8A-7-z6026EZ6BI5sbeJIlrpFjgOYAtKDL-b4fxUttZNUM',
  privateKey: '5e_XiVIuiGT-jumdaLHROUPH45VGNB_4otsVY9tsbcs'
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
        'https://fcm.googleapis.com/fcm/send/cN55LCvmmtg:APA91bF2JGYzM24BNtGZ4ZYJpTeTuyk3mec7JEmgKOM8xiXrdjVTUI7M9aBEJ8ndlFaKcHRh1asOhFPKbNHW_Scc7TGMZto23cGHw5_V3TophY_hJHtJV2jjwUvEXMd9PzdCJzeE9XfB',
      expirationTime: null,
      keys: {
        p256dh:
          'BCg4PhqkIvh_2k1-Y0wtFPYqghYKImzu84ER_UELgVyhChAD8DF1l9Qd6uQso7onEVonJO-4qx-T9V3tfK6bOvM',
        auth: 'k45PWGQ6IOPZMw1fAfv56A'
      }
    },
    'oi'
  )

  .then(msg => console.log('sucesso', msg))
  .catch(err => console.error(err))
