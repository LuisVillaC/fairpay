from django.db import models


class TimestampedModel(models.Model):
    """
    Abstract table class.
    created_at = date of creation
    updated_at = date of last update
    """
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True
