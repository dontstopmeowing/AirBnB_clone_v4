const amenities = {};
$(document).ready(function () {
  $('input[type="checkbox"]').change(function () {
    if (this.checked) {
      amenities[$(this).attr('data-id')] = $(this).attr('data-name');
    } else if (!this.checked) {
      delete amenities[$(this).attr('data-id')];
    }
    let name = Object.keys(amenities).map((key) => {
      return amenities[key];
    });
    name += '&nbsp';
    $('div.amenities H4').html(name);
  });

  $.ajax({
    type: 'POST',
    url: 'http://localhost:5001/api/v1/places_search/',
    data: '{}',
    dataType: 'json',
    contentType: 'application/json',
    success: function (data) {
      for (const place of data) {
        const _place = `<article>
							<div class="title_box">
							   <h2>${place.name}</h2>
							   <div class="price_by_night">$${place.price_by_night}</div>
							</div>
							<div class="information">
							   <div class="max_guest">${place.max_guest} Guests</div>
							   <div class="number_rooms">${place.number_rooms} Bedrooms</div>
							   <div class="number_bathrooms">${place.number_bathrooms} Bathrooms</div>
							</div>
							<div class="description">${place.description}</div>
						 </article>`;
        $('section.places').append(_place);
      }
    }
  });
});
