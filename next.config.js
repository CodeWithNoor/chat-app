
const hostnames = [
    'github.com',
    'lh3.googleusercontent.com',
    'avatars.githubusercontent.com']

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: hostnames.map(hostname => ({
            protocol: 'https',
            hostname
        }))
    },
    env: {
        GOOGLE_ID: '211884311297-oasuoff16nl044v5helrd02520egh81b.apps.googleusercontent.com',
        GOOGLE_SECRET: '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',
        GITHUB_ID: "eab91b00885e5e9d9842",
        GITHUB_SECRET: "d5a405bf9c944af388144065a4c357216bc9b5a4",
        NEXTAUTH_URL: "http://localhost:3000/",
        NEXTAUTH_SECRET: 'say_lalisa_love_me_lalisa_love_me_hey',
        FIREBASE_APIKEY: 'AIzaSyB-P_jB_cq4yYPFjTyTWdTT4S4jb4-JKyg',
        FIREBASE_CLIENT_EMAIL: "firebase-adminsdk-mptxe@chat-app-translator-f1ff4.iam.gserviceaccount.com",
        FIREBASE_PROJECT_ID: "chat-app-translator-f1ff4",
        FIREBASE_PRIVATE_KEY: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDU5S9xelihwR4m\nK3G8GfDNjT89vUMG+VrtVh9P/VT7MciIdXzOCVGgB0TTB+VkLv3t/QN8iXwmPTKD\nlvMT/hxYsO25/SFJyrcj0rKy7mCmDsm0FrzUYR/rjfbrXrPurXFfXI1pT0LHI8qp\nbWVnGOZEzdrFykd4bWD6jAMCinRkFFFMyLnukt4+1xYpiopyf+gg1Na/msg9GS2A\nu9vKkEMgMhtqzUVq4EaUpKINmKr16kN8KHTlJ2mdF59fglnbKVp6PADQfqRP5Mxy\nn+3AT6yx4rkNd2F7ERa7tQkJXew4r9mxV1pv0MazsVUCgvSD397Fxn3AJ6v2W1GJ\nQQRHWDCnAgMBAAECggEAFzneXa0hK0XO0g+OS8exYjN6hp6gcovUtCzfo1Hk1Ld0\nhGf7ktzTEg2I9X7t3eqp2wNt6ccethXvbgoTVdyKCiZZ9nRbuS8LoOBf4i59znqx\niFtXWXzeccvd+DAE8FFCxkpqG7xBHEmsK/oahHoOcSDbhmrli4lfTvuPE9a4EPeF\nhbfKMFQ4FRplqOec0zW2J1KWhRaaxv7/Px2S+9xlZ+Pu43S6v4MNs+J9tKUCUftH\nZKo4baYyI8Lhnd7zwg8Wf7dmqIdN7j0gNYl+UC++piAkzr/cB1IQv0f8optFtVPH\n5vqcb1hmcZ3R7YCcjK5AbHV3FuTnWhbchRRvb4ZnWQKBgQDweFuQ85bdXA65y1s4\nPDbCXaS1uEDppiNXi0r/x53E0h5ngIr9rwFIbgnDgOceCKZFv5/520szDB/8MFly\n9YIRm/dwA24VuNBtukzn+TVWa7PlGE44mTl0SS0dcgnqD0Sf3fKwQ4uxdXzVrNh6\nCjjH2TOsi6QG/k0V72DDr6NMjwKBgQDipPARDWvbB0ZRyF3pxOhlMJl6oWXSPUPM\nayyZe2xsf+fKNSounSzkECX06rpP4rMWMwONFTxc+YRr1SGrsWznCDL40TIN1vWu\nVSevmbxfYp0S9FfdBdW/FDla59bODMsJs1FBajl0MoRoHAfFxMjkSESouHxhDZQm\n0wdEbl6WaQKBgQCIpUwbFWCAT0SK7XTbgtP3JPFo1dgFLYRdxeiLampLor7mP9Q7\njcvj1au0rbYnifC6J8cHW0bjLhuq2eqqebo8uW0k+L4Al/HQuJHlK+bUQgWKxIIG\nhYNxgfeiCOB7Ycu0MJIs+WUTJVkXrs2go9haMCG+BefilXVGZq2M5WydHwKBgQDN\ny16A3WL1+uELGZjMz5MFbt+tzieagy6wyxAwPTXyPyHFJgkrUmSUoWUVwp1yNDLR\nEXlD/ehVs+tdzqVINU7haTx/WdTNZEapCYGDnWDCa9SchWnSs52mZ0K9HI6bglpK\ncJxzfXS14bkAn5MfLNQNFOHjIcEujxnbNvr+VAlnIQKBgAb0K3AztYpgl5zysWQ1\nqTELDi08YxIhldzlHF2dVQTI+zZJptA1Dl5emrw/QXpQ5W2NAHvfLu/0cn9jeNMe\nxjKbxh4YjQ/ucihgSot24tGDEC0yTEJUsyjWVVneQ2f0E/5KmyFRlO8LPI5X+Ety\np5zTrueIj/MQ/34SckRITvcT\n-----END PRIVATE KEY-----\n",
        FIREBASE_AUTH_DOMAIN: "chat-app-translator-f1ff4.firebaseapp.com",
        FIREBASE_STORAGE_BUCKET: "chat-app-translator-f1ff4.appspot.com",
        FIREBASE_MESSAGE_SENDER_ID: "211884311297",
        FIREBASE_APP_ID: "1:211884311297:web:ce375d6049c0cbd6c35100",
        STRIPE_SECRET_KEY: "sk_test_510084uKDjTc6FlwiQpBFxveZOmaHvtXsM6QrCqMXMeynZNr8Jw73KUICUfMn3WGVjSjsn9Di707l68OUfLT44G0300Xea4R3Fj",
        FIREBASE_PAYMENT_MODE: "subscription"
    },
}

module.exports = nextConfig

