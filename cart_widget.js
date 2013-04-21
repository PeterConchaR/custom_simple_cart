
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
