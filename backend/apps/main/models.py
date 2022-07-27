from django.db import models
from django.contrib.auth import get_user_model


User = get_user_model()


class Site(models.Model):
    domain = models.CharField("Домен", max_length = 1024, null = True)
