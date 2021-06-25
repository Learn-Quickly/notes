from rest_framework.serializers import ModelSerializer
from app.notes_main.models import Note


class NoteSerializer(ModelSerializer):

    def create(self, validated_data):
        user = self.context.get('user') or self.context.get('request', {}).user
        return Note.objects.create(created_by=user, **validated_data)

    class Meta:
        model = Note
        fields = ['id', 'name', 'description', 'remind', 'created']
