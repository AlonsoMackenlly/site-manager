from django.contrib.auth import get_user_model
from rest_framework import serializers

from apps.main.models import Site

User = get_user_model()


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'url', 'username', 'email', 'is_staff']


class SitesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Site
        fields = ['id', 'domain']
