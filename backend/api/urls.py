
from operator import imod
from django.urls import path
from .views import *
urlpatterns = [
    path('LoginUser', LoginUser,name="LoginUser"),
    path('RegistrUser', RegistrUser,name="RegistrUser"),
]
