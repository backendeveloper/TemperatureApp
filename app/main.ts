import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { AppModule } from "./app.module";
import firebase = require("nativescript-plugin-firebase");

// firebase.init({
//     persist: true
//     // Optionally pass in properties for database, authentication and cloud messaging,
//     // see their respective docs.
// }).then(
//     (instance) => {
//         console.log("firebase.init done");
//     },
//     (error) => {
//         console.log("firebase.init error: " + error);
//     }
//     );




// var that = this;
// var onChildEvent = function (result) {
//     that.set("path", '/users');
//     that.set("type", result.type);
//     that.set("key", result.key);
//     that.set("value", JSON.stringify(result.value));
// };
// firebase.addChildEventListener(onChildEvent, "/users").then(
//     function (result) {
//         that._userListenerWrapper = result;
//         console.log("firebase.addChildEventListener added");
//     },
//     function (error) {
//         console.log("firebase.addChildEventListener error: " + error);
//     }
// );

platformNativeScriptDynamic().bootstrapModule(AppModule);