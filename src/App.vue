<template>
  <div id="app">
    <header>
      <h1>{{ title }}</h1>
    </header>
  
    <div id="app" class="csvForm container-fluid">
      <div class="row">
        <div class="col-sm">
          <json-to-geojson-form placeholder="Upload your AOI in JSON format" @geojson="onGeoJson"></json-to-geojson-form>
        </div>
        <div class="col-sm">
          <!-- todo: map goes here? -->
          <div id="app" style="height: 100%">
            <v-map ref="map" :zoom="13" :center="[47.413220, -1.219482]" :geojson="geojson" v-show="geojson" >
            </v-map>
          </div>
        </div>
      </div>
    </div>
  
    <footer>
      TRC Connector
    </footer>
  </div>
</template>

<script>
import GithubButtons from "./assets/buttons.js";  // eslint-disable-line no-unused-vars
import JsonToGeojsonForm from "./components/JsonToGeojsonForm";
import LeafletMap from './components/LeafletMap';

export default {
  name: 'app',
  data () {
    return {
      title: 'TRC Connector',
      geojson: false
    }
  },
   components: {
    'json-to-geojson-form': JsonToGeojsonForm,
    'v-map': LeafletMap
  },
  methods: {
    onGeoJson: function(evt) {
      this.geojson = JSON.parse(JSON.stringify(evt));
      
      setTimeout(function() { window.dispatchEvent(new Event('resize')) }, 250);
    }
  }
}
</script>

<style lang="scss">
@import '~bootstrap/dist/css/bootstrap.css';

html, body {
  margin: 20px;
  font-family: 'Roboto', sans-serif;
}

footer,
footer a {
  color: #C0C0C0;
  size: 0.8rem;
  text-align: center;
  margin-top: 30px;
}
</style>
