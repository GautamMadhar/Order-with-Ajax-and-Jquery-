from django.shortcuts import render, redirect, HttpResponse
from .models import Order
from django.http import JsonResponse

# Create your views here.

def order_insert(request):
    context = {
        'order_data' : Order.objects.all()
    }
    
    if request.POST.get('action') == 'post':

        firstname = request.POST.get('firstname')
        lastname = request.POST.get('lastname')
        email = request.POST.get('email')
        address_street = request.POST.get('street')
        address_landmark = request.POST.get('landmark')
        address_pincode = request.POST.get('postalcode')
    
        Order.objects.create(
            firstname = firstname,
            lastname = lastname,
            email = email,
            address_street = address_street,
            address_landmark = address_landmark,
            address_pincode = address_pincode
        )
    return render(request,"order.html",context = context)

def order_delete(request):
    delete_id = request.GET.get('delete_id')
    print(delete_id)
    Order.objects.filter(id =delete_id).first().delete()
    context = {
        'order_data' : Order.objects.all()
    }
    return render(request,"order.html",context = context)
    #return JsonResponse({"message":"success"})

        #delete_record = request.POST.get('id',None)
    

    #return JsonResponse(delete_data)


def order_detail(request):
    context = {
        'order_data' : Order.objects.all()
    }
    return render(request,"detail.html",context = context)


def order_update(request):
    context = {
        'order_data' : Order.objects.all()
    }
    if request.POST.get('action') == 'post':
        edit_id = request.POST.get('edit_id')
        firstname = request.POST.get('firstname')
        lastname = request.POST.get('lastname')
        email = request.POST.get('email')
        address_street = request.POST.get('street')
        address_landmark = request.POST.get('landmark')
        address_pincode = request.POST.get('postalcode')
        Order.objects.filter(id = edit_id).update(
            firstname = firstname,
            lastname = lastname,
            email = email,
            address_street = address_street,
            address_landmark = address_landmark,
            address_pincode = address_pincode
            )
    return render(request,"order.html",context = context)