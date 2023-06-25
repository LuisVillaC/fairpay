from django.db import models
from apps.common.models import TimestampedModel

TABLE_VISIT_STATES = (
    ('started', 'Started'),
    ('finished', 'Finished')
)


class Visit(TimestampedModel, models.Model):
    """
    Visit class.
    """
    waiter = models.ForeignKey('waiters.Waiter', on_delete=models.CASCADE)
    status = models.CharField(max_length=20, default='started', choices=TABLE_VISIT_STATES)
    table = models.ForeignKey('tables.Table', on_delete=models.CASCADE)

    class Meta:
        """
        Verbose name for Visit model.
        """
        verbose_name = "Visit"
        verbose_name_plural = "Visits"


class CustomerVisit(TimestampedModel, models.Model):
    """
    CustomerVisit class.
    """
    visit = models.ForeignKey('Visit', on_delete=models.CASCADE)
    tip_percentage = models.IntegerField(default=0)
    customer = models.IntegerField()

    class Meta:
        """
        Verbose name for CustomerVisit model.
        """
        verbose_name = "Customer visit"
        verbose_name_plural = "Customer visits"


class CustomerVisitProduct(TimestampedModel, models.Model):
    """
    CustomerVisitProduct class.
    """
    product = models.ForeignKey('products.Product', on_delete=models.CASCADE)
    customer_visit = models.ForeignKey('CustomerVisit', on_delete=models.CASCADE)

    class Meta:
        """
        Verbose name for CustomerVisitProduct model.
        """
        verbose_name = "Customer visit product"
        verbose_name_plural = "Customer visit products"
