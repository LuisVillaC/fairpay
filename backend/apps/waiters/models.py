from django.db import models
from apps.common.models import TimestampedModel


class Waiter(TimestampedModel, models.Model):
    """
    Waiter class.
    """
    name = models.CharField(max_length=100)

    class Meta:
        """
        Verbose name for Waiter model.
        """
        verbose_name = "Waiter"
        verbose_name_plural = "Waiters"
