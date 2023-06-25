from rest_framework import routers

from .views import VisitViewSet

router = routers.DefaultRouter(trailing_slash=False)

router.register(r'', VisitViewSet)
