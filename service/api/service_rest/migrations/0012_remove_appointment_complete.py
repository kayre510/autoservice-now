# Generated by Django 4.0.3 on 2022-12-13 01:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0011_appointment_complete'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='appointment',
            name='complete',
        ),
    ]