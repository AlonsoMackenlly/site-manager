# Generated by Django 4.0.5 on 2022-07-18 13:04
import filebrowser

import apps.docker_core.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='SiteCore',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_active', models.BooleanField(default=False, verbose_name='Активность')),
                ('name', models.CharField(max_length=150, null=True, verbose_name='Название')),
                ('docker_image', models.CharField(max_length=1024, null=True, verbose_name='Образ Docker')),
                ('docker_compose', filebrowser.fields.FileBrowseField(blank=True, max_length=1024, verbose_name='Конфиг docker-compose')),
            ],
            options={
                'verbose_name': 'Ядро',
                'verbose_name_plural': 'Ядра веб-проектов',
            },
        ),
    ]