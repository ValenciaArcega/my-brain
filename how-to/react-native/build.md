## Build the app

```bash
npx expo prebuild
```

Para correr el proyecto en el emulador

```bash
npx expo run:android
npx expo run:ios
```

O para dispositivos físicos

```bash
npx expo run:android --device
```

Agregar la configuración para android de la apariencia

```bash
npm install expo-system-ui
```

Para macOS se puede instalar cocoapods con **brew**

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Corroborar la versión de brew

```bash
brew --version
```

Una vez instalado brew cocoapods

```bash
sudo brew install cocoapods
```

Agregar la configuración

```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zshrc
source ~/.zshrc
```

Aplicar

```bash
source ~/.zshrc   # or ~/.bash_profile for bash
```

Revisar la versión de cocoapods

```bash
pod --version
ruby -v
```

Instalar el complemento de cocoapods

```bash
sudo gem install cocoapods
```

Aplicar la configuración

```bash
export PATH=$PATH:$(ruby -e 'print Gem.user_dir')/bin
```

```bash
source ~/.zshrc   # or ~/.bash_profile for bash
```

`app.json`

```json
"expo": {
	"android": {
		"userInterfaceStyle": "automatic"
	}
}
```

Una vez instalado el **JDK** se necesita crear el archivo `local.properties` dentro del directorio `android/` y abrir el proyecto con Android Studio para que se genere la ruta y evitar el error de

> ❌ SDK Android home.
> El archivo debe ser algo similar a:

```bash
# Location of the SDK. This is only used by Gradle.
# For customization when using a Version Control System, please read the
# header note.
sdk.dir=/Users/yourusername/Library/Android/sdk
```

Para evitar errores relacionados con la red de la aplicación se debe configurar al archivo `Manifest.xml` agregando los permisos

`android/app/src/main/AndroidManifest.xml`

```xml
  <uses-permission android:name="android.permission.INTERNET"/>
  <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />

	<application
		android:usesCleartextTraffic="true">
	...
	</application>
```

## Build the .apk

Construir la aplicación

```bash
npx expo run:android --variant release
```

Para crear el .apk dentro de `android/app/build/outputs/apk/release`

```bash
./gradlew assembleRelease
```
