# Generated by Django 4.2.2 on 2023-06-25 15:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('products', '0001_initial'),
        ('waiters', '0001_initial'),
        ('tables', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='CustomerVisit',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('tip_percentage', models.IntegerField(default=0)),
                ('customer', models.IntegerField()),
            ],
            options={
                'verbose_name': 'Customer visit',
                'verbose_name_plural': 'Customer visits',
            },
        ),
        migrations.CreateModel(
            name='Visit',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('status', models.CharField(choices=[('started', 'Started'), ('finished', 'Finished')], default='started', max_length=20)),
                ('table', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tables.table')),
                ('waiter', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='waiters.waiter')),
            ],
            options={
                'verbose_name': 'Visit',
                'verbose_name_plural': 'Visits',
            },
        ),
        migrations.CreateModel(
            name='CustomerVisitProduct',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('customer_visit', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='visits.customervisit')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.product')),
            ],
            options={
                'verbose_name': 'Customer visit product',
                'verbose_name_plural': 'Customer visit products',
            },
        ),
        migrations.AddField(
            model_name='customervisit',
            name='visit',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='visits.visit'),
        ),
    ]
