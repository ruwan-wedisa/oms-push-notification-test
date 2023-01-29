import firebase from 'firebase/app';
import 'firebase/messaging';

var firebaseConfig = {
    apiKey: "AIzaSyCgfTE0AtnIpD3no_scmLMiBam1_HDFrQ4",
    authDomain: "oms-push-notifications.firebaseapp.com",
    projectId: "oms-push-notifications",
    storageBucket: "oms-push-notifications.appspot.com",
    messagingSenderId: "1098922251373",
    appId: "1:1098922251373:web:489c670ff0a8cc5862db64"
  };

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();


export const getToken = (setTokenFound) => {
    return messaging.getToken({vapidKey: 'BOoTdZvrDbY86Z9Hd0YMMdEX5O4k90oFWrDGYHWw9rkqstWrRB9oLx6FlGn1wt2Sc9qe_3U70CEyErZaynIir3Q'}).then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        setTokenFound(true);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log('No registration token available. Request permission to generate one.');
        setTokenFound(false);
        // shows on the UI that permission is required
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // catch error while creating client token
    });
  }

  export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
});
