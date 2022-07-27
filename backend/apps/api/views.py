from django.contrib.auth import get_user_model
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.api.serializers import UserSerializer, SitesSerializer
from apps.main.models import Site

User = get_user_model()


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class SitesApiView(viewsets.ViewSet, viewsets.ViewSetMixin, viewsets.generics.GenericAPIView):
    permission_classes = []

    def get(self, request):
        """ Возвращает список сайтов """

        sites = SitesSerializer(list(Site.objects.all()), many=True)
        return Response(sites.data)
