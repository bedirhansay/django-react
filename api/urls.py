from . import views
from django.urls import path

urlpatterns = [
    path('index/', views.getRoutes, name="routes"),
    path('notes/', views.getNotes, name="notes"),
    path('notes/<str:pk>/', views.getNoteById, name="note"),
]