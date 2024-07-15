from django.db import models

# Create your models here.
class Resposta(models.Model):
    name = models.CharField(max_length=100)
    cellphone = models.CharField(max_length=20)
    food_restriction = models.CharField(max_length=3, choices=[('yes', 'Sim'), ('no', 'Não')])
    food_restriction_details = models.CharField(max_length=200, blank=True)
    bringing_guest = models.CharField(max_length=3, choices=[('yes', 'Sim'), ('no', 'Não')])
    guest_name = models.CharField(max_length=100, blank=True)
    guest_food_restriction = models.CharField(max_length=3, choices=[('yes', 'Sim'), ('no', 'Não')], blank=True)
    guest_food_restriction_details = models.CharField(max_length=200, blank=True)
    bringing_kids = models.CharField(max_length=3, choices=[('yes', 'Sim'), ('no', 'Não')])
    kids_ages = models.CharField(max_length=64, blank=True)

    def __str__(self):
        return self.name