// using Ajax and javascript
$(document).on('submit', '#submit',function(e){
    $.ajax({
        type:'POST',
        url:'{% url "record" %}',
        data:{
            first_name = $('#first_name').val(),
            last_name = $('#last_name').val(),
            email = $('#email').val(),
            street = $('#street').val(),
            landmark = $('#landmark').val(),
            postal_code =$('#postal_code').val(),
            data1 = $('#data1').val(),
            quantity = $('#quantity').val(),
            price = $('#price').val(),
            csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),
            action: 'post'
        }
        /*,
        success:function(json){
            document.getElementById("post-form").reset();
            $(".posts").prepend('<div class="col-md-6">'+
                '<div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">' +
                    '<div class="col p-4 d-flex flex-column position-static">' +
                        '<h3 class="mb-0">' + json.title + '</h3>' +
                        '<p class="mb-auto">' + json.description + '</p>' +
                    '</div>' +
                '</div>' +
            '</div>' 
            )
        },
        error : function(xhr,errmsg,err) {
        console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
    }*/
    });
});



/* <script type="text/javascript">
$(document).ready(function(){
    $('#submit').on('click', function(){
        $first_name = $('#first_name').val();
        $last_name = $('#last_name').val();
        $email = $('#email').val();
        $street = $('#street').val();
        $landmark = $('#landmark').val();
        $postal_code =$('#postal_code').val();
        $data1 = $('#data1').val();
        $quantity = $('#quantity').val();
        $price = $('#price').val();
 
        if($first_name == "" || $last_name == "" || $email == "" || $street == "" || $landmark == "" || 
            $postal_code == "" || $data1 == "" || $quantity == "" || $price == ""){
            alert("Please complete field");
        }else{
            $.ajax({
                type: "POST",
                url: "{% url 'record' %}",
                data:{
                    first_name: $first_name,
                    last_name: $last_name,
                    email: $email,
                    street: $street,
                    landmark: $landmark,
                    postal_code: $postal_code,
                    data1: $data1,
                    quantity: $quantity,
                    price: $price,  
                    csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
                }
            });
        }
    });
});
</script>






<!--
/*
        $(document).on('submit', '#delete',function(e){
            e.preventDefault();
            $.ajax({
                type:'POST',
                url:'{% url "insert" %}',
                data:{

                }
            function deleteUser(id) {
  var action = confirm("Are you sure you want to delete this user?");
  if (action != false) {
    $.ajax({
        url: '{% url "crud_ajax_delete" %}',
        data: {
            'id': id,
        },
        dataType: 'json',
        success: function (data) {
            if (data.deleted) {
              $("#userTable #user-" + id).remove();
            }
        }
    });
  }
            } 



            -->
*/

