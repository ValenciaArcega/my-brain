# Build the app for iOS and Android

## Prebuild
To create the **prebuild** version
```bash
npx expo prebuild
```
⚠️ If we want to delete the directories and rebuild them again, use the flag `--clean`
```bash
npx expo prebuild --clean
```

This will create the `ios` and `android`.

Then to run the prebuild projects
```bash
npx expo run:android
npx expo run:ios
```

Or list the virtual and physical devices
```bash
npx expo run:android --device
```

### First time ?

For macOS we can install **cocoapods** with brew, to install **brew**...
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Review the version
```bash
brew --version
```

Now install cocoapods
```bash
sudo brew install cocoapods
```

Add the configuration
```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zshrc
source ~/.zshrc
```

Apply
```bash
source ~/.zshrc   # or ~/.bash_profile for bash
```

Review the cocoapods and ruby versions
```bash
pod --version
ruby -v
```

Install the complement for cocoapods
```bash
sudo gem install cocoapods
```

Apply the configuration
```bash
export PATH=$PATH:$(ruby -e 'print Gem.user_dir')/bin
```

```bash
source ~/.zshrc   # or ~/.bash_profile for bash
```

Once the **JDK** had been installed create the file `local.properties` within `android/` and open with Android Studio to get the route automatically and avoid the error...

> ❌ SDK Android home.  

The file is something similar to
```bash
# Location of the SDK. This is only used by Gradle.
# For customization when using a Version Control System, please read the
# header note.
sdk.dir=/Users/yourusername/Library/Android/sdk
```
## Build the `.apk`

Build the build variant for *release*
```bash
npx expo run:android --variant release
```

To create the `.apk` within `android/app/build/outputs/apk/release` Execute the command inside the `android` directory
```bash
./gradlew assembleRelease
```

## EAS to get the `.ipa`

First thing is first. Create an account on _expo.dev_ and use that account to login in eas.  
Then install the dependency for _eas-cli_
```bash
sudo npm install -g eas-cli@latest    
```
Login with
```bash
eas login
```
> 💸 It is important to Singin with the Developer AppleID account in XCode

We can have several errors on the process like fastlane isn´t install, therefore install it...
```bash
brew install fastlane
```
Check the route
```bash
which fastlane 
```
Then to configure for both platforms
```bash
eas build:configure 
```
The file _eas.json_ file will be created and there we can update our profiles  
e.g.
```json
{
  "cli": {
    "version": ">= 10.2.2"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal"
    },
    "production": {
      "distribution": "internal",
      "ios": {
        "buildConfiguration": "Release"
      }
    }
  },
  "submit": {
    "production": {}
  }
}
```

When we have our final configuration for each variant we can chose the _profile name_ to get the artifact `.ipa`. With _--local_ we avoid to consume the build on cloud and use the pc instead, without the flag we will send the build to the Expo servers.
```bash
eas build --profile production --platform ios --local
eas build --profile production --platform android --local
```

🚀 If the project isn't broken will save the `.ipa` artifact.
