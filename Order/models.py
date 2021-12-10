from django.db import models
from datetime import datetime

class Order(models.Model):
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    email = models.EmailField()
    address_street = models.TextField()
    address_landmark = models.TextField()
    address_pincode = models.TextField()

    def __str__(self):
        return self.firstname + self.lastname



# Create your models here.
