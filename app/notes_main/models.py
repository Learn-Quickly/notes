from django.db import models
from django.contrib.auth.models import User


class Note(models.Model):
    name = models.CharField("Название заметки", max_length=512, unique=False)
    description = models.TextField("Описание заметки", blank=True, null=True)
    remind = models.DateTimeField("Время напоминания")
    created = models.DateTimeField("Создано", auto_now_add=True)
    created_by = models.ForeignKey(User, verbose_name='Создатель', on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Заметка"
        verbose_name_plural = "Заметки"

    def __str__(self):
        return self.name
