from django.db import models
from apps.common.models import TimestampedModel


TABLE_STATUS_CHOICES = (
    ('available', 'available'),
    ('busy', 'busy')
)


class Table(TimestampedModel, models.Model):
    """
    Table class.
    alias = table name
    """

    alias = models.CharField(max_length=255)
    status = models.CharField(max_length=255, default='available', choices=TABLE_STATUS_CHOICES)
    default_client_capacity = models.IntegerField(default=2)

    class Meta:
        """Verbose name for Table model.
        """
        verbose_name = "Table"
        verbose_name_plural = "Tables"
