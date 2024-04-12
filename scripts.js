mapboxgl.accessToken = 'pk.eyJ1IjoiYmVsYXNoMjg5IiwiYSI6ImNsdXZvdnNsOTA1dnUycXBiMnVkaXViMmEifQ.z2sImsw6PlvmcmpAudghiw';
        
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/dark-v11',
            center: [126.62635, 45.74010], // starting position [lng, lat]
            zoom: 11, // starting zoom
            bearing: 30
        });

    // create the popup
    const popup = new mapboxgl.Popup({ offset: 25 }).setText(
        'Harbin Institute of Technology'
    );
    
    // create the popup
    const popup2 = new mapboxgl.Popup({ offset: 25 }).setText(
        'Northeast Forestry University'
    );
    
    // create the popup
    const popup3 = new mapboxgl.Popup({ offset: 25 }).setText(
        'Heilongjiang University'
    );
    
    // create the popup
    const popup4 = new mapboxgl.Popup({ offset: 25 }).setText(
        'Heilongjiang University of Technology'
    );

// create the popup
const popup5 = new mapboxgl.Popup({ offset: 25 }).setText(
    'Harbin University of Science and Technology'
);

// create the popup
const popup6 = new mapboxgl.Popup({ offset: 25 }).setText(
    'Harbin University of Sports'
);

    // Create a default Marker and add it to the map.
    const Univeristy1 = new mapboxgl.Marker()
        .setLngLat([126.63243, 45.75595])
        .setPopup(popup)
        .addTo(map);
    
    // Create a default Marker and add it to the map.
    const Univeristy2 = new mapboxgl.Marker()
        .setLngLat([126.63020, 45.71757])
        .setPopup(popup2)
        .addTo(map);
    
        // Create a default Marker and add it to the map.
    const Univeristy3 = new mapboxgl.Marker()
        .setLngLat([126.62872, 45.70953])
        .setPopup(popup3)
        .addTo(map);
        
   // Create a default Marker and add it to the map.
   const Univeristy4 = new mapboxgl.Marker()
   .setLngLat([126.64808, 45.81771])
   .setPopup(popup4)
   .addTo(map);      

   // Create a default Marker and add it to the map.
   const Univeristy5 = new mapboxgl.Marker()
   .setLngLat([126.61519, 45.71401])
   .setPopup(popup5)
   .addTo(map);

   // Create a default Marker and add it to the map.
   const Univeristy6 = new mapboxgl.Marker()
   .setLngLat([126.67167, 45.75827])
   .setPopup(popup6)
   .addTo(map);