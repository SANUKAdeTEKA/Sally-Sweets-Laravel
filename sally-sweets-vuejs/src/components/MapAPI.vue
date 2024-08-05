<template>
    <div>
      <div ref="map" style="height: 400px;"></div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        map: null,
      };
    },
    mounted() {
      this.initMap();
    },
    methods: {
      initMap() {
        const center = { lat: 37.7749, lng: -122.4194 };
  
        this.map = new google.maps.Map(this.$refs.map, {
          center: center,
          zoom: 13,
        });
  
      },
    },
  };
  </script>
  
  