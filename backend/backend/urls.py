"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.contrib.auth.views import LoginView
from django.urls import (
    path,
    include
)
from filebrowser.sites import site

from apps.main.views import AuthorizationView

from apps.main.oidc import OIDCUserInfoView


urlpatterns = [
    path('admin/filebrowser/', site.urls),
    path('grappelli/', include('grappelli.urls')),
    path('admin/', admin.site.urls),
    path('oauth/userinfo/', OIDCUserInfoView.as_view(), name = "user-info"),
    path("oauth/authorize/", AuthorizationView.as_view(), name = "authorize"),
    path('oauth/', include('oauth2_provider.urls', namespace = 'oauth2_provider')),
    path('accounts/login/', LoginView.as_view(template_name = 'admin/login.html')),
    path('api/', include('apps.api.urls')),
]
