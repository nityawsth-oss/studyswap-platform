<script>
  function initMap() {
    var location = {lat: 26.8467, lng: 80.9345}; // Lucknow
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: location
    });
    var marker = new google.maps.Marker({
      position: location,
      map: map
    });
  }
</script>
