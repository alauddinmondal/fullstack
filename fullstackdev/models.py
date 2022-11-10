from django.db import models

# Create your models here.


class Plan(models.Model):
    itemname = models.CharField(max_length=500)