from rest_framework import permissions
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from app.notes_main.api.serializers import NoteSerializer
from app.notes_main.models import Note


class NoteListView(ListCreateAPIView):
    """
    endpoint: /notes/api/all/
    GET list of all user Notes

    POST - create new note
    data:
    {
        "name": "",
        "description": "",
        "remind": timestamp
    }
    """

    serializer_class = NoteSerializer
    permission_classes = [permissions.IsAuthenticated]
    pagination_class = None

    def get_queryset(self):
        return Note.objects.filter(created_by=self.request.user)


class ManageNoteView(RetrieveUpdateDestroyAPIView):
    """
    endpoint: /notes/api/note/<id>
    GET - get note info

    PUT - change note info. All fields must be mentioned

    PATCH - partial note info changing. It's not necessary to mention all fields.

    DELETE - delete note
    """
    lookup_url_kwarg = 'id'
    permission_classes = [permissions.IsAuthenticated]
    pagination_class = None
    serializer_class = NoteSerializer

    def get_queryset(self):
        return Note.objects.filter(created_by=self.request.user)
