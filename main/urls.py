from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("submit_rsvp/", views.submit_rsvp, name="submit_rsvp")
]