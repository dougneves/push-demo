//vapid keys generated with web-push cli
const vapidKeys = {
  publicKey:
    "BIlU27N4bL2RoMh39on3Yh4HapV21c9qFtqJjgHxS8A-7-z6026EZ6BI5sbeJIlrpFjgOYAtKDL-b4fxUttZNUM",
  privateKey: "5e_XiVIuiGT-jumdaLHROUPH45VGNB_4otsVY9tsbcs"
};

const webpush = require("web-push");

webpush.setVapidDetails(
  "mailto:dougneves@gmail.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

webpush
  .sendNotification(
    {
      endpoint:
        "https://fcm.googleapis.com/fcm/send/c6I6FDZ4ikM:APA91bEVdsoDdQGvcWXgp3kjt_faJENyLWIQtK2k1V06SUg3d48i1oGbC9_Hac941tpnhVA0Nx8OsfLES5S5h2AuTBomZw-CLvF0_TkafjWVnpOGPBwmWm_3DD4vMdSF76wp8lHtIVHU",
      expirationTime: null,
      keys: {
        p256dh:
          "BOPGiN8UTGcm4j6WeSb8cQw9eg-1uptNrXOXaIRrlpK6j9GqQty33CRB7RkQqVyTglX9111MEcmENiXwGYoDvz0=",
        auth: "wiZhgxFc0oOwEHzfDKZHEQ=="
      }
    },
    JSON.stringify({
      notification: {
        title: "agora sim uma notificacao",
        body: "com corpo de mensagem e tudo mais"
      }
    })
  )
  .then(msg => console.log(msg))
  .catch(err => console.error(err));
