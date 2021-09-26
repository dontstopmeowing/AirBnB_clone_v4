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
});
