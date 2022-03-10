# users/urls.py

from django.urls import path, include
from users import views

urlpatterns = [
    path("accounts", include("django.contrib.auth.urls")),
    path("", views.base, name="base"),
    path("dashboard", views.dashboard, name="dashboard")
]
