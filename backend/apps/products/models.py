from django.db import models
from apps.common.models import TimestampedModel


class Product(TimestampedModel, models.Model):
    """
    Product class.
    """

    name = models.CharField(max_length=100)
    price = models.FloatField()
    short_description = models.CharField(max_length=200)
    image = models.ImageField(upload_to='products/', null=True, blank=True)

    class Meta:
        """
        Verbose name for the Product model.
        """
        verbose_name = "Product"
        verbose_name_plural = "Products"
