from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def index(request):
    return render(request, 'cesod/index.html')


def getin(request):
    return HttpResponse('这 我还没做呢你就点！！！！<br>就知道点')
