# Generated by Django 4.0.5 on 2022-07-18 14:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('docker_core', '0002_alter_sitecore_docker_compose'),
    ]

    operations = [
        migrations.AddField(
            model_name='sitecore',
            name='options',
            field=models.TextField(default='{}', verbose_name='Параметры'),
        ),
    ]