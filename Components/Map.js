import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

const Map = () => {
  const [region, setRegion] = useState({
    latitude: 31.520370,
    longitude: 74.358749,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const onRegionChange = (newRegion) => {
    // setRegion(newRegion);
  };

  return (
    <View style={styles.container}>
     
      <MapView
        style={StyleSheet.absoluteFill}
        provider={PROVIDER_GOOGLE}
        initialRegion={region}
        region={region}
        onRegionChange={onRegionChange}
        showsUserLocation={true}
        showsMyLocationButtons={true}

      />
      <Text style={styles.debugText}>
        Latitude: {region.latitude}, Longitude: {region.longitude}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '50%', 
  },
  debugText: {
    height: '10%',
    textAlign: 'center',
  },
});

export default Map