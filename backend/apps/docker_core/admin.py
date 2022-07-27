from django.contrib import admin

# Register your models here.
from apps.docker_core.models import SiteCore


@admin.register(SiteCore)
class SiteCoreAdmin(admin.ModelAdmin):
    ...
