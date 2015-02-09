var queenAttack = function(queen_coord, other_coord) {
  var queen_x_coord = queen_coord[0];
  var queen_y_coord = queen_coord[1];

  var other_x_coord = other_coord[0];
  var other_y_coord = other_coord[1];

  var relative_other_x_coord = Math.abs(other_x_coord - queen_x_coord)
  var relative_other_y_coord = Math.abs(other_y_coord - queen_y_coord)

  if ((queen_y_coord === other_y_coord) || (queen_x_coord === other_x_coord) || (relative_other_x_coord === relative_other_y_coord)) {
    return true;
  } else {
    return false;
  }

};

$(document).ready(function() {
  $("form#coordinates").submit(function(event) {
    var queen_x = parseInt($("input#queen_x_coord").val());
    var queen_y = parseInt($("input#queen_y_coord").val());
    var other_x = parseInt($("input#other_x_coord").val());
    var other_y = parseInt($("input#other_y_coord").val());

    var result = queenAttack([queen_x, queen_y], [other_x, other_y]);

    if (!result) {
      $(".not").text("not");
    } else {
      $(".not").text("");
    }

    $("#result").show();
    event.preventDefault();
  });
});
