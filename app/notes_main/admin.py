from django.contrib import admin
from app.notes_main.models import Note

@admin.register(Note)
class NoteAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'remind', 'created')
