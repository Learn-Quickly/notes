from django.urls import re_path, include
from .views import NoteListView, ManageNoteView

urlpatterns = [
    re_path(r'^all/?', NoteListView.as_view(), name="notes-all"),
    re_path(r'^note/(?P<id>\d+)/?', ManageNoteView.as_view(), name="manage-notes"),
]
