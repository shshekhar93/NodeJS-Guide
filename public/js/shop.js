// $ === jQuery
$(document)
  .ready(function() {
    console.log('Hello world from client side!');

    $('.item-form').on('submit', function(event) {
      event.preventDefault();
      const selectedForm = event.currentTarget;
      const inputTag = $(selectedForm).find('input[name="itemId"]');
      const itemId = inputTag.val();

      console.log('selected item id is', itemId);

      $.post('/shop/addToCart', {
        itemId: itemId
      })
        .then(function(data) {
          console.log('new cart details =', data);
          $('#num-item').text(data.numCartItem);
          $('#cart-price').text(data.cartPrice);
        })
    });
  });
