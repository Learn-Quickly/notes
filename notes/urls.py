from django.contrib import admin
from django.urls import path, include, re_path
from .views import index

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^auth/', include('djoser.urls')),
    re_path(r'^auth/', include('djoser.urls.authtoken')),
    re_path(r'^notes/', include('app.notes_main.urls')),
    path('', index, name='index')
]
