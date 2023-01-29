importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: "AIzaSyCgfTE0AtnIpD3no_scmLMiBam1_HDFrQ4",
    authDomain: "oms-push-notifications.firebaseapp.com",
    projectId: "oms-push-notifications",
    storageBucket: "oms-push-notifications.appspot.com",
    messagingSenderId: "1098922251373",
    appId: "1:1098922251373:web:489c670ff0a8cc5862db64"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});