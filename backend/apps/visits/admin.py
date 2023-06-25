from django.contrib import admin
from .models import (Visit, CustomerVisit, CustomerVisitProduct)

admin.site.register(Visit)
admin.site.register(CustomerVisit)
admin.site.register(CustomerVisitProduct)
