# Generated by Django 4.0.3 on 2022-12-12 23:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0010_appointment_canceled'),
    ]

    operations = [
        migrations.AddField(
            model_name='appointment',
            name='complete',
            field=models.BooleanField(null=True),
        ),
    ]