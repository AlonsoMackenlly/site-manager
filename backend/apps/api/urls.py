
from django.urls import path, include

from apps.api.router import router
from apps.api.views import SitesApiView

urlpatterns = [
    path('sites/', SitesApiView.as_view({'get': 'get'})),
    path('', include(router.urls)),
    path('', include('rest_framework.urls')),
]
