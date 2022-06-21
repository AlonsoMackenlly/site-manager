from rest_framework import routers

from apps.api.views import UserViewSet

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)

