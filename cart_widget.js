//if we are NOT on the checkout page: show widget
if ($('body').prop('id') != 'checkout') {
  simpleCart({
    cartColumns: [
      { attr: "name" , label: "Name" },
      { attr: "quantity" , label: "Qty" },
      { attr: "total" , label: "Subtotal", view: "currency" },
      { view: "remove" , text: "Remove" , label: false },
      //custom view: link to product detail
      {view: function (item, column) {
        var linkTitle = item.get('name');
        //eliminate white space and turn to lower case the product name to use as a file name
        var itemHREF = linkTitle.split(" ").join("").toLowerCase() + ".html";
        var productLink = $('<a href="' + itemHREF + '">' + column.text + '</a>');
        return productLink;
      },
      text: "View Details",
      label: false
    } //end custom column view
  ]
 }); //end simpleCart object instance
}  //end if statement

//start an else statement just after the end of the if statement in the code above
else {
  simpleCart({
    cartColumns: [
      //custom column view for linked image
      {view: function (item, column) {
        var linkTitle = item.get('name');
        var trimmedTitle = linkTitle.split(" ").join("").toLowerCase();
        var itemHREF = trimmedTitle + ".html";
        var itemImgSrc = 'img/' + trimmedTitle + '.jpg';
        return $('<a href="' + itemHREF + '"><img class="hidden-phone" src="' + itemImgSrc + '" alt="" /></a>');
      } //end anonymous function for custom view
      }, //end custom column view



      //built-in column views
      { attr: "name" , label: false },
      { attr: "quantity" , label: "Quantity" },
      { view: "increment" , label: false , text: "+" },
      { view: "decrement" , label: false , text: "-" },
      { view: "remove" , text: "<i class='icon-remove-sign'></i> Remove Product" , label: false },
      { attr: "total" , label: "Subtotal", view: "currency"}
    ] //end cart columns
  }); //end cart object instance
}  //end else statement
