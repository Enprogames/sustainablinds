# users/views.py

from django.shortcuts import render


def base(request):
    return render(request, "base.html")


# Create your views here.
def dashboard(request):
    return render(request, "users/dashboard.html")
