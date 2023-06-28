from django.contrib import admin
from .models import (Visit, CustomerVisit, CustomerVisitProduct)


class VisitAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Visit._meta.fields]


class CustomerVisitAdmin(admin.ModelAdmin):
    list_display = [field.name for field in CustomerVisit._meta.fields]


class CustomerVisitProductAdmin(admin.ModelAdmin):
    list_display = [field.name for field in CustomerVisitProduct._meta.fields]


admin.site.register(Visit, VisitAdmin)
admin.site.register(CustomerVisit, CustomerVisitAdmin)
admin.site.register(CustomerVisitProduct, CustomerVisitProductAdmin)
