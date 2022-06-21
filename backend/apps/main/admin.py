from django.contrib import admin

# Register your models here.
from apps.main.models import Site


@admin.register(Site)
class SitesAdmin(admin.ModelAdmin):
    ...
