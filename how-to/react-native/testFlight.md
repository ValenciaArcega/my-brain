# Integrate app on TestFlight 🐞

## Set up on AppStore Connect
Login onto https://appstoreconnect.apple.com/ and configure the App. This process will be depending if the bundle identifier has been used before or not.

> Add the users that have access to the app testing build in the tab `Users and Access`, register their email and full name.

Also in the `TestFlight` tab of the _app_ we can set **External** or **Internal** Testers once the app is status '_ready to test_'.

## Bundle the app
Once the prebuild had been completed it is time to open the `ios / MyApp.xcworkspace` in XCode.

Then open the app settings dashboard on the **General** tab and set the iOS default version, the bundle and app name.
> ⚠️ In the second tab **Signing and Capabilities** it is paramount to have the developer account set up to date.

Once the project is configurated just rest to compile the project onto `Any iOS Device (arm64)`.  

🛠️ Then build the app with `cmd` + `B`.

Once it finish, in Xcode `Product` tab select **Archive** (will take several minutes depending on the app bundle), then will open the **Organizer** with the bundle ready to be uploaded.
