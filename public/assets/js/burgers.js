// Make sure to wait to attach handlers until the DOM is fully loaded.
$(document).ready(function () {

  $(".devour").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    var newCustomer = $.trim($("#" + id).val())
    
    if (newCustomer === "" || newCustomer === "Order" || newCustomer === "Customer Name" || newCustomer === "Enter Name") {
      $("#customerName").val("Order");
      return false;
    };
    
    var ateBurger = true
    var newAteBurger = {
      id: id,
      devoured: ateBurger,
      customer_name: newCustomer
    };
    
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newAteBurger
    }).then(
      function () {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


  $(".create-form").on("submit", function (event) {
    event.preventDefault();
    if ($.trim($("#burgerName").val()) === "" || $.trim($("#burgerName").val()) === "Burger Name" || $.trim($("#burgerName").val()) === "Please enter a Burger Name") {
      $("#burgerName").val(" Please enter a Burger Name");
      return false;
    }
    if ($.trim($("#chefName").val()) === "" || $.trim($("#chefName").val()) === "Chef Name" || $.trim($("#chefName").val()) === "Please enter a Chef Name") {
      $("#chefName").val(" Please enter a Chef Name");
      return false;
    }
    var newBurger = {
      burger_name: $("#burgerName").val().trim(),
      chef_name: $("#chefName").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


  $(".delete").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    var deleteBurger = {
      id: id
    };
    // Send the delete request.
    $.ajax("/api/burgers/" + id + "delete", {
      type: "DELETE",
      data: deleteBurger
    }).then(
      function () {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});  