function Movies(age, movie, time) {
  this.age = age;
  this.movie = movie;
  this.time = time;
  this.price = []
}

Movies.prototype.movieResult = function() {
  if (selectedAge === "1") {

  }
}

};


// User Interface Logic
$(document).ready(function() {
  $("form#movie-select").submit(function(event) {
  event.preventDefault();

  var selectedAge = $("#age").val();
  var selectedMovie = $("#movie").val();
  var selectedTime = $("#time").val();

  }
}
