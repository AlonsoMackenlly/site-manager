# Generated by Django 4.0.5 on 2022-06-19 14:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Site',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('domain', models.CharField(max_length=1024, null=True, verbose_name='Домен')),
            ],
        ),
        migrations.DeleteModel(
            name='TelegramProfile',
        ),
    ]
