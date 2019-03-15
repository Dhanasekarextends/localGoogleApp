// import Realm from "realm";
// export const SIGNUP_SCHEMA = "Signup";
// export const SIGNUP_DETAILS_SCHEMA = "SIGNUP_DETAILS";

// export const SignupDetailsSchema = {
//   name: "SIGNUP_DETAILS_SCHEMA",
//   primaryKey: "id",
//   properties: {
//     id: "int",
//     name: { type: "string", indexed: "true" },
//     done: { type: "bool", default: "false" }
//   }
// };

// export const SignupSchema = {
//   name: "SIGNUP_SCHEMA",
//   primaryKey: "id",
//   properties: {
//     id: "int",
//     name: "string",
//     creationDate: "date",
//     todos: { type: "list", objectType: "SIGNUP_DETAILS_SCHEMA" }
//   }
// };

// const databaseOptions = {
//   path: "signupDatabase.realm",
//   schema: [SignupDetailsSchema, SignupSchema],
//   schemaVersion: 0
// };

// export const insertNewSignupList = newSignupList =>
//   new Promise((resolve, reject) => {
//     Realm.open(databaseOptions)
//       .then(realm => {
//         realm.write(() => {
//           realm.create(SIGNUP_SCHEMA, newSignupList);
//           resolve(newSignupList);
//         });
//       })
//       .catch(error => reject(error));
//   });

// export const updateSignupList = signupList =>
//   new Promise((resolve, reject) => {
//     Realm.open(databaseOptions)
//       .then(realm => {
//         realm.write(() => {
//           let updatingSignupList = realm.objectForPrimaryKey(
//             SIGNUP_SCHEMA,
//             signupList.id
//           );
//           updatingSignupList.name = signupList.name;
//           resolve();
//         });
//       })
//       .catch(error => reject(error));
//   });

// export const queryAllSignupList = () => new Promise((resolve, reject) => {
//     Realm.open(databaseOptions).then(realm => {
//         let allSignupList = realm.objects(SIGNUP_SCHEMA);
//         resolve(allSignupList);
//     }).catch((error)=>{
//         reject(error);
//     });;
// });

// export default new Realm(databaseOptions);
