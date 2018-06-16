from django.urls import path
from . import views

app_name = 'cesod'
urlpatterns = [
    path('', views.index, name='index'),
    path('getin', views.getin, name='getin'),
]
