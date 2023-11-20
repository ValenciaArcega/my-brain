# Maps
```
expo install react-native-maps
```

```
npx expo install expo-location

```
Generate API KEY on Google account. Example:
```
AIzaSyDKXmvL2_Ua-ju4yBV-PsD7bnvQ-SV5KIQ
```

## How to use? 🤔
👉 Follow the projects to see all details:  
https://github.com/ValenciaArcega/mapaAPI-reactNative  
```
import MapView, { Marker } from 'react-native-maps';

<View>
      <MapView
        style={{
			    height: '100%',
			    width: '100%',
			    // borderRadius: 10,
			  }}
        provider={isGoogle ? PROVIDER_GOOGLE : null}
        showsUserLocation={true}
        followsUserLocation={true}
        showsScale={true} // apple maps
        showsMyLocationButton={true}
        mapType="standard"
        userInterfaceStyle="dark" // apple maps
        showsPointsOfInterest={true}
        initialRegion={{
          latitude: 19.6283670,
          longitude: -99.0745796,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      />

			<TouchableOpacity onPress={goHome} style={{
			    height: 48,
			    width: '40%',
			    position: 'absolute',
			    top: 30,
			    left: 10,
			    gap: 6,
			    borderRadius: 50,
			    flexDirection: 'row',
			    alignItems: 'center',
			    justifyContent: 'center',
			    backgroundColor: '#fff',
			    shadowColor: 'black',
			    shadowOpacity: 0.2,
			    shadowRadius: 12,
			    shadowOffset: {
			      height: 6,
			      width: 0
			    }
			  }}>
        <Icon name="chevron-left" size={18} color="#000" />
        <Text style={{ fontSize: 18 }}>Regresar</Text>
      </TouchableOpacity>
</View>
```