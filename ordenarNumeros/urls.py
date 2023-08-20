from django.urls import path
from . import views

app_name = 'ordenarNumeros'

urlpatterns = [
    path('',views.inicio,name='inicio'),        
]

