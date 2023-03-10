from django.urls import path
from .views import api_list_appointments, api_show_appointment_details, api_list_technicians, api_list_auto_vos, api_service_history


urlpatterns = [
    path("appointments/", api_list_appointments, name="api_list_appointments"),

    path("appointments/<int:pk>/", api_show_appointment_details, name="api_show_appointment"),

    path("technicians/", api_list_technicians, name="api_list_technicians"),

    path("appointments/vin/<str:vin>/", api_service_history, name="api_service_history"),

    path("automobiles/", api_list_auto_vos, name="api_list_auto_vos")


]
