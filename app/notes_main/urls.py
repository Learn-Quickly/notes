from django.urls import re_path, include

urlpatterns = [
    re_path(r'^api/?', include('app.notes_main.api.urls')),
]
