$(document).ready(function() {
    const $container = $("#container");
    $.getJSON("http://localhost:8000/").then(function(users) {
      users.forEach(function(user) {
        let $newUser = $("<li>", {
          text: `${user.name} ${user.email}`
        });
        $container.append($newUser);
      });
    });
});