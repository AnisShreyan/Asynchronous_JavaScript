function register() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      //   return rej("Error While Registration...");
      console.log("Register end");
      res();
    }, 2000);
  });
}
function sendEmail() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Send Email end");
      res();
    }, 3000);
  });
}
function login() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Login end");
      res();
    }, 3000);
  });
}
function getUserData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      return rej("There's no data of the user");
      console.log("Get User Data end");
    }, 2000);
  });
}
function displayUserData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Display User Data end");
      res();
    }, 2000);
  });
}

function otherWork() {
  console.log("other work");
}

//Then Catch

// register()
//   .then(sendEmail)
//   .then(login)
//   .then(getUserData)
//   .then(displayUserData)
//   .catch((e) => {
//     console.log(e);
//   });

//Async Await

// const authentication = async (e) => {
//   await register();
//   await sendEmail();
//   await login();
//   await getUserData();
//   await displayUserData();
// };

// authentication()
//   .then((e) => {
//     console.log("all set");
//   })
//   .catch((e) => {
//     console.log(e);
//   });

//Try Catch

const authentication = async (e) => {
  try {
    await register();
    await sendEmail();
    await login();
    await getUserData();
    await displayUserData();
  } catch (err) {
    console.log(err);
    throw new Error();
  }
};

authentication()
  .then((e) => {
    console.log("all set");
  })
  .catch((e) => {
    console.log(e);
  });

otherWork();
