from uuid import uuid4
from django.conf import settings
from django.db import models
from filebrowser.fields import FileBrowseField


class SiteCore(models.Model):
    """ Веб-ядро """

    is_active = models.BooleanField("Активность", default = False)
    name = models.CharField("Название", max_length = 150, null = True)
    docker_image = models.CharField(verbose_name = "Образ Docker", max_length = 1024, null = True)

    options = models.TextField("Параметры", default = "{}")

    def __str__(self):
        return str(f'{self.name}')


    class Meta:
        verbose_name = "Ядро"
        verbose_name_plural = "Ядра веб-проектов"
