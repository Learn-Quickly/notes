from django.db import models


class Note(models.Model):
    name = models.CharField("Название заметки", max_length=512, unique=False)
    description = models.TextField("Описание заметки", blank=True, null=True)
    remind = models.DateTimeField("Время напоминания")
    created = models.DateTimeField("Создано", auto_now_add=True)

    class Meta:
        verbose_name = "Заметка"
        verbose_name_plural = "Заметки"
