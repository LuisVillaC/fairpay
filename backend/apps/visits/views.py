import datetime

from rest_framework import viewsets, mixins
from rest_framework.response import Response

from .models import Visit
from .serializers import VisitSerializer
from rest_framework.decorators import action


class VisitViewSet(mixins.DestroyModelMixin, mixins.ListModelMixin, viewsets.GenericViewSet):
    """
    Visit endpoints
    """
    queryset = Visit.objects.all()
    serializer_class = VisitSerializer

    def list(self, request):
        start_date = request.GET.get('start_date')
        end_date = request.GET.get('end_date')

        if not request.GET.get('start_date') or not request.GET.get('end_date'):
            return Response({
                'error': 'start_date and end_date are required'
            }, 400)

        try:
            datetime.date.fromisoformat(start_date)
            datetime.date.fromisoformat(end_date)
        except ValueError:
            return Response({
                'error': 'start_date and end_date are wrongly formatted'
            }, 400)

        visits = Visit.objects.filter(created_at__range=[start_date, end_date])

        serializer = VisitSerializer(visits, many=True)
        return Response(serializer.data)

    @action(
        detail=False,
        methods=['delete'],
        url_path='delete-visit-by-dates'
    )
    def delete_visit_by_dates(self, request, *args, **kwargs):
        start_date = request.GET.get('start_date')
        end_date = request.GET.get('end_date')
        visits_to_be_deleted = Visit.objects.filter(
            created_at__range=[start_date, end_date],
            status="finished"
        )
        visits_to_be_deleted.delete()
        return Response(status=200)
